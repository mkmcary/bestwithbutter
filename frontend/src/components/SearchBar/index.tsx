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
      {/* <TextField
        id="search-bar"
        className="text"
        onInput={(e: any) => {
          setSnippet(e.target.value as string);
        }}
        label="Search for a Movie"
        variant="outlined"
        placeholder="Search..."
        size="large"
        name="snippet"
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => props.search(snippet)}
        sx={{ ml: 1 }}
      >
        <SearchIcon />
      </Button> */}

      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search For a Movie"
          inputProps={{ "aria-label": "search for a movie" }}
          onInput={(e: any) => {
            setSnippet(e.target.value as string);
          }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
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
