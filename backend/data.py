""" ---------------------------------------------------------------------------
# IMPORTS
# --------------------------------------------------------------------------"""


# Standard library dependencies
from types import SimpleNamespace
import datetime

# Local application dependencies
from Models import Movies, States, Cities, Genders, Vaccines, Users


""" ---------------------------------------------------------------------------
# TEST DATA CLASS
# --------------------------------------------------------------------------"""


# Class initializes with test data, and methods to populate test database.
# -----------------------------------------------------------------------------

class MovieData:
    def __init__(self):
        # Seed data for test database
        self.seeds = [
            Movies(
                movie_title="Invinsible",
                tmdb_id='001',
                url_movie_image='https://www.imdb.com/title/tt6741278/?ref_=hm_tpks_tt_i_2_pd_tp1_cp',
                rating='8.8',
                year='2021',
                is_active=True,
                created_by='Script',
                created_date=datetime.date.today(),
                modified_by='Script',
                modified_date=datetime.date.today(),
            ),
            Movies(
                movie_title='Nobody',
                tmdb_id='002',
                url_movie_image='https://www.imdb.com/title/tt7888964/?ref_=hm_tpks_tt_i_11_pd_tp1_cp',
                rating='7.5',
                year='2021',
                is_active=True,
                created_by='Script',
                created_date=datetime.date.today(),
                modified_by='Script',
                modified_date=datetime.date.today(),
            ),
            Movies(
                movie_title='Godzilla vs King',
                tmdb_id='003',
                url_movie_image='https://www.imdb.com/title/tt5034838/?ref_=hm_cht_3',
                rating='6.5',
                year='2021',
                is_active=True,
                created_by='Script',
                created_date=datetime.date.today(),
                modified_by='Script',
                modified_date=datetime.date.today(),
            ),
            Movies(
                movie_title='The Vault',
                tmdb_id='004',
                url_movie_image='https://www.imdb.com/title/tt9742794/?ref_=hm_tpks_tt_i_5_pd_tp1_cp',
                rating='5.6',
                year='2021',
                is_active=True,
                created_by='Script',
                created_date=datetime.date.today(),
                modified_by='Script',
                modified_date=datetime.date.today(),
            ),
            Movies(
                movie_title='In the earth',
                tmdb_id='005',
                url_movie_image='https://www.imdb.com/title/tt13429362/?ref_=hm_inth_tt_i_8',
                rating='5.6',
                year='2021',
                is_active=True,
                created_by='Script',
                created_date=datetime.date.today(),
                modified_by='Script',
                modified_date=datetime.date.today(),
            ),

            Movies(
                movie_title="Game of Thrones",
                tmdb_id='006',
                url_movie_image='https://www.imdb.com/title/tt0944947/?ref_=hm_tpks_tt_i_2_pd_tp1_cp',
                rating='9.3',
                year='2019',
                is_active=True,
                created_by='Script',
                created_date=datetime.date.today(),
                modified_by='Script',
                modified_date=datetime.date.today(),
            ),
            Movies(
                movie_title='Captain America: Civil War',
                tmdb_id='007',
                url_movie_image='https://www.imdb.com/title/tt3498820/?ref_=hm_tpks_tt_i_4_pd_tp1_cp',
                rating='7.8',
                year='2016',
                is_active=True,
                created_by='Script',
                created_date=datetime.date.today(),
                modified_by='Script',
                modified_date=datetime.date.today(),
            ),
            Movies(
                movie_title='Top Gun',
                tmdb_id='008',
                url_movie_image='https://www.imdb.com/title/tt0092099/?ref_=hm_inth_tt_i_24',
                rating='6.9',
                year='1986',
                is_active=True,
                created_by='Script',
                created_date=datetime.date.today(),
                modified_by='Script',
                modified_date=datetime.date.today(),
            ),
            Movies(
                movie_title='Tom and Jerry',
                tmdb_id='009',
                url_movie_image='https://www.imdb.com/title/tt1361336/?ref_=hm_inth_tt_i_25',
                rating='5.2',
                year='2021',
                is_active=True,
                created_by='Script',
                created_date=datetime.date.today(),
                modified_by='Script',
                modified_date=datetime.date.today(),
            ),
            Movies(
                movie_title='Stranger Things',
                tmdb_id='010',
                url_movie_image='https://www.imdb.com/title/tt4574334/?ref_=vp_vi_tt',
                rating='8.7',
                year='2021',
                is_active=True,
                created_by='Script',
                created_date=datetime.date.today(),
                modified_by='Script',
                modified_date=datetime.date.today(),
            )

            ]

    # Inserts seed data into database.
    def create_records(self):
        for movie in self.seeds:
            movie.insert()


class StatesData:
    def __init__(self):
        # Seed data for test database
        self.seeds = [
                States(
                    description='Washington'
                    , abbreviation='WA'
                    , is_active=True
                    , created_by='Script'
                    , created_date=datetime.date.today()
                    , modified_by='Script'
                    , modified_date=datetime.date.today()
                ),
                States(
                    description='Oregon'
                    , abbreviation='OR'
                    , is_active=True
                    , created_by='Script'
                    , created_date=datetime.date.today()
                    , modified_by='Script'
                    , modified_date=datetime.date.today()
                ),
                States(
                    description='California'
                    , abbreviation='CA'
                    , is_active=True
                    , created_by='Script'
                    , created_date=datetime.date.today()
                    , modified_by='Script'
                    , modified_date=datetime.date.today()
                )
            ]

    # Inserts seed data into database.
    def create_records(self):
        for state in self.seeds:
            state.insert()


