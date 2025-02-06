import { ThemeProvider } from "@emotion/react";
import { Outlet } from "react-router-dom";
import { Light } from "./shared/theme/Light";
import { CssBaseline } from "@mui/material";
import { NavBar } from "./shared/components/NavBar";
import { Footer } from "./shared/components/Footer";


function App() {
  return (
    <ThemeProvider theme={Light}>
      <CssBaseline />
      <NavBar />
      <Outlet />
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
