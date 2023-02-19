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
      <ApiContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <Outlet />
          <Footer />
        </ThemeProvider>
      </ApiContextProvider>
    </Box>
  );
}

export default App;
