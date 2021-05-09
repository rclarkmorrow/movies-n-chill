from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from sqlalchemy import Table, Column, Integer, ForeignKey
from sqlalchemy import MetaData

metadata = MetaData()


app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Create Database Type
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///MoviesNChill.db'

# Initialize Database
db = SQLAlchemy(app)


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
            'movie_id': self.movie_id,
            'movie_title': self.movie_title,
            'tmdb_id': self.tmdb_id,
            'url_movie_image': self.url_movie_image,
            'rating': self.rating,
            'year': self.year
        }


class States(BaseModel, db.Model):

    # States model
    __tablename__ = 'States'

    # Auto-incrementing, unique primary key
    state_id = db.Column(db.Integer(), primary_key=True)

    # State data
    description = db.Column(db.String(50), nullable=False)
    abbreviation = db.Column(db.String(2), nullable=False)
    is_active = db.Column(db.Boolean)
    created_by = db.Column(db.String(10), nullable=False)
    created_date = db.Column(db.String(10), nullable=False)
    modified_by = db.Column(db.String(10))
    modified_date = db.Column(db.String(10))

    city = db.relationship('Cities')

    def __init__(self,
                 description=None
                 , abbreviation=None
                 , is_active=True
                 , created_by=None
                 , created_date=None
                 , modified_by=None
                 , modified_date=None):

        self.description = description
        self.abbreviation = abbreviation
        self.is_active = is_active
        self.created_by = created_by
        self.created_date = created_date
        self.modified_by = modified_by
        self.modified_date = modified_date

    def full(self):
        return {
            'description': self.description
            , 'abbreviation': self.abbreviation
            , 'is_active': self.is_active
        }

    def short(self):
        return{
            'description': self.description
            , 'abbreviation': self.abbreviation
        }


class Cities(BaseModel, db.Model):
    # credit: https://www.tutorialspoint.com/sqlalchemy/sqlalchemy_orm_building_relationship.htm
    # Cities model
    __tablename__ = 'Cities'

    # Auto-incrementing, unique primary key
    city_id = db.Column(db.Integer(), primary_key=True)

    # ForeignKey
    state_id = db.Column(db.Integer(), ForeignKey('States.state_id'))

    # City data
    description = db.Column(db.String(50), nullable=False)
    is_active = db.Column(db.Boolean)
    created_by = db.Column(db.String(10), nullable=False)
    created_date = db.Column(db.String(10), nullable=False)
    modified_by = db.Column(db.String(10))
    modified_date = db.Column(db.String(10))

    def __init__(self
                 , state_id=None
                 , description=None
                 , is_active=True
                 , created_by=None
                 , created_date=None
                 , modified_by=None
                 , modified_date=None):

        self.state_id = state_id
        self.description = description
        self.is_active = is_active
        self.created_by = created_by
        self.created_date = created_date
        self.modified_by = modified_by
        self.modified_date = modified_date

    def full(self):
        return {
            'State_id': self.state_id
            , 'description': self.description
            , 'is_active': self.is_active
        }

    def short(self):
        return {
            'state_id': self.state_id
            , 'description': self.description
        }


class Genders(BaseModel, db.Model):

    # Genders model
    __tablename__ = 'Genders'

    # Auto-incrementing, unique primary key
    gender_id = db.Column(db.Integer(), primary_key=True)

    # Gender data
    description = db.Column(db.String(15), nullable=False)
    other = db.Column(db.String(60), nullable=False)
    is_active = db.Column(db.Boolean)
    created_by = db.Column(db.String(10), nullable=False)
    created_date = db.Column(db.String(10), nullable=False)
    modified_by = db.Column(db.String(10))
    modified_date = db.Column(db.String(10))

    def __init__(self
                 , description=None
                 , other=None
                 , is_active=True
                 , created_by=None
                 , created_date=None
                 , modified_by=None
                 , modified_date=None
                 ):

        self.description = description
        self.other = other
        self.is_active = is_active
        self.created_by = created_by
        self.created_date = created_date
        self.modified_by = modified_by
        self.modified_date = modified_date

    def full(self):
        return {
            'description': self.description
            , 'other': self.other
            , 'is_active': self.is_active
        }

    def short(self):
        return{
            'description': self.description
            , 'other': self.other
        }


