import { Box, Container, Grid2, Typography } from "@mui/material";
import imageCloud from "../../assets/cloud.png";
import { Slide } from "react-awesome-reveal";

export const SectionCloud: React.FC = () => {
  return (
    <Box
      id="cloud"
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: "10px",
        }}
      >
        <Grid2 container maxWidth={"md"} spacing={5}>
          <Grid2 size={{ xs: 12, md: 6 }} sx={{ alignContent: "center" }}>
            <Slide direction="left">
              <Typography
                variant="h2"
                sx={{ fontWeight: "600", color: "#000" }}
              >
                Conhecimento Cloud
              </Typography>
              <Typography sx={{ mt: "10px" }}>
                Acredito que o conhecimento em computação em nuvem é
                indispensável para desenvolvedores nos dias de hoje. Pensando
                nisso, dediquei-me aos estudos para conquistar minha
                certificação{" "}
                <span style={{ fontWeight: "600", color: "#ff9913" }}>
                  AWS Cloud Practitioner
                </span>
                , que marcou meu primeiro passo no universo de serviços em
                nuvem. Desde então, tenho explorado e testando diversos
                serviços da AWS, como
                <span style={{ fontWeight: "600", color: "#ff9913" }}>
                  {" "}
                  EC2
                </span>
                ,
                <span style={{ fontWeight: "600", color: "#ff9913" }}> S3</span>
                ,
                <span style={{ fontWeight: "600", color: "#ff9913" }}>
                  {" "}
                  LAMBDA
                </span>
                ,
                <span style={{ fontWeight: "600", color: "#ff9913" }}>
                  {" "}
                  RDS
                </span>
                , entre outros enquanto me preparo para o exame
                <span style={{ fontWeight: "600", color: "#ff9913" }}>
                  {" "}
                  AWS Certified Solutions Architect – Associate.
                </span>
              </Typography>
            </Slide>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Slide direction="right">
              <Box
                component="img"
                src={imageCloud}
                alt="Imagem exemplo"
                sx={{
                  width: "100%",
                  maxWidth: "500px",
                  margin: "auto",
                }}
              />
            </Slide>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};
