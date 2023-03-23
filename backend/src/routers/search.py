from fastapi import APIRouter, Request
import requests
from typing import Union

from .util.auth import TMDB_Auth
from .util.genres import movie_genres, tv_genres

router = APIRouter(
    prefix="/search"
)


@router.get("/")
async def search(req: Request, snippet: str, page: Union[int, None] = None):
    '''
    Search for a movie and return possible results
    '''

    print(req.headers)

    if page is None:
        page = 1

    # Isolate movies
    movie_resp = requests.get(
        url="https://api.themoviedb.org/3/search/movie",
        params={"query": snippet, "page": page},
        auth=TMDB_Auth
    )
    movie_results = movie_resp.json()

    movies = []
    for movie in movie_results['results']:
        genres = []
        for genre_id in movie['genre_ids']:
            if genre_id in movie_genres:
                genres.append(movie_genres[genre_id])
            else:
                genres.append("Unknown Genre")

        if len(genres) == 0:
            genres.append("Unknown Genre")

        poster_path = movie['poster_path']
        backdrop_path = movie['backdrop_path']

        movies.append({
            "id": movie['id'],
            "title": movie['title'],
            "overview": movie['overview'],
            "genres": genres,
            "poster_url": f"https://image.tmdb.org/t/p/original{poster_path}",
            "backdrop_url": f"https://image.tmdb.org/t/p/original{backdrop_path}",
            "release_date": movie['release_date']
        })

    # Isolate shows
    tv_resp = requests.get(
        url="https://api.themoviedb.org/3/search/tv",
        params={"query": snippet, "page": page},
        auth=TMDB_Auth
    )
    tv_results = tv_resp.json()

    shows = []
    for show in tv_results['results']:
        genres = []
        for genre_id in show['genre_ids']:
            if genre_id in tv_genres:
                genres.append(tv_genres[genre_id])
            else:
                genres.append("Unknown Genre")

        if len(genres) == 0:
            genres.append("Unknown Genre")

        poster_path = show['poster_path']
        backdrop_path = show['backdrop_path']

        release_date = "Unknown Release"
        if 'first_air_date' in show:
            release_date = show['first_air_date']

        shows.append({
            "id": show['id'],
            "title": show['name'],
            "overview": show['overview'],
            "genres": genres,
            "poster_url": f"https://image.tmdb.org/t/p/original{poster_path}",
            "backdrop_url": f"https://image.tmdb.org/t/p/original{backdrop_path}",
            "release_date": release_date
        })

    return {
        "movies": movies,
        "shows": shows
    }
