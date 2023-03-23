import { Box, Button, Typography } from "@mui/material";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css";

export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  genres: string[];
  poster_url: string;
  backdrop_url: string;
  release_date: string;
}

interface MovieNodeProps {
  movie: MovieDetails;
}

function MovieNode({ movie }: MovieNodeProps) {
  const genres = movie.genres[0]; // temp

  const formatDateString = (date: string) => {
    let months: { [name: string]: string } = {
      m01: "January",
      m02: "February",
      m03: "March",
      m04: "April",
      m05: "May",
      m06: "June",
      m07: "July",
      m08: "August",
      m09: "September",
      m10: "October",
      m11: "November",
      m12: "December",
    };

    let dateSplit = date.split("-");
    const year = dateSplit[0];
    const monthStr = `m${dateSplit[1]}`;
    const month = months[monthStr];
    const day = dateSplit[2];
    return `${month} ${day}, ${year}`;
  };

  return (
    <Box
      className="movie-node"
      sx={{
        backgroundImage: `url("${movie.backdrop_url}")`,
      }}
    >
      <Box className="movie-node-background">
        {/* Poster */}
        <Box
          className="movie-node-poster"
          sx={{ backgroundImage: `url("${movie.poster_url}")` }}
        />

        {/* Title */}
        <Typography variant="h4" className="movie-node-title">
          {movie.title}
        </Typography>

        {/* Description */}
        <p className="movie-node-description">{movie.overview}</p>

        {/* Add Button */}
        <Button variant="contained" className="movie-node-add-button">
          <FontAwesomeIcon icon={faPlus} />
        </Button>

        <Box className="movie-node-genres-box">
          <p className="movie-node-genres">{genres}</p>
        </Box>
      </Box>
    </Box>
  );
}

export default MovieNode;
