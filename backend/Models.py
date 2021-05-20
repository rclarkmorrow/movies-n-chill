from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from sqlalchemy import Table, Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy import MetaData


metadata = MetaData()
db = SQLAlchemy()


# Create Database Models
class BaseModel:

    def create_tables(self):
        db.drop_all()
        db.create_all()

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


class Locations(BaseModel, db.Model):
    # # Main model
    __tablename__ = 'Locations'

    # Auto-incrementing, unique primary key
    location_id = db.Column(db.Integer(), primary_key=True)

    # Vaccine data
    state = db.Column(db.String(5), nullable=False)
    city = db.Column(db.String(15), nullable=False)

    # Methods
    def __init__(self
                 , state=None
                 , city=True
                 ):

        self.state = state
        self.city = city

    # Return full details.
    def full(self):
        return {
            'location_id': self.location_id
            , 'state': self.state
            , 'city': self.city
        }

    def short(self):
        return {'state': self.state, 'city': self.city}


class Vaccines(BaseModel, db.Model):
    # # Main model
    __tablename__ = 'Vaccines'

    # Auto-incrementing, unique primary key
    vaccine_id = db.Column(db.Integer(), primary_key=True)

    # Vaccine data
    description = db.Column(db.String(15), nullable=False)
    is_active = db.Column(db.Boolean(2), nullable=False)
    created_by = db.Column(db.String(10), nullable=False)
    created_date = db.Column(db.String(10), nullable=False)
    modified_by = db.Column(db.String(10))
    modified_date = db.Column(db.String(10))

    # Methods
    def __init__(self
                 , description=None
                 , is_active=True
                 , created_by=None
                 , created_date=None
                 , modified_by=None
                 , modified_date=None):

        self.description = description
        self.is_active = is_active
        self.created_by = created_by
        self.created_date = created_date
        self.modified_by = modified_by
        self.modified_date = modified_date

    # Return full details.
    def full(self):
        return {
            'vaccine_id': self.vaccine_id
            , 'description': self.description
        }

    def short(self):
        return {'description': self.description}


class Genders(BaseModel, db.Model):
    # # Main model
    __tablename__ = 'Genders'

    # Auto-incrementing, unique primary key
    gender_id = db.Column(db.Integer(), primary_key=True)

    # Vaccine data
    description = db.Column(db.String(15), nullable=False)
    other = db.Column(db.String(60), nullable=False)
    is_active = db.Column(db.Boolean(2), nullable=False)
    created_by = db.Column(db.String(10), nullable=False)
    created_date = db.Column(db.String(10), nullable=False)
    modified_by = db.Column(db.String(10))
    modified_date = db.Column(db.String(10))

    # Methods
    def __init__(self
                 , description=None
                 , other=None
                 , is_active=True
                 , created_by=None
                 , created_date=None
                 , modified_by=None
                 , modified_date=None):

        self.description = description
        self.other = other
        self.is_active = is_active
        self.created_by = created_by
        self.created_date = created_date
        self.modified_by = modified_by
        self.modified_date = modified_date

    # Return full details.
    def full(self):
        return {
            'gender_id': self.gender_id
            , 'description': self.description
            , 'other': self.other
        }

    def short(self):
        return {'description': self.description, 'other': self.other}


class Movies(BaseModel, db.Model):

    # # Main model
    __tablename__ = 'Movies'

    # Auto-incrementing, unique primary key
    movie_id = db.Column(db.Integer(), primary_key=True)

    # Movie data
    movie_title = db.Column(db.String(100), nullable=False)
    tmdb_id = db.Column(db.String(20), nullable=False)
    url_movie_image = db.Column(db.String(200), nullable=False)
    rating = db.Column(db.String(3), nullable=False)
    year = db.Column(db.String(4), nullable=False)
    is_active = db.Column(db.Boolean(2), nullable=False)
    created_by = db.Column(db.String(10), nullable=False)
    created_date = db.Column(db.String(10), nullable=False)
    modified_by = db.Column(db.String(10))
    modified_date = db.Column(db.String(10))


    # Methods
    def __init__(self
                 , movie_title=None
                 , tmdb_id=None
                 , url_movie_image=None
                 , rating=None
                 , year=None
                 , is_active=True
                 , created_by=None
                 , created_date=None
                 , modified_by=None
                 , modified_date=None):

        self.movie_title = movie_title
        self.tmdb_id = tmdb_id
        self.url_movie_image = url_movie_image
        self.rating = rating
        self.year = year
        self.is_active = is_active
        self.created_by = created_by
        self.created_date = created_date
        self.modified_by = modified_by
        self.modified_date = modified_date

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
        }


class Users(BaseModel, db.Model):
    # Users model
    __tablename__ = 'Users'

    # Auto-incrementing, unique primary key
    user_id = db.Column(db.Integer(), primary_key=True)

    # data
    user_name = db.Column(db.String(30), nullable=False)
    picture_url = db.Column(db.String(200), nullable=False)
    phone_number = db.Column(db.String(15))
    email_address = db.Column(db.String(30))
    auth0_id = db.Column(db.String(30))
    state = db.Column(db.String(30))
    city = db.Column(db.String(30))
    self_gender = db.Column(db.String(30))
    seeking_gender = db.Column(db.String(30))
    vaccine = db.Column(db.String(30))

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
                 , vaccine=None
                 , created_by=None
                 , created_date=None
                 , modified_by=None
                 , modified_date=None
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
        self.vaccine = vaccine
        self.created_by = created_by
        self.created_date = created_date
        self.modified_by = modified_by
        self.modified_date = modified_date

    # Return full details.
    def full(self):
        return {
            'user_name': self.user_name
            , 'picture_URL': self.picture_url
            , 'phone_number': self.phone_number
            , 'email_address': self.email_address
            , 'auth0_id': self.auth0_id
            , 'state': self.state
            , 'city': self.city
            , 'self_gender': self.self_gender
            , 'seeking_gender': self.seeking_gender
            , 'vaccine': self.vaccine
        }

    def short(self):
        return {
            'user_name': self.user_name
            , 'picture_URL': self.picture_url
        }


class SelectedMovies(BaseModel, db.Model):
    # # Main model
    __tablename__ = 'SelectedMovies'

    # Auto-incrementing, unique primary key
    selectedmovie_id = db.Column(db.Integer(), primary_key=True)

    # Movie data
    user_id = db.Column(db.Integer())
    movie_title = db.Column(db.String(100), nullable=False)
    tmdb_id = db.Column(db.String(20), nullable=False)
    url_movie_image = db.Column(db.String(200), nullable=False)
    rating = db.Column(db.String(3), nullable=False)
    year = db.Column(db.String(4), nullable=False)

    # Methods
    def __init__(self
                 , user_id=None
                 , movie_title=None
                 , tmdb_id=None
                 , url_movie_image=None
                 , rating=None
                 , year=None
                 ):

        self.user_id = user_id
        self.movie_title = movie_title
        self.tmdb_id = tmdb_id
        self.url_movie_image = url_movie_image
        self.rating = rating
        self.year = year

    # Return full details.
    def full(self):
        return {
            'user_id': self.user_id
            , 'movie_title': self.movie_title
            , 'tmdb_id': self.tmdb_id
            , 'url_movie_image': self.url_movie_image
            , 'rating': self.rating
            , 'year': self.year
        }


if __name__ == "__main__":
    pass

    # Movies.create_tables()
    # Users.create_tables()



