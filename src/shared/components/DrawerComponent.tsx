import {
  Drawer,
  IconButton,
  List,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { Icon } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import StorageIcon from "@mui/icons-material/Storage";
import DataObjectIcon from "@mui/icons-material/DataObject";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CssIcon from "@mui/icons-material/Css";

import SchoolIcon from "@mui/icons-material/School";

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { navigateDrawer } from "../utils/constants/listMenu";
import usePosition from "../utils/functions/usePosition";

interface navigateDrawer {
  page: string;
  iconPage: string;
  navigate: string;
}

export const DrawerComponent: React.FC = () => {
  const isTop = usePosition();

  const [openDrawer, setOpenDrawer] = useState(false);

  const navigate = useNavigate();

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
      setOpenDrawer(false);
    }
  };

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{ mr: "40px" }}>
          {navigateDrawer.map((itensPage: navigateDrawer, index: number) => (
            <ListItemButton
              key={index}
              onClick={() => handleScroll(itensPage.navigate)}
            >
              <ListItemIcon>
                <Icon>{itensPage.iconPage}</Icon>
              </ListItemIcon>
              <ListItemText onClick={() => navigate(`/${itensPage.navigate}`)}>
                {itensPage.page}
              </ListItemText>
            </ListItemButton>
          ))}
        </List>
        <Divider />
      </Drawer>

      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        aria-labelledby="Abrir menu de opções"
      >
        <MenuIcon
          sx={{ color: isTop ? "#fff" : "secondary" }}
          id="Abrir menu de opções"
        />
      </IconButton>
    </>
  );
};
