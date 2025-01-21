import { createTheme } from "@mui/material";

export const Light = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000",
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
    subtitle2: {
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
      fontSize: "45px",
      
      [`@media (min-width:960px)`]: {
        fontSize: "47px",
      },
      [`@media (min-width:1280px)`]: {
        fontSize: "50px",
      },
    },
    h3: {
      color: "#000",
      fontFamily: ["Rubik", "sans-serif"].join(),
      fontSize: "25px",
      [`@media (min-width:600px)`]: {
        fontSize: "28px",
      },
      [`@media (min-width:960px)`]: {
        fontSize: "30px",
      },
      [`@media (min-width:1280px)`]: {
        fontSize: "35px",
      },
      // color: "#ddd",
    },
    h5: {
      color: "#4f4f4f",
    },
  },
});
