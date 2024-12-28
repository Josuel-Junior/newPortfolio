import { createTheme } from "@mui/material";

export const Light = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffffff",
      dark: "#000",
      light: "#519ce3",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#fff",
      dark: "#448aff",
      light: "#69a1ff",
      contrastText: "#ffffff",
    },
    background: {
      default: "FFDBDE00",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      "Roboto",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),

    subtitle1: {
      color: "#fff",
      fontFamily: ["Epilogue", "sans-serif"].join(),
    },
    body1: {
      fontSize: 19,
      color: "#4f4f4f",
    },
    h1: {
      fontFamily: ["Rubik", "sans-serif"].join(),
      color: "#fff",
    },
    h2: {
      fontFamily: ["Rubik", "sans-serif"].join(),
      color: "#fff",
    },
    h3: {
      color: "#ddd",
    },
    h5: {
      color: "#4f4f4f",
    },
  },
});
