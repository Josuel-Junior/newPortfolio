import { Box, Button, Grid2, Typography, IconButton } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Contact: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid2 container spacing={5} sx={{ background: "red" }} maxWidth="md">
        <Grid2 size={6}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            incidunt praesentium cum sit recusandae. Consequuntur mollitia iusto
            incidunt. Ut nulla aut officiis explicabo fugit illo qui quia
            obcaecati nobis provident.
          </Typography>
        </Grid2>
        <Grid2 size={6} sx={{ background: "blue" }}>
          <Typography></Typography>
         
          <IconButton aria-label="Example">
            <LinkedInIcon sx={{fontSize:"70px"}}/>
          </IconButton>
        </Grid2>
      </Grid2>
    </Box>
  );
};
