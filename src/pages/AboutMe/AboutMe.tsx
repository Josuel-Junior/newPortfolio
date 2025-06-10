import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import { Slide } from "react-awesome-reveal";
import { CustomList } from "../../shared/components/CustomList";
import { listBackEnd } from "../../shared/utils/constants/listTechnologies";
import { listFrontEnd } from "../../shared/utils/constants/listTechnologies";

export const AboutMe: React.FC = () => {
  return (
    <Box
      id="aboutMe"
      sx={{
        minHeight: "100vh",
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
          <Typography variant="h2" sx={{ fontWeight: "600", color: "#fff" }}>
            Sobre Mim
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{
              mb: "20px",
              mt: "5px",
            }}
          >
            Olá, meu nome é Josuel Junior, sou desenvolvedor Full Stack com ampla
            experiência na criação e integração de soluções modernas e
            escaláveis. No frontend, trabalho com TypeScript e React.js para
            construir interfaces dinâmicas e responsivas, garantindo uma
            experiência de usuário fluida e eficiente. No backend, utilizo Java
            e Spring Boot para desenvolver APIs RESTful robustas e seguras,
            sempre focando na performance e escalabilidade das aplicações. Tenho
            experiência em consumir e integrar APIs, além de adotar boas
            práticas de desenvolvimento e metodologias ágeis para entregar
            soluções de alta qualidade.
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
                  color: "#007AFF",
                }}
              >
                Back-End
              </Typography>
              <CustomList text={listBackEnd} />
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
                  color: "#ffea00",
                }}
              >
                Front-End
              </Typography>
              <CustomList text={listFrontEnd} />
            </Slide>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};
