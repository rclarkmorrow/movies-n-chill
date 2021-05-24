# Third party dependencies
import datetime
import json
from urllib.request import urlopen
from flask import Flask, request, jsonify
from flask_cors import CORS
# from jose import jwt
from Models import db, Movies, Users, SelectedMovies



def create_app():
    app = Flask(__name__)
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

    @app.route('/')
    def home():
        return "Welcome to Movies and Chill"

    # Get and post users.
    @app.route('/users', methods=['GET', 'POST'])
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
            # NOTE: Uncomment to prevent duplicate auth0_id entries
            # if Users.query.filter_by(auth0_id=usr.auth0_id).first():
            #     return jsonify('user already in database'), 402
            if usr.movies:
                for movie in usr.movies:
                    # NOTE: Create a function to add movies to the
                    # database if they are not already in it, and
                    # create the SelectedMovies records for the
                    # user.
                    pass
            usr.insert()
            return jsonify('added user'), 200

    # Get and post movies
    @app.route('/movies', methods=['GET'])
    def get_movies():
        # NOTE: Remove for production
        # version (we are not returning a list of movies
        # to the app)
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

    # Get or patch user by ID.
    @app.route('/users/<uid>', methods=['GET', 'PATCH', 'DELETE'])
    def get_patch_or_delete_user(uid):
        print(f'UID is: {uid}')
        print(f'today: {datetime.date.today()}') # {datetime.date.today()}')
        user = Users.query.filter_by(user_id=uid).first_or_404\
                (description='There is no data with {}'.format(uid))
        if request.method == 'GET':
            # Returned object is a list.
            print(f'usr is type {type(user)}')
            # The items in the list are object of type User
            return jsonify(user.with_movies())
        elif request.method == 'PATCH':
            req = request.get_json()
            for key, value in req.items():
                if key != 'movies':
                    setattr(user, key, value)
            user.modified_date = datetime.date.today()
            user.modified_by = 'api patch'
            if user.movies:
                for movie in user.movies:
                    # NOTE: Create a function to check
                    # the new list of movies and delete
                    # SelectedMovie relationships that
                    # no longer exist, and create new ones.
                    exist = Movies.query.filter_by(tmdb_id=movie.tmdb_id).first
                    if exist:
                        movie.update()
                    else:
                        add_movie(user, movie)

            user.update()
            return jsonify('user updated'), 200
        elif request.method == 'DELETE':
            user.delete()
            return jsonify('user deleted'), 200

    def add_movie(user, new_movie):
        pass

    @app.route('/auth0/<aid>', methods=['GET'])
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

    # Get or patch user by ID.
    @app.route('/users/<uid>/matches', methods=['GET'])
    def get_user_matches(uid):
        # NOTE: matching algorithm should be base on the passed
        # in user ID's movie list matching with other users
        # somehow.

        # John= Users.query.filter_by(user_name='John').first()
        # print(John.email_address)

        # users = Users.query.all()
        # for user in users:
        #     #print(user.user_name)
        #     print(f"id={user.user_id}, user_name={user.user_name}")
        #
        # print(" ")
        #
        # movies = Movies.query.all()
        # for movie in movies:
        #     #print(user.user_name)
        #     print(f"id={movie.movie_id}, movie_name={movie.movie_title}")

        # selectedmovies = SelectedMovies.query.all()
        # for selectedmovie in selectedmovies:
        #     #print(user.user_name)
        #     print(f"id={selectedmovie.user_id}, movie_name={selectedmovie.movie_id}")

        uid=2
        usr = Users.query.filter_by(user_id=uid).first()
        print(f"uid={usr.user_id}, user_name={usr.user_name},seek_gender = {usr.seeking_gender} ")

        all_usr_data = [usr.user_id, usr.seeking_gender]


        selectedmovies_by_id = SelectedMovies.query.filter_by(user_id=uid)
        for selectedmovies_by_id in selectedmovies_by_id:
            #print(user.user_name)
            #print(f"uid={selectedmovies_by_id.user_id}, movie_id={selectedmovies_by_id.movie_id}")
            m = Movies.query.filter_by(movie_id=selectedmovies_by_id.movie_id).first()
            # print(f"uid={selectedmovies_by_id.user_id}, "
            #       f"movie_id={selectedmovies_by_id.movie_id}, "
            #       f"movie_title={m.movie_title}")
            all_usr_data.append(m.movie_title)
        print(all_usr_data)




        return jsonify(f'matches for user {uid}'), 200




    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, host='0.0.0.0', port=5000)