class Vaccines(BaseModel, db.Model):

    # Vaccination model
    __tablename__ = 'Vaccines'

    # Auto-incrementing, unique primary key
    vaccine_id = db.Column(db.Integer(), primary_key=True)

    # Vaccination data
    description = db.Column(db.String(15), nullable=False)
    is_active = db.Column(db.Boolean)
    created_by = db.Column(db.String(10), nullable=False)
    created_date = db.Column(db.String(10), nullable=False)
    modified_by = db.Column(db.String(10))
    modified_date = db.Column(db.String(10))

    def __init__(self
                 , description=None
                 , is_active=True
                 , created_by=None
                 , created_date=None
                 , modified_by=None
                 , modified_date=None
                 ):

        self.description = description
        self.is_active = is_active
        self.created_by = created_by
        self.created_date = created_date
        self.modified_by = modified_by
        self.modified_date = modified_date

    def full(self):
        return {
            'description': self.description
            , 'is_active': self.is_active
        }

    def short(self):
        return {
            'description': self.description
        }


class Users(BaseModel, db.Model):
    # credit: https://docs.sqlalchemy.org/en/14/orm/basic_relationships.html
    # Users model
    __tablename__ = 'Users'

    # Auto-incrementing, unique primary key
    user_id = db.Column(db.Integer(), primary_key=True)

    # Foreignkey
    state_id = db.Column(db.Integer(), ForeignKey(States.state_id))
    city_id = db.Column(db.Integer(), ForeignKey(Cities.city_id))
    self_gender_id = db.Column(db.Integer(), ForeignKey(Genders.gender_id))
    want_gender_id = db.Column(db.Integer(), ForeignKey(Genders.gender_id))
    vaccine_id = db.Column(db.Integer(), ForeignKey(Vaccines.vaccine_id))

    # data
    user_name = db.Column(db.String(30), nullable=False)
    picture_url = db.Column(db.String(200), nullable=False)
    phone_number = db.Column(db.String(15))
    email_address = db.Column(db.String(30))
    auth0_user_id = db.Column(db.Integer())
    created_by = db.Column(db.String(10), nullable=False)
    created_date = db.Column(db.String(10), nullable=False)
    modified_by = db.Column(db.String(10))
    modified_date = db.Column(db.String(10))

    # # Relationship Many-to-One with reference tables
    # state = relationship("States")
    # city = relationship("Cities")
    # self_gender = relationship("Genders")
    # want_gender = relationship("Genders")
    # vaccine = relationship("Vaccines")

    # # Relationship Many-to-Many with Users table itself
    # match = relationship("Users"
    #                      , secondary=Users_Matches
    #                      , back_populates="Users")
    #
    # # Relationship Many-to-Many with Movies table
    # movie = relationship("Movies"
    #                      , secondary=Users_Movies
    #                      , back_populates="Users")

    # Methods
    def __init__(self
                 , user_name=None
                 , picture_url=None
                 , phone_number=None
                 , email_address=None
                 , auth0_user_id=None
                 , state_id=None
                 , city_id=None
                 , self_gender_id=None
                 , want_gender_id=None
                 , vaccine_id=None
                 , created_by=None
                 , created_date=None
                 , modified_by=None
                 , modified_date=None
                 ):

        self.user_name = user_name
        self.picture_url = picture_url
        self.phone_number = phone_number
        self.email_address = email_address
        self.auth0_user_id = auth0_user_id
        self.state_id = state_id
        self.city_id = city_id
        self.self_gender_id = self_gender_id
        self.want_gender_id = want_gender_id
        self.vaccine_id = vaccine_id
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
            , 'auth0_user_id': self.auth0_user_id
            , 'state': [{
                'state_id': States.state_id,
                'description': States.description,
                'abbreviations': States.abbreviations}]
            , 'city': [{
                'city_id': Cities.city_id,
                'description': Cities.description}]
            , 'self_gender': [{
                'gender_id': Genders.gender_id,
                'description': Genders.description}]
            , 'want_gender': [{
                'gender_id': Genders.gender_id,
                'description': Genders.description}]
            , 'vaccine': [{
                'vaccine_id': Vaccines.vaccine_id,
                'description': Vaccines.description}]
        }


"""
credit: https://docs.sqlalchemy.org/en/14/orm/basic_relationships.html
Many to Many adds an association table between two classes. 
The association table is indicated by the relationship.secondary argument 
to relationship(). Usually, the Table uses the MetaData object associated 
with the declarative base class, so that the ForeignKey directives can locate 
the remote tables with which to link:
"""
Users_Matches = Table('Users_Matches'
                      , metadata
                      , Column('user_id', Integer, ForeignKey('Users.user_id'))
                      , Column('match_user_id', Integer, ForeignKey('Users.user_id'))
                      , Column('percent_match', Integer))
Users_Movies = Table('Users_Movies'
                     , metadata
                     , Column('user_id', Integer, ForeignKey('Users.user_id'))
                     , Column('movie_id', Integer, ForeignKey('Movies.movie_id')))
