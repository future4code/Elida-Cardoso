import React from "react"
import Router from "./routes/Router";

import theme from "./constants/theme";
import { ThemeProvider } from "@emotion/react";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider >
  );
}

export default App;
