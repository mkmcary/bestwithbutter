import { Box, Paper, Typography, Button } from "@mui/material";

function HomePage() {
  return (
    <Box>
      <Paper
        elevation={10}
        sx={{
          borderRadius: 10,
          width: "70%",
          height: "100%",
          minWidth: 700,
          minHeight: 1000,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography>Hello There!</Typography>
        <Button variant="contained" color="secondary">
          Press me
        </Button>
      </Paper>
    </Box>
  );
}

export default HomePage;
