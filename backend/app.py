# Third party dependencies
import datetime
import sys
import os
from dotenv import load_dotenv
from flask import Flask, Blueprint, request, jsonify
from flask_cors import CORS
from Models import db, Movies, Users, SelectedMovies
from Matches import Profiles
from auth import AuthError, requires_auth, requires_user_match


app = Flask(__name__)
api = Blueprint('api', __name__)

# Get database configuration from .evn file
load_dotenv()
DB_USER = os.getenv('DB_USER')
DB_PASS = os.getenv('DB_PASS')
DB_HOST = os.getenv('DB_HOST')
DB_PORT = os.getenv('DB_PORT')
DB_NAME = os.getenv('DB_NAME')


app.secret_key = 'a secret'

# # # OLD SQLITEDB CONFIG
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///MoviesNChill.db'
app.config['SQLALCHEMY_DATABASE_URI'] = \
    'postgresql+psycopg2://{user}:{passwd}@{host}:{port}/{db}'.format(
        user=DB_USER,
        passwd=DB_PASS,
        host=DB_HOST,
        port=DB_PORT,
        db=DB_NAME
    )


db.init_app(app)

# Set up CORS. Allow '*' for origins.
CORS(app, resources={r"*": {"origins": "*"}})


# CORS Headers
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Headers',
                         'Content-Type,Authorization,true')
    response.headers.add('Access-Control-Allow-Methods',
                         'GET, POST, PATCH, DELETE')
    return response


@api.route('/')
def home():
    return "Welcome to Movies and Chill"


@api.route('/test/<uid>')
@requires_auth
def test(uid):
    # Get the user from the database and make sure the auth0_id
    # stored for that user matches the id in the header.
    # NOTE: remove this from production.
    user = Users.query.filter_by(user_id=uid).first_or_404\
            (description='There is no data with {}'.format(uid))
    if requires_user_match(user.auth0_id):
        # If match, do the logic
        return "Welcome to Movies and Chill. You have a match", 200
    # Else return some kind of error
    return "Unauthorized access", 401


# Get and post users.
@api.route('/users', methods=['GET', 'POST'])
@requires_auth
def get_and_post_users():
    # NOTE: Remove "GET" request for production
    # version (we are not returning a list of users
    # to the app)
    if request.method == 'GET':
        users = Users.query.all()

        # The items in the list are object of type User
        for item in users:
            print(f'type of item in list {type(item)}')
            print(f'the item: {item}')
            print(item.user_id)
            print(item.user_name)
            print(item.picture_url)
            print(f'full {item.full()}')
        return jsonify([user.full() for user in users]), 200

    elif request.method == 'POST':
        user = request.get_json()
        # if True:
        if requires_user_match(user['auth0_id']):
            # To prevent duplicate auth0_id entries
            if Users.query.filter_by(auth0_id=user['auth0_id']).first():
                return jsonify('user already in database'), 402

            print(f'new user: {user}')
            usr = Users(user_name=user['user_name']
                        , picture_url=user['picture_url']
                        , phone_number=user['phone_number']
                        , email_address=user['email_address']
                        , auth0_id=user['auth0_id']
                        , state=user['state']
                        , city=user['city']
                        , self_gender=user['self_gender']
                        , seeking_gender=user['seeking_gender']
                        , created_by='api post'
                        )
            usr.insert()

            print('user[auth0_id]= ' + user['auth0_id'])
            new_user = Users.query.filter_by(auth0_id=user['auth0_id']).first()
            print("New user name: " + new_user.user_name)
            print("New user id: " + str(new_user.user_id))

            print(user['movies'])
            if user['movies']:
                for movie in user['movies']:
                    exist = Movies.query.filter_by(tmdb_id=movie['tmdb_id']).first()
                    if exist:
                        print("User exist")
                        add_movie_to_user(new_user.user_id, exist.movie_id)
                    else:
                        add_movie(new_user, movie)

            return jsonify('added user'), 200
        else:
            return jsonify('auth0_id mismatch'), 401
    else:
        return jsonify('could not complete request', 400)


def add_movie(user, movie):
    try:
        # ------------------------------
        # add movie to Movies table
        # ------------------------------
        mv = Movies(tmdb_id=str(movie['tmdb_id'])
                    , movie_title=str(movie['movie_title'])
                    , url_movie_image=str(movie['url_movie_image'])
                    , genres=str(movie['genres'])
                    , rating=str(movie['rating'])
                    , year=str(movie['year'])
                    , created_by='app post'
                    )
        mv.insert()
        print("Movie inserted")
        # ------------------------------
        # match movie and user
        # ------------------------------
        new_movie = Movies.query.filter_by(tmdb_id=movie['tmdb_id']).first()
        add_movie_to_user(user.user_id, new_movie.movie_id)
    except:  # catch all exceptions
        e = sys.exc_info()[0]
        print(f'add movie: {e}')


def add_movie_to_user(user_id, movie_id):
    try:
        smv = SelectedMovies(user_id=int(user_id), movie_id=int(movie_id))
        smv.insert()
    except:  # catch all exceptions
        e = sys.exc_info()[0]
        print(f'add movie to the user: {e}')


