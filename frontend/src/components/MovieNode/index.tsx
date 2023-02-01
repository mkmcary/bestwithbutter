import { Box, Grid, Typography, Divider } from "@mui/material";

export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  genres: string[];
  poster_url: string;
  release_date: string;
}

interface MovieNodeProps {
  movie: MovieDetails;
}

function MovieNode({ movie }: MovieNodeProps) {
  const genres = movie.genres.join(", ");

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
    <Box>
      <Grid container>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={movie.poster_url}
            style={{
              width: "80%",
              maxWidth: 300,
              borderRadius: 10,
              margin: "auto",
              display: "block",
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ m: "10px" }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              {movie.title}
            </Typography>
          </Box>

          <Divider />

          <Box sx={{ m: "10px", minHeight: "300px" }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: "5px" }}>
              {formatDateString(movie.release_date)}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: "5px" }}>
              {genres}
            </Typography>
            <Typography>{movie.overview}</Typography>
          </Box>

          <Divider />

          <Box sx={{ m: "10px" }}>
            <Typography variant="caption">TMDB ID: {movie.id}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MovieNode;
