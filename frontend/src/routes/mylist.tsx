import { useLoaderData } from "react-router-dom";

import { Box, Typography, Button } from "@mui/material";
import ListTable from "../components/listTable";

export async function loader() {
  return {
    movies: [
      {
        title: "Harry Potter",
        year: 2000,
        genres: ["Fantasy"],
      },
      {
        title: "Back to the Future",
        year: 1985,
        genres: ["SciFi"],
      },
      {
        title: "Fast & Furious",
        year: 2002,
        genres: ["Action"],
      },
    ],
  };
}

export interface Movie {
  title: string;
  year: number;
  genres: string[];
}

interface MyListLoaderData {
  movies: Movie[];
}

function MyList() {
  const data = useLoaderData() as MyListLoaderData;

  return (
    <Box>
      <Typography variant="h2">Your Watchlist</Typography>
      <ListTable movies={data.movies} />
    </Box>
  );
}

export default MyList;
