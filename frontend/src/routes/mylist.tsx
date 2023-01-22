import { Box, Typography, Button } from "@mui/material";

function MyList() {
  return (
    <Box>
      <Typography variant="h2">Your Watchlist</Typography>
      <Button variant="contained" color="secondary">
        Press me
      </Button>
    </Box>
  );
}

export default MyList;
