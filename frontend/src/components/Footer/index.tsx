import { Box, Paper, Typography } from "@mui/material";
import Logo from "../Logo";

function Footer() {
  return (
    <Paper
      elevation={10}
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "20vh",
        backgroundColor: "#FA455D",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 2,
      }}
    >
      <div>
        <Typography variant="body1">
          Best with Butter is a Web App Developed by Matthew Martin for Use in
          Tracking Movies and TV Shows to Watch.
        </Typography>

        <Typography variant="caption">
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Logo />
        </Box>
        <Typography variant="caption">
          &copy; Copyright Matthew Martin, 2023
        </Typography>
      </div>
    </Paper>
  );
}

export default Footer;
