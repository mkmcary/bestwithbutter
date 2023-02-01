import { Box, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";

import { useState, useContext } from "react";
import { ApiContext } from "../context/ApiContext";

import ListTable from "../components/ListTable";
import MovieNode from "../components/MovieNode";

export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  genres: string[];
  poster_url: string;
  release_date: string;
}

function SearchPage() {
  let axios = useContext(ApiContext);

  const [results, setResults] = useState<any>();

  const search = async (snip: string) => {
    const response = await axios.get("/search/", {
      params: { snippet: snip },
    });
    setResults(response.data.movies);
  };

  return (
    <Box>
      <div style={{ padding: 10 }}>
        <SearchBar search={search} />
      </div>
      {results && <ListTable movies={results} />}
    </Box>
  );
}

export default SearchPage;
