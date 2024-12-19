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

export const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const hoverTextNavBar = {
    
    transition: "all .3s",
    "&:hover": {
      color: "#000",
      background: theme.palette.background.default,
    },
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
    textTransform: "inherit",
    fontSize: "18px",
  };

  return (
    <AppBar
      elevation={0}
      
      sx={{
      //  backgroundColor: 'rgba(255, 255, 255, 0.9)',
        display: "flex",
        justifyContent: "center",
        transition: "background 0.2s ease-in-out",
      }}
    >
      <Box sx={{ position: "absolute", marginLeft: "60px" }}>
        <Typography sx={{ fontWeight: "bold", color: "#000" }}>
          Josuel Junior
        </Typography>
      </Box>
      {isMatch ? (
        <Box></Box>
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
              label="Currículo"
              onClick={() => navigate("/")}
            />
            <Tab
              sx={hoverTextNavBar}
              label="Formação"
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
