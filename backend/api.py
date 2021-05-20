""" --------------------------------------------------------------------------#
# IMPORTS
# --------------------------------------------------------------------------"""
# Credit: https://hackersandslackers.com/flask-sqlalchemy-database-models/

# Third party dependencies
from flask import Flask, request, jsonify
from Models import db, Movies, Users, Vaccines, Genders, Locations, SelectedMovies
from flask import Flask

app = Flask(__name__)
app.secret_key = 'a secret'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///MoviesNChill.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)


@app.route('/')
def home():
    return "Welcome to Movies and Chill"


# ------------------------------
# GET All
# ------------------------------
@app.route('/users')
def get_all_users():
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
    return jsonify([user.full() for user in users])


@app.route('/movies')
def get_all_movies():
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
    return jsonify([movie.full() for movie in movies])


@app.route('/vaccines')
def get_all_vaccines():
    vaccines = Vaccines.query.all()
    # Returned object is a list.
    print(f'movie is type {type(vaccines)}')
    # The items in the list are object of type User
    for item in vaccines:
        print(f'type of item in list {type(item)}')
        print(f'the item: {item}')
        print(item.vaccine_id)
        print(item.description)
        print(f'full {item.full()}')
    return jsonify([vaccine.full() for vaccine in vaccines])


@app.route('/genders')
def get_all_genders():
    genders = Genders.query.all()
    # Returned object is a list.
    print(f'genders is type {type(genders)}')
    # The items in the list are object of type User
    for item in genders:
        print(f'type of item in list {type(item)}')
        print(f'the item: {item}')
        print(item.gender_id)
        print(item.description)
        print(item.other)
        print(f'full {item.full()}')
    return jsonify([gender.full() for gender in genders])


@app.route('/locations')
def get_all_locations():
    locations = Locations.query.all()
    # Returned object is a list.
    print(f'Location is type {type(locations)}')
    # The items in the list are object of type User
    for item in locations:
        print(f'type of item in list {type(item)}')
        print(f'the item: {item}')
        print(item.location_id)
        print(item.state)
        print(item.city)
        print(f'full {item.full()}')
    return jsonify([location.full() for location in locations])


@app.route('/selectedmovies')
def get_all_selected_movies():
    selectedmovies = SelectedMovies.query.all()
    # Returned object is a list.
    print(f'Movies is type {type(selectedmovies)}')
    # The items in the list are object of type User
    for item in selectedmovies:
        print(f'type of item in list {type(item)}')
        print(f'the item: {item}')
        print(item.user_id)
        print(item.movie_title)
        print(f'full {item.full()}')
    return jsonify([selectedmovie.full() for selectedmovie in selectedmovies])

# ------------------------------
# GET by passing ID
# ------------------------------

@app.route('/user/<uid>')
def user(uid):
    print(f'UID is: {uid}')
    user = Users.query.filter_by(user_id=uid).first_or_404\
        (description='There is no data with {}'.format(uid))
    # Returned object is a list.
    print(f'usr is type {type(user)}')
    # The items in the list are object of type User
    return jsonify(user.full())


@app.route('/movie/<mid>')
def movie(mid):
    print(f'MID is: {mid}')
    movie = Movies.query.filter_by(movie_id=mid).first_or_404\
        (description='There is no data with {}'.format(mid))
    # Returned object is a list.
    print(f'movie is type {type(movie)}')
    # The items in the list are object of type User
    return jsonify(movie.full())


@app.route('/vaccine/<vid>')
def vaccine(vid):
    print(f'VID is: {vid}')
    vaccine = Vaccines.query.filter_by(vaccine_id=vid).first_or_404\
        (description='There is no data with {}'.format(vid))
    # Returned object is a list.
    print(f'vaccine is type {type(vaccine)}')
    # The items in the list are object of type User
    return jsonify(vaccine.full())


@app.route('/gender/<gid>')
def gender(gid):
    print(f'GID is: {gid}')
    gender = Genders.query.filter_by(gender_id=gid).first_or_404\
        (description='There is no data with {}'.format(gid))
    # Returned object is a list.
    print(f'gender is type {type(gender)}')
    # The items in the list are object of type User
    return jsonify(gender.full())