class CitiesData:
    def __init__(self):
        self.seeds = [
            Cities(
                state_id=1
                , description='Seattle'
                , is_active=True
                , created_by='Script'
                , created_date=datetime.date.today()
                , modified_by='Script'
                , modified_date=datetime.date.today()
            ),
            Cities(
                state_id=1
                , description='Tacoma'
                , is_active=True
                , created_by='Script'
                , created_date=datetime.date.today()
                , modified_by='Script'
                , modified_date=datetime.date.today()
            ),
            Cities(
                state_id=1
                , description='Olympia'
                , is_active=True
                , created_by='Script'
                , created_date=datetime.date.today()
                , modified_by='Script'
                , modified_date=datetime.date.today()
            ),

            Cities(
                state_id=2
                , description='Portland'
                , is_active=True
                , created_by='Script'
                , created_date=datetime.date.today()
                , modified_by='Script'
                , modified_date=datetime.date.today()
            ),
            Cities(
                state_id=2
                , description='Salem'
                , is_active=True
                , created_by='Script'
                , created_date=datetime.date.today()
                , modified_by='Script'
                , modified_date=datetime.date.today()
            ),
            Cities(
                state_id=2
                , description='Eugene'
                , is_active=True
                , created_by='Script'
                , created_date=datetime.date.today()
                , modified_by='Script'
                , modified_date=datetime.date.today()
            ),

            Cities(
                state_id=3
                , description='Los Angeles'
                , is_active=True
                , created_by='Script'
                , created_date=datetime.date.today()
                , modified_by='Script'
                , modified_date=datetime.date.today()
            ),
            Cities(
                state_id=3
                , description='San Diego'
                , is_active=True
                , created_by='Script'
                , created_date=datetime.date.today()
                , modified_by='Script'
                , modified_date=datetime.date.today()
            ),
            Cities(
                state_id=3
                , description='San Jose'
                , is_active=True
                , created_by='Script'
                , created_date=datetime.date.today()
                , modified_by='Script'
                , modified_date=datetime.date.today()
            )
        ]

    def create_records(self):
        for city in self.seeds:
            city.insert()


class GendersData:
    def __init__(self):
        self.seeds = [
            Genders(
                description='Male'
                , other=''
                , is_active=True
                , created_by='Script'
                , created_date=datetime.date.today()
                , modified_by='Script'
                , modified_date=datetime.date.today()
            ),
            Genders(
                description='Female'
                , other=''
                , is_active=True
                , created_by='Script'
                , created_date=datetime.date.today()
                , modified_by='Script'
                , modified_date=datetime.date.today()
            ),
            Genders(
                description='Other'
                , other=''
                , is_active=True
                , created_by='Script'
                , created_date=datetime.date.today()
                , modified_by='Script'
                , modified_date=datetime.date.today()
            )
        ]

    def create_records(self):
        for gender in self.seeds:
            gender.insert()


class VaccinesData:
    def __init__(self):
        self.seeds = [
            Vaccines(
                description='Not vaccinated'
                , is_active=True
                , created_by='Script'
                , created_date=datetime.date.today()
                , modified_by='Script'
                , modified_date=datetime.date.today()
            ),
            Vaccines(
                description='Fully vaccinated'
                , is_active=True
                , created_by='Script'
                , created_date=datetime.date.today()
                , modified_by='Script'
                , modified_date=datetime.date.today()
            ),
            Vaccines(
                description='Partially vaccinated'
                , is_active=True
                , created_by='Script'
                , created_date=datetime.date.today()
                , modified_by='Script'
                , modified_date=datetime.date.today()
            ),
            Vaccines(
                description='Don''t want to answer'
                , is_active=True
                , created_by='Script'
                , created_date=datetime.date.today()
                , modified_by='Script'
                , modified_date=datetime.date.today()
            )

        ]

    def create_records(self):
        for vaccine in self.seeds:
            vaccine.insert()


class UsersData:
    def __init__(self):
        self.seeds = [
            Users(
                state_id='1'
                , city_id='1'
                , self_gender_id='1'
                , want_gender_id='2'
                , vaccine_id='1'

                , user_name='John'
                , picture_url='https://unsplash.com/photos/O0Ac7NVuTns'
                , phone_number='360-245-3877'
                , email_address='john@gmail.com'
                , auth0_user_id='123456789'

                , created_by='Script'
                , created_date=datetime.date.today()
                , modified_by='Script'
                , modified_date=datetime.date.today()
            ),
            Users(
                state_id='2'
                , city_id='3'
                , self_gender_id='2'
                , want_gender_id='1'
                , vaccine_id='2'

                , user_name='Jane'
                , picture_url='https://unsplash.com/photos/BvmWkeQLUSc'
                , phone_number='999-999-999'
                , email_address='jane@yahoo.com'
                , auth0_user_id='987654321'

                , created_by='Script'
                , created_date=datetime.date.today()
                , modified_by='Script'
                , modified_date=datetime.date.today()
            )

        ]

    def create_records(self):
        for user in self.seeds:
            user.insert()


if __name__ == "__main__":
    Movies.create_tables("")

    movie_data = MovieData()
    movie_data.create_records()

    state_data = StatesData()
    state_data.create_records()

    cities_data = CitiesData()
    cities_data.create_records()

    genders_data = GendersData()
    genders_data.create_records()

    vaccines_data = VaccinesData()
    vaccines_data.create_records()

    users_data = UsersData()
    users_data.create_records()



