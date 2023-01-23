from fastapi import APIRouter
import requests

from .util.auth import TMDB_Auth

router = APIRouter(
    prefix="/movie"
)


@router.get("/{movie_id}")
async def get_info(movie_id: int):
    '''
    Search for a movie and return details found.
    '''

    # Grab movie details
    movie_resp = requests.get(
        url=f"https://api.themoviedb.org/3/movie/{movie_id}",
        auth=TMDB_Auth
    )
    movie_results = movie_resp.json()

    return movie_results
