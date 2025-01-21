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

import GitHubIcon from '@mui/icons-material/GitHub';

import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

// interface IProps {
//   image: string;
//   title: string;
//   description: string;
//   gitHub: string;
// }

export const Projects: React.FC = () => {
  return (
    <Box sx={{minHeight:"100vh", minWidth:"100vw", background:"red",display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Grid2 container maxWidth="md" sx={{background:"yellow", width:"100%"}} spacing={5}>
        <Grid2 size={6} sx={{background:"blue"}}>
          <Card sx={{ maxWidth: 345 }}>
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
            <CardActions >
         
              <Button size="small"> <GitHubIcon sx={{mr:"5px"}}/>Github</Button>
              <Button size="small"><OpenInBrowserIcon sx={{mr:"5px"}}/>Deploy</Button>
            </CardActions>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
};
