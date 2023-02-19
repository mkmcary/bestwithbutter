import { Box } from "@mui/material";
import SearchBar from "../components/SearchBar";

import { useState, useContext } from "react";
import { ApiContext } from "../context/ApiContext";

import ListTable from "../components/ListTable";

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
    <div>
      <Box sx={{ display: "flex", p: "30px", justifyContent: "center" }}>
        <div style={{ marginTop: "50px", marginBottom: "20px" }}>
          <SearchBar search={search} />
        </div>
      </Box>

      <Box sx={{ p: "30px" }}>{results && <ListTable movies={results} />}</Box>
    </div>
  );
}

export default SearchPage;
