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
import usePosition from "../utils/functions/usePosition";
import { DrawerComponent } from "./DrawerComponent";
import { navigateDrawer } from "../utils/constants/listMenu";

interface navigateDrawer {
  page: string;
  iconPage: string;
  navigate: string;
}

export const NavBar: React.FC = () => {
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const isTop = usePosition();

  const handleScroll = (indicePage: string) => {
    const element = document.getElementById(indicePage);
    if (element) {
      const offset = 50;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

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
  <Tabs sx={{ marginLeft: "auto" }} value={0}>
    {navigateDrawer.map((itensMenu: navigateDrawer, index: number) => (
      <Tab
        key={index}
        label={itensMenu.page}
        onClick={() => handleScroll(itensMenu.navigate)}
        sx={hoverTextNavBar}
      />
    ))}
  </Tabs>
</Toolbar>

      )}
    </AppBar>
  );
};
