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
import { Slide } from "react-awesome-reveal";


interface dataProjects {
  title: string;
  description: string;
  image: string;
  gitHub: string;
  deploy: string;
}

interface IProps {
  dataProjects: dataProjects[];
}

export const ShowProjects: React.FC<IProps> = ({ dataProjects }) => {
  return (
    <Grid2
      container
      maxWidth="lg"
      sx={{ my: "20px", width: "100%" }}
      spacing={4}
    >
      {dataProjects.map((data, key) => {
        return (
          <Grid2 size={{ xs: 12, md: 4 }} key={key}>
            <Slide>
              <Card
                elevation={10}
                sx={{
                  maxWidth: 345,
                  mx: "auto",
                  borderRadius: "5px",
                }}
              >
                <CardMedia
                  sx={{ height: 200 }}
                  image={data.image}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {data.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href={data.gitHub}>
                    <GitHubIcon sx={{ mr: "5px" }} />
                    Github
                  </Button>
                  <Button size="small" href={data.deploy}>
                    <OpenInBrowserIcon sx={{ mr: "5px" }} />
                    Deploy
                  </Button>
                </CardActions>
              </Card>
            </Slide>
          </Grid2>
        );
      })}
    </Grid2>
  );
};
