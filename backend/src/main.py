from fastapi import FastAPI
import uvicorn

from routers import search, movie, tv

app = FastAPI()

app.include_router(search.router)
app.include_router(movie.router)
app.include_router(tv.router)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8080, log_level="info")
