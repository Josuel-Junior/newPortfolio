import { Height } from "@mui/icons-material";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";

import { Fade} from "react-awesome-reveal";
import { ShowProjects } from "../../shared/components/ShowProjects";
import { listProjects } from "../../shared/utils/constants/listProjects";


export const Projects: React.FC = () => {
  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "column",
      }}
    >
      <Container>
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
      </Container>
      <ShowProjects dataProjects={listProjects} />
    </Box>
  );
};
