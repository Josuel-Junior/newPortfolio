import { createTheme } from "@mui/material";


export const Light = createTheme({

  
 palette:{
        mode: 'light',
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
            'Roboto',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),

        subtitle1: {
            color: "#296fcd",
            fontSize: 19,
        },
        body1: {
            fontSize: 19,
            color: "#4f4f4f"
        },
        h1: {
            fontFamily:"Rubik",
            color: "#000"
        },
        h2: {
            fontFamily:"Rubik",
            color: "#000",
           
        },
        h3: {
            color: "#000"
        },
        h5: {
            color: "#4f4f4f"
        }
        
    },
    
})