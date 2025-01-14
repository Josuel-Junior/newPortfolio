import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import { Slide } from "react-awesome-reveal";

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
      <Container sx={{ my: "10px" }} maxWidth="md">
        <Slide direction="left">
          <Typography variant="h2">Sobre Mim</Typography>

          <Typography
            variant="subtitle2"
            sx={{
              fontSize: {
                xl: 18,
                md: 15,
                sm: 13,
                xs: 12,
              },
              mb: "20px",
              mt: "5px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            laboriosam quisquam delectus blanditiis itaque velit, aut animi
            assumenda rerum quae veniam, a doloremque! Exercitationem blanditiis
            eaque, laudantium consequatur quae eveniet? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Consequatur dolor aliquid vel
            asperiores deleniti dolore sint corporis maiores aut natus eaque,
            suscipit aliquam iusto ab quas dolorum impedit eos voluptatum. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Sit ipsum,
            reiciendis fugiat nesciunt explicabo consequatur vero iusto dolorum
            adipisci nam ea vel temporibus sunt delectus consequuntur amet.
            Vero, mollitia nobis.
          </Typography>
        </Slide>
        <Grid2 container maxWidth="md" sx={{ mt: "10px", color: "#fff" }}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Slide direction="left">
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: {
                    xl: 35,

                    xs: 25,
                  },
                  color:"#007AFF"
                }}
              >
                Back-End
              </Typography>
              <ul>
                <li>
                  <span style={{ color: "#007AFF" }}>Frameworks:</span> Spring
                  boot.
                </li>
                <li>Linguagem: Java.</li>
                <li>
                  Serviços AWS: EC2, Lambda, Elastic Container Services, S3,
                  RDS, API Gateway e Lex.{" "}
                </li>
                <li>
                  Ferramentas: Maven, Docker, JPA, Hipernate, InteliiJ e Visual
                  Studio.
                </li>
                <li>Bancos de dado: MySQL, PostgreSQL, Amazon RDS.</li>
              </ul>
            </Slide>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Slide direction="right">
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: {
                    xl: 35,
                    xs: 25,
                  },
                  color:"yellow"
                }}
              >
                Front-End
              </Typography>
              <ul>
                <li>
                  <span style={{ color: "yellow" }}>Frameworks:</span> React,
                  React Native e NextJS.
                </li>
                <li>
                <span style={{ color: "yellow" }}>Linguagem:</span> Javascript, Typescript e Assincronismo.</li>
                <li>
                  Bibliotecas e Tecnologias: DatoCMS, GraphQL, TanSrack Query,
                  React router, Context API, React Hook Form e Zod.
                </li>
                <li>Estilização: CSS, Material-UI, Bootstrap e Sass.</li>
                <li>Design: Responsividade, UI/UX e SEO.</li>
              </ul>
            </Slide>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};
