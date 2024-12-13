import { ThemeContext, ThemeProvider } from "@emotion/react"
import { Outlet } from "react-router-dom"
import { Light } from "./shared/theme/Light";
import { ScopedCssBaseline } from "@mui/material";



function App() {
  return (

    <ThemeProvider theme={Light}>
      <ScopedCssBaseline />
      <Outlet />
    </ThemeProvider>


  )
}

export default App
