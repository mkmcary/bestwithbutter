import { Box, CssBaseline, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import NavBar from "./components/navbar";
import Footer from "./components/footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F21B42",
    },
    secondary: {
      main: "#FACD1A",
    },
  },
  typography: {
    fontFamily: "Oxygen",
    h1: {
      fontFamily: "Oxygen",
    },
  },
});

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 3,
          }}
        >
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
            <Outlet />
          </Paper>
        </Box>
        <Footer />
      </ThemeProvider>
    </Box>
  );
}

export default App;