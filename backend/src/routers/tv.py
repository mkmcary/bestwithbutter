from fastapi import APIRouter
import requests

from .util.auth import TMDB_Auth

router = APIRouter(
    prefix="/tv"
)


@router.get("/{tv_id}")
async def get_info(tv_id: int):
    '''
    Search for a show and return details found.
    '''

    # Grab show details
    tv_resp = requests.get(
        url=f"https://api.themoviedb.org/3/tv/{tv_id}",
        auth=TMDB_Auth
    )
    tv_results = tv_resp.json()

    return tv_results
