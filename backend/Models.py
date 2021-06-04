from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
import datetime


metadata = MetaData()
db = SQLAlchemy()


# Create Database Models
class BaseModel:

    # Insert record.
    def insert(self):
        db.session.add(self)
        db.session.commit()

    # Update record.
    def update(self):
        db.session.commit()

    # Delete record.
    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Users(BaseModel, db.Model):
    # Users model
    __tablename__ = 'Users'

    # Auto-incrementing, unique primary key
    user_id = db.Column(db.Integer(), primary_key=True)

    # data
    auth0_id = db.Column(db.String(30))
    user_name = db.Column(db.String(30), nullable=False)
    picture_url = db.Column(db.String(200), nullable=False)
    phone_number = db.Column(db.String(15))
    email_address = db.Column(db.String(30))
    state = db.Column(db.String(30))
    city = db.Column(db.String(30))
    self_gender = db.Column(db.String(30))
    seeking_gender = db.Column(db.String(30))
    # is_active = db.Column(db.Boolean(2), nullable=False)
    created_by = db.Column(db.String(10), nullable=False)
    created_date = db.Column(db.String(10), nullable=False)
    modified_by = db.Column(db.String(10))
    modified_date = db.Column(db.String(10))

    movies = db.relationship('SelectedMovies', back_populates='users',
                                      cascade='all,delete,delete-orphan')

    # Methods
    def __init__(self
                 , user_name=None
                 , picture_url=None
                 , phone_number=None
                 , email_address=None
                 , auth0_id=None
                 , state=None
                 , city=None
                 , self_gender=None
                 , seeking_gender=None
                 , created_by=None
                 , modified_by=None
    ):

        self.user_name = user_name
        self.picture_url = picture_url
        self.phone_number = phone_number
        self.email_address = email_address
        self.auth0_id = auth0_id
        self.state = state
        self.city = city
        self.self_gender = self_gender
        self.seeking_gender = seeking_gender
        self.created_by = created_by
        self.created_date = datetime.date.today()
        self.modified_by = modified_by
        self.modified_date = datetime.date.today()

    # Return full details.
    def full(self):
        return {
            'user_id': self.user_id
            , 'user_name': self.user_name
            , 'picture_url': self.picture_url
            , 'phone_number': self.phone_number
            , 'email_address': self.email_address
            , 'auth0_id': self.auth0_id
            , 'state': self.state
            , 'city': self.city
            , 'self_gender': self.self_gender
            , 'seeking_gender': self.seeking_gender
        }

    def with_movies(self):
        return {
                'user_id': self.user_id
                , 'user_name': self.user_name
                , 'picture_url': self.picture_url
                , 'phone_number': self.phone_number
                , 'email_address': self.email_address
                , 'auth0_id': self.auth0_id
                , 'state': self.state
                , 'city': self.city
                , 'self_gender': self.self_gender
                , 'seeking_gender': self.seeking_gender
                , 'movies': [{
                    'movie_id': movie.movies.movie_id
                    , 'movie_title': movie.movies.movie_title
                    , 'url_movie_image': movie.movies.url_movie_image
                    , 'genres': movie.movies.genres
                    , 'rating': movie.movies.rating
                    , 'year': movie.movies.year
                    , 'tmdb_id': movie.movies.tmdb_id
                } for movie in self.movies]
        }

    # Return full details.
    def full_for_matches(self):
        return {
            'user_id': self.user_id
            , 'user_name': self.user_name
            , 'picture_url': self.picture_url
            , 'phone_number': self.phone_number
            , 'email_address': self.email_address
            , 'state': self.state
            , 'city': self.city
            , 'self_gender': self.self_gender
            , 'seeking_gender': self.seeking_gender
        }


class Movies(BaseModel, db.Model):

    # Movies model
    __tablename__ = 'Movies'

    # Auto-incrementing, unique primary key
    movie_id = db.Column(db.Integer(), primary_key=True)

    # Movie data
    movie_title = db.Column(db.String(100), nullable=False)
    tmdb_id = db.Column(db.String(20), nullable=False)
    url_movie_image = db.Column(db.String(200), nullable=False)
    genres = db.Column(db.String(200))
    rating = db.Column(db.String(3), nullable=False)
    year = db.Column(db.String(4), nullable=False)
    # is_active = db.Column(db.Boolean(2), nullable=False)
    created_by = db.Column(db.String(10), nullable=False)
    created_date = db.Column(db.String(10), nullable=False)
    modified_by = db.Column(db.String(10))
    modified_date = db.Column(db.String(10))

    users = db.relationship('SelectedMovies', back_populates='movies',
                                 cascade='all,delete,delete-orphan')

    # Methods
    def __init__(self
                 , movie_title=None
                 , tmdb_id=None
                 , url_movie_image=None
                 , genres=None
                 , rating=None
                 , year=None
                 , created_by=None
                 , modified_by=None
                 ):

        self.movie_title = movie_title
        self.tmdb_id = tmdb_id
        self.url_movie_image = url_movie_image
        self.genres = genres
        self.rating = rating
        self.year = year
        self.created_by = created_by
        self.created_date = datetime.date.today()
        self.modified_by = modified_by
        self.modified_date = datetime.date.today()

    # Return full details.
    def full(self):
        return {
            'movie_id': self.movie_id
            , 'movie_title': self.movie_title
            , 'tmdb_id': self.tmdb_id
            , 'url_movie_image': self.url_movie_image
            , 'rating': self.rating
            , 'year': self.year
        }

    def short(self):
        return {
            'movie_id': self.movie_id
            , 'movie_title': self.movie_title
            , 'url_movie_image': self.url_movie_image
        }


class SelectedMovies(BaseModel, db.Model):
    # SelectedMovies model
    __tablename__ = 'SelectedMovies'
    # Autoincrementing, unique primary key
    selected_movie_id = db.Column(db.Integer, primary_key=True)
    # Selected Movie Data
    user_id = db.Column(db.Integer, db.ForeignKey('Users.user_id'),
                        nullable=False)
    movie_id = db.Column(db.Integer, db.ForeignKey('Movies.movie_id'),
                         nullable=False)

    # Relationships
    movies = db.relationship('Movies', back_populates='users', lazy=True)
    users = db.relationship('Users', back_populates='movies', lazy=True)

    def __init__(self,
                 user_id=None,
                 movie_id=None,
                 ):
        self.user_id = int(user_id)
        self.movie_id = int(movie_id)

    # Return full details.
    def full(self):
        return {
            'user_id': self.user_id
            , 'movie_id': self.movie_id
        }
