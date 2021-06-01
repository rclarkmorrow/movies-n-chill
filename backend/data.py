# Local application dependencies
from Models import db, Movies, Users, SelectedMovies
from app import app


# Build an app context from the app to run the database initialization.
# NOTE: Drop all first to clear database of all data, create all creates
#       empty tables to populate, at the end we close the db session.
def initialize_db():
    app.app_context().push()
    db.drop_all()
    db.create_all()
    movie_data = MovieData()
    movie_data.create_records()
    users_data = UsersData()
    users_data.create_records()
    selected_movies_data = SelectedMoviesData()
    selected_movies_data.create_records()
    db.session.remove()


# Classes initialize with test data, and methods to populate test database.
class UsersData:
    def __init__(self):
        self.seeds = [
            Users(
                auth0_id='106808565438419350144'
                , state='WA'
                , city='Seattle'
                , email_address='john@gmail.com'
                , phone_number='360-245-3877'
                , picture_url='https://randomuser.me/api/portraits/men/20.jpg'
                , seeking_gender='Female'
                , self_gender='Male'
                , user_name='John'

                , created_by='Script'

            ),
            Users(
                auth0_id='addthislatereee'
                , state='OR'
                , city='Portland'
                , email_address='jane@yahoo.com'
                , phone_number='999-999-9999'
                , picture_url='https://randomuser.me/api/portraits/women/81.jpg'
                , seeking_gender='Female'
                , self_gender='Male'
                , user_name='Jane'

                , created_by='Script'

            ),
            Users(
                auth0_id='addthislaterwwww'
                , state='WA'
                , city='Olympia'
                , email_address='lisa@yahoo.com'
                , phone_number='999-999-9999'
                , picture_url='https://randomuser.me/api/portraits/women/91.jpg'
                , seeking_gender='Male'
                , self_gender='Female'
                , user_name='Lisa'

                , created_by='Script'

            ),
            Users(
                auth0_id='addthislaterqqqq'
                , state='WA'
                , city='Tacoma'
                , email_address='kelly@yahoo.com'
                , phone_number='360-321-3455'
                , picture_url='https://randomuser.me/api/portraits/women/61.jpg'
                , seeking_gender='Male'
                , self_gender='Female'
                , user_name='Kelly'

                , created_by='Script'

            ),
            Users(
                auth0_id='4323333'
                , state='CA'
                , city='San Diego'
                , email_address='nick@yahoo.com'
                , phone_number='360-321-3455'
                , picture_url='https://randomuser.me/api/portraits/men/62.jpg'
                , seeking_gender='Female'
                , self_gender='Male'
                , user_name='Nick'

                , created_by='Script'

            ),
            Users(
                auth0_id='34566'
                , state='CA'
                , city='San Francisco'
                , email_address='dan@yahoo.com'
                , phone_number='360-321-3455'
                , picture_url='https://randomuser.me/api/portraits/men/17.jpg'
                , seeking_gender='Other'
                , self_gender='Male'
                , user_name='Dan'

                , created_by='Script'

            )

        ]

    def create_records(self):
        for user in self.seeds:
            user.insert()


