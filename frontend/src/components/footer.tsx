import { Box, Paper, Typography, Button } from "@mui/material";
import BWBLogo from "./logo";

function Footer() {
  return (
    <Box>
      <Paper
        elevation={10}
        sx={{
          width: "100%",
          height: 200,
          backgroundColor: "#FA455D",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          p: 2,
        }}
      >
        <Typography variant="body1">
          Best with Butter is a Web App Developed by Matthew Martin for Use in
          Tracking Movies and TV Shows to Watch.
        </Typography>

        <Typography variant="caption">
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </Typography>
        <Box>
          <BWBLogo />
        </Box>
        <Typography variant="caption">
          &copy; Copyright Matthew Martin, 2023
        </Typography>
      </Paper>
    </Box>
  );
}

export default Footer;
