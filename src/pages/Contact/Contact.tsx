import {
  Box,
  Button,
  Grid2,
  Typography,
  IconButton,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { Fade, Slide } from "react-awesome-reveal";

export const Contact: React.FC = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="contact"
      sx={{
        width: "100vw",
        height: "100vh",
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid2 maxWidth="md">
        <Container>
          <Fade>
            <Grid2
              size={12}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: isMatch ? "column" : "flex",
                justifyContent: "space-evenly",
              }}
            >
              <IconButton
                aria-label="Example"
                sx={{
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease-in-out",
                }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/josuel-junior-433467266",
                    "_blank"
                  )
                }
              >
                <LinkedInIcon
                  sx={{ fontSize: "55px", mr: "6px", color: "#fff" }}
                />
                <Typography variant="body2">Linkedin</Typography>
              </IconButton>
              <IconButton
                aria-label="Example"
                sx={{
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease-in-out",
                }}
                onClick={() => (window.location.href = "tel:+5535999007141")}
              >
                <PhoneIcon
                  sx={{ fontSize: "55px", mr: "6px", color: "#fff" }}
                />
                <Typography variant="body2">Telefone</Typography>
              </IconButton>
              <IconButton
                aria-label="Example"
                sx={{
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease-in-out",
                }}
                onClick={() =>
                  window.open("https://wa.me/5535999007141", "_blank")
                }
              >
                <WhatsAppIcon
                  sx={{ fontSize: "55px", mr: "6px", color: "#fff" }}
                />
                <Typography variant="body2" sx={{}}>
                  Whatsapp
                </Typography>
              </IconButton>
            </Grid2>
          </Fade>
          <Slide>
            <Grid2
              size={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
              }}
            >
              <Typography variant="body2" sx={{ my: "15px" }}>
              Se você procura um desenvolvedor comprometido e focado em soluções eficientes, estou pronto para agregar valor à sua equipe! Vamos conversar sobre como posso contribuir para o seu time.
              </Typography>

              <Grid2 size={6}>
                <Button href="https://drive.google.com/file/d/1UqUaLnh800oR79YYNYz6IaBFuGDPo8ds/view?usp=sharing" target="_blank"
                  sx={{
                    padding: "15px",
                    background: "white",
                    fontFamily: "Rubik",
                    backgroundColor: "rgb(255, 255, 255)",
                    boxShadow: "rgb(255, 255, 255) 0px 0px 6px 0px",
                    color: "rgb(0, 12, 42)",
                    transition: "box-shadow 300ms ease-in-out",
                    "&:hover": {
                      boxShadow: "0 0 8px 5px rgba(255, 255, 255, 0.6)",
                    },
                  }}
                >
                  Curriculum
                </Button>
              </Grid2>
            </Grid2>
          </Slide>
        </Container>
      </Grid2>
    </Box>
  );
};
