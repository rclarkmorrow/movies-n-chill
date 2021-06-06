from Models import db, Movies, Users, SelectedMovies


class Profiles:

    def get_matching_users(uid):

        matching_percentage_threshold = 0.50  # users will be matched if matching percentage >= 50%

        current_user_profile = Profiles.get_user_profile(uid)
        num_users = Users.query.count()

        matching_users_ids = []
        matching_percentage = []

        for user in range(num_users):
            other_user = Profiles.get_user_profile(user+1)
            if (current_user_profile[0] != other_user[0]) and (current_user_profile[2] == other_user[1]):

                matching_list, matching_percent = Profiles.compare_users(current_user_profile, other_user)

                if matching_percent >= matching_percentage_threshold:
                   matching_users_ids.append(user + 1)
                   matching_percentage.append("{:.0%}".format(matching_percent))

        return matching_users_ids, matching_percentage

    def compare_users(setA, setB):

        a = setA
        b = setB

        matching_list = set(a) & set(b)

        matching_list_length = len(matching_list)
        matching_percent = matching_list_length / len(a)  # Assumes equal weights

        return matching_list, matching_percent

    def get_user_profile(uid):
        user = uid
        user = Users.query.filter_by(user_id=user).first()
        user_profile = []
        user_profile.append(user.user_id)
        user_profile.append(user.self_gender)
        user_profile.append(user.seeking_gender)

        selected_movies_by_id = SelectedMovies.query.filter_by(user_id=uid)
        count_movies = 0
        for selected_movies_by_id in selected_movies_by_id:
            user_movies = Movies.query.filter_by(movie_id=selected_movies_by_id.movie_id).first()
            user_profile.append(user_movies.movie_title)
            count_movies = count_movies + 1

        if count_movies <= 10:
            for i in range(10 - count_movies):
                user_profile.append('None')
            print(user_profile)

        return user_profile