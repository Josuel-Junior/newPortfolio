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
      <Box textAlign={"center"} maxWidth="lg">
        <Typography variant="h2" sx={{ my: "20px", fontWeight: "600" }}>
          Projetos
        </Typography>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt in
          illo a harum beatae, officia hic minus delectus voluptatum quos esse,
          modi perspiciatis nihil odit eveniet. Cupiditate voluptate atque nemo?
        </Typography>
      </Box>
      <Box>
        <Grid2
          container
          maxWidth="lg"
          sx={{ background: "", width: "100%" }}
          spacing={5}
        >
          <Grid2 size={4} sx={{ background: "" }}>
            <Card
              sx={{
                maxWidth: 345,
                mx: "auto",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px 1px #4f4f4f",
              }}
            >
              <CardMedia
                sx={{ height: 200 }}
                image="https://www.datocms-assets.com/115877/1719426929-purple-modern-download-app-instagram-story-1.png"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Aplicação WEB
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  {" "}
                  <GitHubIcon sx={{ mr: "5px" }} />
                  Github
                </Button>
                <Button size="small">
                  <OpenInBrowserIcon sx={{ mr: "5px" }} />
                  Deploy
                </Button>
              </CardActions>
            </Card>
          </Grid2>
          <Grid2 size={4} sx={{ background: "" }}>
            <Card
              sx={{
                maxWidth: 345,
                mx: "auto",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px 1px #4f4f4f",
              }}
            >
              <CardMedia
                sx={{ height: 200 }}
                image="https://www.datocms-assets.com/115877/1719426929-purple-modern-download-app-instagram-story-1.png"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Aplicação WEB
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  {" "}
                  <GitHubIcon sx={{ mr: "5px" }} />
                  Github
                </Button>
                <Button size="small">
                  <OpenInBrowserIcon sx={{ mr: "5px" }} />
                  Deploy
                </Button>
              </CardActions>
            </Card>
          </Grid2>
          <Grid2 size={4} sx={{ background: "" }}>
            <Card
              sx={{
                maxWidth: 345,
                mx: "auto",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px 1px #4f4f4f",
              }}
            >
              <CardMedia
                sx={{ height: 200 }}
                image="https://www.datocms-assets.com/115877/1719426929-purple-modern-download-app-instagram-story-1.png"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Aplicação WEB
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  {" "}
                  <GitHubIcon sx={{ mr: "5px" }} />
                  Github
                </Button>
                <Button size="small">
                  <OpenInBrowserIcon sx={{ mr: "5px" }} />
                  Deploy
                </Button>
              </CardActions>
            </Card>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};
