import { useState } from "react";
import {
  Button,
  TextField,
  Paper,
  IconButton,
  InputBase,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  search: (snippet: string) => void;
}

function SearchBar(props: SearchBarProps) {
  const [snippet, setSnippet] = useState("");

  return (
    <div>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: 500,
          backgroundColor: "#303030",
          borderRadius: 35,
        }}
      >
        <InputBase
          sx={{
            ml: 1,
            width: 400,
            marginLeft: "35px",
            height: 70,
            color: "#FFFFFF",
            fontSize: 24,
          }}
          placeholder="Search For a Movie"
          inputProps={{ "aria-label": "search for a movie" }}
          onInput={(e: any) => {
            setSnippet(e.target.value as string);
          }}
        />
        <Divider sx={{ height: 60, m: 0.5 }} orientation="vertical" />
        <IconButton
          type="button"
          sx={{ p: "10px", width: "50px" }}
          aria-label="search"
          onClick={() => props.search(snippet)}
        >
          <SearchIcon color="primary" />
        </IconButton>
      </Paper>
    </div>
  );
}

export default SearchBar;