def remove_movie_from_user(curr_map):
    try:
        for curr in curr_map:
            smv = SelectedMovies.query.filter_by(user_id=curr.user_id, movie_id=curr.movie_id).first()
            smv.delete()
    except:  # catch all exceptions
        e = sys.exc_info()[0]
        print(f'remove movie {e}')


# Get delete or patch user by ID.
@api.route('/users/<uid>', methods=['GET', 'PATCH', 'DELETE'])
@requires_auth
def get_patch_or_delete_user(uid):

    user = Users.query.filter_by(user_id=uid).first_or_404\
            (description='There is no data with {}'.format(uid))

    if request.method == 'GET':
        # The items in the list are object of type User
        return jsonify(user.with_movies())

    if requires_user_match(user.auth0_id):
        if request.method == 'PATCH':  # Update a user with movies
            req = request.get_json()
            # return req
            for key, value in req.items():
                if key != 'movies':
                    setattr(user, key, value)
            user.modified_by = 'api patch'

            # Remove movies that are not in the new mapping list
            existing_map = SelectedMovies.query.filter_by(user_id=uid)
            remove_movie_from_user(existing_map)

            # Add and map new movie selection to the user
            if req['movies']:
                for movie in req['movies']:
                    exist = Movies.query.filter_by(tmdb_id=movie['tmdb_id']).first() is not None
                    if exist:
                        existing_movie = Movies.query.filter_by(tmdb_id=movie['tmdb_id']).first()
                        mapped = SelectedMovies.query.filter_by(user_id=uid
                                                                , movie_id=existing_movie.movie_id).first() is not None

                        if mapped:  # Already mapped with the user
                            pass
                        else:  # Movie exists but not map with the user
                            add_movie_to_user(uid, existing_movie.movie_id)
                    else:
                        add_movie(user, movie)  # Add new movie to Movies table and map with the user

            user.update()
            return jsonify('user updated'), 200

        elif request.method == 'DELETE':
            user.delete()
            return jsonify('user deleted'), 2004
    return 'something went wrong', 500


# Get and post movies
@api.route('/movies', methods=['GET'])
def get_movies():
    if request.method == 'GET':
        movies = Movies.query.all()
        # The items in the list are object of type User
        for item in movies:
            print(f'type of item in list {type(item)}')
            print(f'the item: {item}')
            print(item.movie_id)
            print(item.movie_title)
            print(f'full {item.full()}')
        return jsonify([movie.full() for movie in movies]), 200


@api.route('/movies/<mid>', methods=['PATCH', 'DELETE'])
@requires_auth
def patch_delete_movies(mid):
    if request.method == 'DELETE':
        movie = Movies.query.filter_by(movie_id=mid).first_or_404 \
            (description='There is no data with {}'.format(mid))
        movie.delete()
        return jsonify('movie deleted'), 200
    if request.method == 'PATCH':
        return jsonify('No edit movie feature'), 200


@api.route('/auth0/<aid>', methods=['GET'])
@requires_auth
def get_user_by_autho_id(aid):
    user = Users.query.filter_by(auth0_id=aid).first_or_404 \
        (description='There is no data with {}'.format(aid))
    if request.method == 'GET':
        # The items in the list are object of type User
        return jsonify(user.with_movies())
    else:
        return jsonify('There is no data with {}'.format(aid)), 404


@api.route('/selectedmovies', methods=['GET'])
@requires_auth
def get_data_in_selected_movie():
    if request.method == 'GET':
        selectedmoives = SelectedMovies.query.all()
        # The items in the list are object of type User
        for item in selectedmoives:
            print(f'type of item in list {type(item)}')
            print(f'the item: {item}')
            print(item.user_id)
            print(item.movie_id)
            print(f'full {item.full()}')
        return jsonify([selectedmoive.full() for selectedmoive in selectedmoives]), 200
    else:
        return jsonify('There is no data found'.format()), 404


# Get or patch user by ID.
@api.route('/users/<uid>/matches', methods=['GET'])
@requires_auth
def get_user_matches(uid):
    user = Users.query.filter_by(user_id=uid).first_or_404\
            (description='There is no data with {}'.format(uid))
    # if True:
    if requires_user_match(user.auth0_id):
        matching_users, matching_percentage = Profiles.get_matching_users(uid)
        musers = []
        for usr in matching_users:
            musers.append(Users.query.filter_by(user_id=usr).first())

        count = 0
        user_to_append = []
        for user in musers:
            temp = user.full_for_matches()
            temp['match_percent'] = matching_percentage[count]
            user_to_append.append(temp)
            count = count + 1
        return jsonify(user_to_append), 200
    else:
        return jsonify('unauthorized'), 401


@app.errorhandler(AuthError)
def handle_auth_error(ex):
    response = jsonify(ex.error)
    response.status_code = ex.status_code
    return response


app.register_blueprint(api, url_prefix='/api')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
