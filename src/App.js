import { Box } from "@mui/material";
// import Home from "./Compnents/Home";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "./Compnents/Common/Layout";
import lighttheme from "./Theme/lightTheme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Compnents/Home";

function App() {
  return (
    <MuiThemeProvider theme={lighttheme}>
      <CssBaseline />
      <Box>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </Box>
    </MuiThemeProvider>
  );
}

export default App;
