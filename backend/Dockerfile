FROM python:3.9

WORKDIR /app

COPY ./requirements.txt requirements.txt

RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY ./src .

ARG TMDB
ENV TMDB_BEARER_KEY $TMDB

EXPOSE 80

CMD ["uvicorn", "main:app", "--proxy-headers", "--host", "0.0.0.0", "--port", "80"]