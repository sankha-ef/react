import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./utils/routes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./app/theme";

function App() {

  return (
    // <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={routes} />
        {/* </ThemeProvider> */}
      </ThemeProvider>
    // </ColorModeContext.Provider>
  );
}

export default App;
