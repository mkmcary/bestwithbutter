import { Box, CssBaseline, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import ApiContextProvider from "./context/ApiContext";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

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
              p: 5,
            }}
          >
            <ApiContextProvider>
              <Outlet />
            </ApiContextProvider>
          </Paper>
        </Box>
        <Footer />
      </ThemeProvider>
    </Box>
  );
}

export default App;