@app.route('/location/<lid>')
def location(lid):
    print(f'LID is: {lid}')
    # location = Locations.query.get(lid)
    location = Locations.query.filter_by(location_id=lid).first_or_404\
        (description='There is no data with {}'.format(lid))
    # Returned object is a list.
    print(f'location is type {type(location)}')
    # The items in the list are object of type User
    return jsonify(location.full())


@app.route('/selectedmovie/<smid>')
def selected_movie(smid):
    print(f'SMID is: {smid}')
    # location = Locations.query.get(lid)
    movies = SelectedMovies.query.filter_by(selectedmovie_id=smid).first_or_404\
        (description='There is no data with {}'.format(smid))
    # Returned object is a list.
    print(f'Selected movies is type {type(movies)}')
    # The items in the list are object of type User
    return jsonify(movies.full())


# ------------------------------
# POST GET and DELETE
# ------------------------------
@app.route('/locations/<lid>', methods=['POST', 'GET', 'DELETE'])
def view_or_manage_location(lid):
    if request.method == "POST":
        location = request.get_json()
        print('movie', location)

        location_id = location["location_id"]
        state = location["state"]
        city = location["city"]

        lc = Locations(state, city)

        db.session.add(lc)
        db.session.commit()

    if request.method == "DELETE":
        location = request.get_json()
        Locations.query.filter(Locations.location_id == lid).delete()
        db.session.commit()

    return ""


@app.route('/selectedmovies/<smid>', methods=['POST', 'GET', 'DELETE'])
def view_or_manage_selected_movies(smid):
    if request.method == "POST":
        selectedmovie = request.get_json()
        print('selected movie', selectedmovie)

        user_id = selectedmovie["user_id"]
        movie_title = selectedmovie["movie_title"]
        tmdb_id = selectedmovie['tmdb_id']
        url_movie_image = selectedmovie['url_movie_image']

        sm = SelectedMovies(user_id
                            , movie_title
                            , tmdb_id
                            , url_movie_image)

        db.session.add(sm)
        db.session.commit()

    if request.method == "DELETE":
        selectedmovie = request.get_json()
        SelectedMovies.query.filter(SelectedMovies.selectedmovie_id == smid).delete()
        db.session.commit()

    return ""


@app.route('/movies/<mid>', methods=['POST', 'GET', 'DELETE'])
def view_or_manage_movie(mid):

    if request.method == "POST":
        movie = request.get_json()
        print('movie', movie)

        movie_id = movie["movie_id"]
        movie_title = movie["movie_title"]
        tmdb_id = movie["tmdb_id"]
        url_movie_image = movie["url_movie_image"]
        rating = movie["rating"]
        year = movie["year"]

        mv = Movies(movie_title
                    , tmdb_id
                    , url_movie_image
                    , rating
                    , year
                    )
        db.session.add(mv)
        db.session.commit()
    if request.method == "DELETE":
        movie_title = request.get_json()
        Movies.query.filter(Movies.movie_id == mid).delete()
        db.session.commit()

    return ""


@app.route('/users/<uid>', methods=['POST', 'GET', 'DELETE'])
def view_or_manage_user(uid):
    # Get response data.
    if request.method == "POST":

        user = request.get_json()
        print('user', user)

        user_id = user["user_id"]
        user_name = user["user_name"]
        picture_url = user["picture_url"]
        phone_number = user["phone_number"]
        email_address = user["email_address"]
        auth0_user_id = user["auth0_user_id"]
        state = user["state"]
        city = user["city"]
        self_gender = user['self_gender']
        seeking_gender = user['seeking_gender']
        vaccine = user['vaccine']

        usr = Users(user_name
                    , picture_url
                    , phone_number
                    , email_address
                    , auth0_user_id
                    , state
                    , city
                    , self_gender
                    , seeking_gender
                    , vaccine
                    , user_id
                    )

        db.session.add(usr)
        db.session.commit()

    if request.method == "DELETE":
        user_name = request.get_json()
        Users.query.filter(Users.user_id == uid).delete()
        db.session.commit()

    return ""


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
