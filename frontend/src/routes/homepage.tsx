import { Box, Typography, Button } from "@mui/material";
import ContentWrapper from "../components/ContentWrapper";

function HomePage() {
  return (
    <Box sx={{ minHeight: "70vh", p: "20px" }}>
      <ContentWrapper>
        <Typography>Hello There!</Typography>
        <Button variant="contained" color="secondary">
          Press me
        </Button>
      </ContentWrapper>
    </Box>
  );
}

export default HomePage;
