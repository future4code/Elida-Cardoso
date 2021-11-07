import React from "react"
import Router from "./routes/Router";

import theme from "./constants/theme";
import { ThemeProvider } from "@emotion/react";
import GlobalState from "./context/GlobalState";

const App = () => {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider >
    </GlobalState>
  );
}

export default App;
