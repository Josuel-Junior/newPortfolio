import {
  AppBar,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Toolbar,
  Tabs,
  Tab,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import usePosition from "../utils/functions/usePosition";
import { DrawerComponent } from "./DrawerComponent";

export const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const isTop = usePosition();

  const hoverTextNavBar = {
    color: isTop ? "#Fff" : "#000",
    transition: "all .3s",
    "&:hover": {
      color: isTop ? "#ddd" : "#616161",
    },
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
    textTransform: "inherit",
    fontSize: "18px",
  };

  return (
    <AppBar
      elevation={isTop ? 0 : 4}
      sx={{
        background:
          isTop == true ? `transparent` : `${theme.palette.background.paper}`,

        display: "flex",
        justifyContent: "center",
        transition: "background 0.2s ease-in-out",
      }}
    >
      <Box sx={{ position: "absolute", marginLeft: "60px" }}>
        <Typography
          sx={{
            fontWeight: "bold",
            color: isTop ? "#fff" : "#000",
            fontFamily: "Epilogue",
          }}
        >
          Josuel Junior
        </Typography>
      </Box>
      {isMatch ? (
        <Box>
          <DrawerComponent />
        </Box>
      ) : (
        <Toolbar>
          <Tabs sx={{ marginLeft: "auto" }}>
            <Tab
              label="Home"
              onClick={() => navigate("/")}
              sx={hoverTextNavBar}
            />
            <Tab
              sx={hoverTextNavBar}
              label="Cloud"
              onClick={() => navigate("/")}
            />
            <Tab
              sx={hoverTextNavBar}
              label="Sobre mim"
              onClick={() => navigate("/")}
            />
            <Tab
              sx={hoverTextNavBar}
              label="Projetos"
              onClick={() => navigate("/")}
            />
            <Tab
              sx={hoverTextNavBar}
              label="Contato"
              onClick={() => navigate("/")}
            />
          </Tabs>
        </Toolbar>
      )}
    </AppBar>
  );
};
