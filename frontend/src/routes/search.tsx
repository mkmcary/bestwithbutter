import { Box, Typography } from "@mui/material";
import SearchBar from "../components/searchbar";

import { useState } from "react";
import axios from "axios";

import ListTable from "../components/listTable";

export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  genres: string[];
  poster_url: string;
  release_date: string;
}

function SearchPage() {
  const [results, setResults] = useState<any>();

  const search = async (snip: string) => {
    const response = await axios.get("/api/search/", {
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
