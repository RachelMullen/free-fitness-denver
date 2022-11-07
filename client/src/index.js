import React from "react";
import ReactDOM from "react-dom/client";

import App from "./Components/App";

import "./index.css";
// import CssBaseline from "@mui/material/CssBaseline";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const theme = createTheme({
//   palette: {
//     type: "light",
//     primary: {
//       main: "#3f51b5",
//     },
//     secondary: {
//       main: "#f44336",
//     },
//   },
// });

root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}>
      <CssBaseline /> */}
    <App />
  {/* </ThemeProvider> */}
  </React.StrictMode>
);

