import React from 'react';

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "./assets/theme";

function App() {
  const value = 'World';
  return <div>Hello {value}</div>;
  <ThemeProvider theme={theme}>
  <CssBaseline />
  // ... your code goes here
</ThemeProvider>
}

export default App;
