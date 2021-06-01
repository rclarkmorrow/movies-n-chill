# Third party dependencies
import datetime
import sys
from urllib.request import urlopen
from flask import Flask, Blueprint, request, jsonify
from flask_cors import CORS
# from jose import jwt
from Models import db, Movies, Users, SelectedMovies
from Matches import Profiles


app = Flask(__name__)
api = Blueprint('api', __name__)

app.secret_key = 'a secret'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///MoviesNChill.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

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


@api.route('/test')
def test():
    return "Welcome to Movies and Chill"


# Get and post users.
@api.route('/users', methods=['GET', 'POST'])
def get_and_post_users():
    # NOTE: Remove "GET" request for production
    # version (we are not returning a list of users
    # to the app)
    if request.method == 'GET':
        users = Users.query.all()
        # Returned object is a list.
        print(f'users is type {type(users)}')
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

        # NOTE: Uncomment to prevent duplicate auth0_id entries
        print("User auth0_id:" + user['auth0_id'])
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
                # NOTE: Create a function to add movies to the
                # database if they are not already in it, and
                # create the SelectedMovies records for the
                # user.

                exist = Movies.query.filter_by(tmdb_id=movie['tmdb_id']).first()
                if exist:
                    print("User exist")
                    add_movie_to_user(new_user, exist)
                else:
                    add_movie(new_user, movie)

        return jsonify('added user'), 200


def add_movie(user, movie):
    try:
        # ------------------------------
        # add movie to Movies table
        # ------------------------------
        print("user id:" + str(user.user_id))
        print("user name:" + str(user.user_name))
        print(movie)

        mv = Movies(tmdb_id=movie['tmdb_id']
                    , movie_title=movie['movie_title']
                    , url_movie_image=movie['url_movie_image']
                    , genres=movie['genres']
                    , rating=movie['rating']
                    , year=movie['year']
                    , created_by='app post'
                    )
        print("Try to insert new movie")
        mv.insert()
        print("Movie inserted")
        # ------------------------------
        # match movie and user
        # ------------------------------

        print(" ---- Match movie and user ----")
        print("Match movie tmdb_id: " + movie['tmdb_id'])
        print("Match user_id: " + str(user.user_id))
        new_movie = Movies.query.filter_by(tmdb_id=movie['tmdb_id']).first()
        add_movie_to_user(user,new_movie)
        # smv = SelectedMovies(user_id=user.user_id, movie_id=new_movie.movie_id)
        # smv.insert()

    except:  # catch all exceptions
        e = sys.exc_info()[0]
        return jsonify('Error: {1}', e), 500
    return jsonify('added movie'), 200


def add_movie_to_user(user, movie):
    try:
        smv = SelectedMovies(user_id=user.user_id, movie_id=movie.movie_id)
        smv.insert()
    except:  # catch all exceptions
        e = sys.exc_info()[0]
        return jsonify('Error: {1}', e), 500
    return jsonify('added movie to the user'), 200


# Get and post movies
@api.route('/movies', methods=['GET'])
def get_movies():
    # NOTE: Remove for production
    # version (we are not returning a list of movies
    # to the app)
    if request.method == 'GET':
        movies = Movies.query.all()
        # Returned object is a list.
        print(f'movie is type {type(movies)}')
        # The items in the list are object of type User
        for item in movies:
            print(f'type of item in list {type(item)}')
            print(f'the item: {item}')
            print(item.movie_id)
            print(item.movie_title)
            print(f'full {item.full()}')
        return jsonify([movie.full() for movie in movies]), 200


@api.route('/movies/<mid>', methods=['PATCH', 'DELETE'])
def patch_delete_movies(mid):
    # NOTE: Remove for production
    # version (we are not returning a list of movies
    # to the app)
    if request.method == 'DELETE':
        movie = Movies.query.filter_by(movie_id=mid).first_or_404 \
            (description='There is no data with {}'.format(mid))
        movie.delete()
        return jsonify('movie deleted'), 200
    if request.method == 'PATCH':
        return jsonify('No edit movie feature'), 200


# Get or patch user by ID.
@api.route('/users/<uid>', methods=['GET', 'PATCH', 'DELETE'])
def get_patch_or_delete_user(uid):
    print(f'UID is: {uid}')
    print(f'today: {datetime.date.today()}')  # {datetime.date.today()}')
    user = Users.query.filter_by(user_id=uid).first_or_404\
            (description='There is no data with {}'.format(uid))

    if request.method == 'GET':
        # Returned object is a list.
        print(f'usr is type {type(user)}')
        # The items in the list are object of type User
        return jsonify(user.with_movies())
    elif request.method == 'PATCH':
        print("----- Edit -------")
        req = request.get_json()
        for key, value in req.items():
            if key != 'movies':
                setattr(user, key, value)
        user['modified_by'] = 'api patch'

        print("Edit user_id: " + str(user['user_id']))
        selected_movies = [SelectedMovies.query.filter_by(user_id=user['user_id'])]
        print(selected_movies)
        if user['movies']:
            for movie in user['movies']:
                # NOTE: Create a function to check
                # the new list of movies and delete
                # SelectedMovie relationships that
                # no longer exist, and create new ones.
                pass

        # user.update()
        return jsonify('user updated'), 200
    elif request.method == 'DELETE':
        user.delete()
        return jsonify('user deleted'), 200


@api.route('/auth0/<aid>', methods=['GET'])
def get_user_by_autho_id(aid):
    print(f'AUID is: {aid}')
    print(f'today: {datetime.date.today()}')  # {datetime.date.today()}')
    user = Users.query.filter_by(auth0_id=aid).first_or_404 \
        (description='There is no data with {}'.format(aid))
    if request.method == 'GET':
        # Returned object is a list.
        print(f'usr is type {type(user)}')
        # The items in the list are object of type User
        return jsonify(user.with_movies())
    else:
        return jsonify('There is no data with {}'.format(aid)), 404


@api.route('/selectedmovies', methods=['GET'])
def get_data_in_selected_movie():
    if request.method == 'GET':
        selectedmoives = SelectedMovies.query.all()
        # Returned object is a list.
        print(f'Selectedmoives is type {type(selectedmoives)}')
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
def get_user_matches(uid):
    # NOTE: matching algorithm should be base on the passed
    # in user ID's movie list matching with other users
    # somehow.

    matching_users, matching_percentage = Profiles.get_matching_users(uid)
    print('matching_user', matching_users)

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

app.register_blueprint(api, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
