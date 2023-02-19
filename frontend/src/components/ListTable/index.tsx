import { Paper, Grid } from "@mui/material";
import ContentWrapper from "../ContentWrapper";
import MovieNode, { MovieDetails } from "../MovieNode";

interface ListTableProps {
  movies: MovieDetails[];
}

export default function ListTable({ movies }: ListTableProps) {
  return (
    <Grid container spacing={"30px"}>
      {movies != null &&
        movies.map((movie) => {
          return (
            <Grid item xs={12} md={6} lg={4}>
              <ContentWrapper>
                <MovieNode movie={movie} />
              </ContentWrapper>
            </Grid>
          );
        })}
    </Grid>
  );
}
