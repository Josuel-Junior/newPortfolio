import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";

export const AboutMe: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        width: "100vw",
        background: "#090911",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Container sx={{ background: "" }} maxWidth="md">
        <Typography variant="h2">Sobre Mim</Typography>
        <Typography
          variant="subtitle2"
          sx={{
            fontSize: {
              xl: 18,
              md: 15,
              sm: 11,
              xs: 10,
            },
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
          laboriosam quisquam delectus blanditiis itaque velit, aut animi
          assumenda rerum quae veniam, a doloremque! Exercitationem blanditiis
          eaque, laudantium consequatur quae eveniet? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consequatur dolor aliquid vel asperiores
          deleniti dolore sint corporis maiores aut natus eaque, suscipit
          aliquam iusto ab quas dolorum impedit eos voluptatum. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Sit ipsum, reiciendis
          fugiat nesciunt explicabo consequatur vero iusto dolorum adipisci nam
          ea vel temporibus sunt delectus consequuntur amet. Vero, mollitia
          nobis.
        </Typography>
      <Grid2 container maxWidth="md">
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ background: "red" }}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            id, ad distinctio mollitia optio suscipit delectus deserunt ut!
            Animi eligendi praesentium, quam sed pariatur quia voluptatibus quas
            doloremque accusantium consectetur?
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ background: "red" }}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta et
            placeat voluptate quo a! Facilis iusto, tenetur voluptatum a
            blanditiis officiis temporibus, recusandae corporis odio quos,
            commodi amet nihil nisi!
          </Typography>
        </Grid2>
      </Grid2>
      </Container>
    </Box>
  );
};
