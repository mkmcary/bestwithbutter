from requests.auth import AuthBase
import os


class BearerTokenAuth(AuthBase):
    def __init__(self, token):
        self.token = token

    def __call__(self, r):
        r.headers["Authorization"] = "Bearer " + self.token
        return r


TMDB_Auth = BearerTokenAuth(os.environ['TMDB_BEARER_KEY'])
