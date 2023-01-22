import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import NavBar from "./components/navbar";

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
        <Box>
          <Outlet />
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default App;