class MovieData:
    def __init__(self):
        # Seed data for test database
        self.seeds = [
            Movies(
                movie_title='Star Wars'
                , tmdb_id='11'
                , url_movie_image='https://www.themoviedb.org/t/p/w1280/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg'
                , genres='[12, 28, 878]'
                , rating='8.2'
                , year='1977'

                , created_by='Script'

            ),
            Movies(
                movie_title='Star Wars: The Rise of Skywalker'
                , tmdb_id='181812'
                , url_movie_image='https://www.themoviedb.org/t/p/w1280/db32LaOibwEliAmSL2jjDF6oDdj.jpg'
                , genres='[12, 28, 878]'
                , rating='6.5'
                , year='2019'

                , created_by='Script'
            ),
            Movies(
                movie_title='Star Wars: The Last Jedi'
                , tmdb_id='181808'
                , url_movie_image='https://www.themoviedb.org/t/p/w1280/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg'
                , genres='[12, 28, 878]'
                , rating='6.9'
                , year='2017'

                , created_by='Script'
            ),
            Movies(
                movie_title='Solo: A Star Wars Story'
                , tmdb_id='348350'
                , url_movie_image='https://www.themoviedb.org/t/p/w1280/4oD6VEccFkorEBTEDXtpLAaz0Rl.jpg'
                , genres='[12, 878]'
                , rating='6.6'
                , year='2018'

                , created_by='Script'
            ),
            Movies(
                movie_title='Star Wars: The Force Awakens'
                , tmdb_id='140607'
                , url_movie_image='https://www.themoviedb.org/t/p/w1280/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg'
                , genres='[12, 28, 14, 878]'
                , rating='7.4'
                , year='2015'

                , created_by='Script'
            ),
            Movies(
                movie_title='Rogue One: A Star Wars Story'
                , tmdb_id='330459'
                , url_movie_image='https://www.themoviedb.org/t/p/w1280/5jX3p0apUG5bkMHtnKZch0xpkBS.jpg'
                , genres='[12, 28, 878]'
                , rating='7.5'
                , year='2016'

                , created_by='Script'
            ),
            Movies(
                movie_title='The Lego Star Wars Holiday Special'
                , tmdb_id='732670'
                , url_movie_image='https://www.themoviedb.org/t/p/w1280/zyzJSI7UZZzz5Toj10rYGF5689z.jpg'
                , genres='[16, 12, 35, 10751, 878]'
                , rating='6.7'
                , year='2020'

                , created_by='Script'
            ),
            Movies(
                movie_title='Star Wars: The Clone Wars'
                , tmdb_id='12180'
                , url_movie_image='https://www.themoviedb.org/t/p/w1280/ywRtBu88SLAkNxD0GFib6qsFkBK.jpg'
                , genres='[16, 12, 28, 878]'
                , rating='6'
                , year='2008'

                , created_by='Script'
            ),
            Movies(
                movie_title='Phineas and Ferb: Star Wars'
                , tmdb_id='392216'
                , url_movie_image='https://www.themoviedb.org/t/p/w1280/xomphpz7MIasqVluPX83TjoTL8G.jpg'
                , genres='[28, 16, 35, 10751, 878, 10402]'
                , rating='7.1'
                , year='2014'

                , created_by='Script'
            ),
            Movies(
                movie_title='Star Wars: Episode I - The Phantom Menace'
                , tmdb_id='1893'
                , url_movie_image='https://www.themoviedb.org/t/p/w1280/6wkfovpn7Eq8dYNKaG5PY3q2oq6.jpg'
                , genres='[28, 12, 878]'
                , rating='6.5'
                , year='1999'

                , created_by='Script'
            ),
        ]

    # Inserts seed data into database.
    def create_records(self):
        for movie in self.seeds:
            movie.insert()


class SelectedMoviesData:
    def __init__(self):
        # Seed data for test database
        self.seeds = [
            SelectedMovies(
                user_id='1'
                , movie_id='1'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='1'
                , movie_id='2'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='1'
                , movie_id='3'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='1'
                , movie_id='4'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='1'
                , movie_id='5'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='1'
                , movie_id='6'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='1'
                , movie_id='7'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='1'
                , movie_id='8'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='1'
                , movie_id='9'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='1'
                , movie_id='10'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='2'
                , movie_id='1'

                , created_by='Script'

            ),
            SelectedMovies(
                user_id='2'
                , movie_id='2'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='2'
                , movie_id='3'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='2'
                , movie_id='4'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='2'
                , movie_id='5'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='2'
                , movie_id='6'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='2'
                , movie_id='7'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='2'
                , movie_id='8'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='3'
                , movie_id='1'

                , created_by='Script'

            ),
            SelectedMovies(
                user_id='3'
                , movie_id='2'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='3'
                , movie_id='3'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='3'
                , movie_id='4'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='3'
                , movie_id='5'

                # , created_by='Script'
            ),
            SelectedMovies(
                user_id='3'
                , movie_id='6'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='3'
                , movie_id='7'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='3'
                , movie_id='8'

                # , created_by='Script'
            ),

            SelectedMovies(
                user_id='4'
                , movie_id='1'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='4'
                , movie_id='2'

                # , created_by='Script'
            ),
            SelectedMovies(
                user_id='4'
                , movie_id='3'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='4'
                , movie_id='4'

                # , created_by='Script'
            ),
            SelectedMovies(
                user_id='4'
                , movie_id='5'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='4'
                , movie_id='6'

                # , created_by='Script'
            ),
            SelectedMovies(
                user_id='4'
                , movie_id='7'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='5'
                , movie_id='1'

                , created_by='Script'
            ),
            SelectedMovies(
                user_id='5'
                , movie_id='2'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='5'
                , movie_id='3'

                # , created_by='Script'
            ),
            SelectedMovies(
                user_id='5'
                , movie_id='4'

                # , created_by='Script'
            ),
            SelectedMovies(
                user_id='5'
                , movie_id='5'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='5'
                , movie_id='6'

                # , created_by='Script'
            ),
            SelectedMovies(
                user_id='6'
                , movie_id='1'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='6'
                , movie_id='2'

                # , created_by='Script'
            ),
            SelectedMovies(
                user_id='6'
                , movie_id='3'

                # , created_by='Script'
            ),
            SelectedMovies(
                user_id='6'
                , movie_id='4'

                # , created_by='Script'

            ),
            SelectedMovies(
                user_id='6'
                , movie_id='5'

                # , created_by='Script'

            )
        ]

    # Inserts seed data into database.
    def create_records(self):
        for selected_movie in self.seeds:
            selected_movie.insert()


if __name__ == '__main__':
    initialize_db()
