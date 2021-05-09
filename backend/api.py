""" --------------------------------------------------------------------------#
# IMPORTS
# --------------------------------------------------------------------------"""


# Third party dependencies
from flask import Flask, request, jsonify
# from flask_cors import CORS
from Models import *


def create_app():

    app = Flask(__name__)
    # setup_db(app)

    # Set up CORS. Allow '*' for origins.
    # CORS(app, resources={r"*": {"origins": "*"}})

    # CORS Headers
    @app.after_request
    def after_request(response):
        response.headers.add('Access-Control-Allow-Headers',
                             'Content-Type,Authorization,true')
        response.headers.add('Access-Control-Allow-Methods',
                             'GET,POST, PATCH, DELETE')
        return response

    """------------------------------------------------------------------------#
    # ROUTES
    # -----------------------------------------------------------------------"""

    # Generic route
    # --------------------------------------------------------------------------

    @app.route('/')
    def home():
        return "Welcome to Movies and Chill"

    @app.route('/state', methods=['GET', 'POST'])
    def get_state():
        if request.method == 'GET':
            pass
        elif request.method == 'POST':
            pass
