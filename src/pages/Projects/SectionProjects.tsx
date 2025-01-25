import { Height } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";

import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

import banner from "../../assets/banner.png";
import { Fade, Slide } from "react-awesome-reveal";
import { ShowProjects } from "../../shared/components/ShowProjects";
import { listProjects } from "../../shared/utils/constants/listProjects";

// interface IProps {
//   image: string;
//   title: string;
//   description: string;
//   gitHub: string;
// }

export const Projects: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "column",
      }}
    >
      <Box textAlign={"center"} my={2} maxWidth="lg">
        <Fade>
          <Typography variant="h2" sx={{ my: "20px", fontWeight: "600" }}>
            Projetos
          </Typography>
        </Fade>
        <Fade>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            in illo a harum beatae, officia hic minus delectus voluptatum quos
            esse, modi perspiciatis nihil odit eveniet. Cupiditate voluptate
            atque nemo?
          </Typography>
        </Fade>
      </Box>
      <ShowProjects dataProjects={listProjects} />
    </Box>
  );
};
