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
    <div style={{ backgroundColor: "#202020", minHeight: "80vh" }}>
      <div style={{ padding: "80px 0px 30px 0px" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <SearchBar search={search} />
        </Box>
      </div>

      <Box sx={{ p: "30px", display: "flex", justifyContent: "center" }}>
        {results && <ListTable movies={results} />}
      </Box>
    </div>
  );
}

export default SearchPage;
