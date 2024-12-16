import { ThemeContext, ThemeProvider } from "@emotion/react"
import { Outlet } from "react-router-dom"
import { Light } from "./shared/theme/Light";
import { ScopedCssBaseline } from "@mui/material";
import { NavBar } from "./components/NavBar/NavBar";



function App() {
  return (

    <ThemeProvider theme={Light}>
      <NavBar/>
      <ScopedCssBaseline />
      <Outlet />
    </ThemeProvider>


  )
}

export default App
