import { ThemeProvider } from "@emotion/react";
import { Outlet } from "react-router-dom";
import { Light } from "./shared/theme/Light";
import { CssBaseline } from "@mui/material";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <ThemeProvider theme={Light}>
      <CssBaseline />
      <NavBar />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
