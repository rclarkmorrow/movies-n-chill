import os
import json
from dotenv import load_dotenv
from six.moves.urllib.request import urlopen
from functools import wraps

from flask import jsonify, request, _request_ctx_stack
from jose import jwt


# Auth0 Constants
load_dotenv()
DOMAIN = os.getenv('DOMAIN')
ALGORITHMS = os.getenv('ALGORITHMS')
API_AUDIENCE = os.getenv('API_AUDIENCE')
CLIENT_ID = os.getenv('CLIENT_ID')
CLIENT_SECRET = os.getenv('CLIENT_SECRET')


class AuthError(Exception):
    def __init__(self, error, status_code):
        self.error = error
        self.status_code = status_code


# Gets the authorization header and validates it.
def get_token_auth_header():
    """Obtains the Access Token from the Authorization Header
    """
    auth = request.headers.get("Authorization", None)
    if not auth:
        raise AuthError({"code": "authorization_header_missing",
                         "description":
                         "Authorization header is expected"}, 401)

    parts = auth.split()

    if parts[0].lower() != "bearer":
        raise AuthError({"code": "invalid_header",
                        "description":
                            "Authorization header must start with"
                            " Bearer"}, 401)
    elif len(parts) == 1:
        raise AuthError({"code": "invalid_header",
                        "description": "Token not found"}, 401)
    elif len(parts) > 2:
        raise AuthError({"code": "invalid_header",
                        "description":
                            "Authorization header must be"
                            " Bearer token"}, 401)

    token = parts[1]
    return token


# Checks that permissions are included in the payload.
def check_permissions(permission, payload):
    # Check payload for permissions.
    if 'permissions' in payload:
        # Check that required permission is in permissions.
        if permission not in payload['permissions']:
            raise StatusError(
                'unauthorized',
                'token not authorized for this request',
                401
            )
    else:
        raise StatusError(
            'bad request',
            'permissions not included in payload',
            400
        )

    return True


def requires_user_match(auth0_user_id):
    """Determines if the auth0_id passed in matches the one in the
       header
    Args:
        auth0_user_id (str): The id required to access the resource
    """
    token = get_token_auth_header()
    unverified_claims = jwt.get_unverified_claims(token)
    if unverified_claims.get("sub"):
        token_id = unverified_claims["sub"].split("|")[1]
        if token_id == auth0_user_id:
            return True
    return False


# Decorator for methods that require authorization and
# specific permissions.
def requires_auth(f):
    """Determines if the Access Token is valid
    """
    @wraps(f)
    def decorated(*args, **kwargs):
        token = get_token_auth_header()
        jsonurl = urlopen("https://"+DOMAIN+"/.well-known/jwks.json")
        # jsonurl = urlopen("https://moviesnchill.us.auth0.com/.well-known/jwks.json")

        jwks = json.loads(jsonurl.read())
        unverified_header = jwt.get_unverified_header(token)
        rsa_key = {}
        for key in jwks["keys"]:
            if key["kid"] == unverified_header["kid"]:
                rsa_key = {
                    "kty": key["kty"],
                    "kid": key["kid"],
                    "use": key["use"],
                    "n": key["n"],
                    "e": key["e"]
                }
        if rsa_key:
            try:
                payload = jwt.decode(
                    token,
                    rsa_key,
                    algorithms=ALGORITHMS,
                    audience=API_AUDIENCE,
                    issuer="https://"+DOMAIN+"/"
                    # issuer="https://moviesnchill.us.auth0.com/"
                )
            except jwt.ExpiredSignatureError:
                raise AuthError({"code": "token_expired",
                                "description": "token is expired"}, 401)
            except jwt.JWTClaimsError:
                raise AuthError({
                    "code": "invalid_claims",
                            "description":
                                "incorrect claims,"
                                "please check the audience and issuer"
                }, 401)
            except Exception as e:
                raise AuthError({"code": "invalid_header",
                                "description":
                                    "Unable to parse authentication"
                                    " token."}, 401)

            _request_ctx_stack.top.current_user = payload
            return f(*args, **kwargs)
        raise AuthError({"code": "invalid_header",
                        "description": "Unable to find appropriate key"}, 401)
    return decorated
