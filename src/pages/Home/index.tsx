import { Box, Container, Divider, Typography, useTheme } from "@mui/material";
import background from "../../assets/backgroundHome3.png";
import photo from "../../assets/photo.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
export const Home: React.FC = () => {
  const theme = useTheme();
  return (
    <Box component="main" sx={{ width: "100vw" }}>
      <Box
        sx={{
          height: "100vh",
          background: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          position: "relative",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${background})`,
            height: "100%",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Container
          sx={{
            background: "#fff",
            position: "absolute",
            borderTopRightRadius: "20px",
            borderTopLeftRadius: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            border: "2px solid rgba(0, 0, 0, 0.58)",
            
          }}
        >
          <Box sx={{ width: "80%", height: "70vh" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: "8px",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xl: 31,
                    md: 30,
                    sm: 30,
                    xs: 25,
                  },
                }}
              >
                Josuel Junior Fonseca Carneiro
              </Typography>
              <Box
                sx={{
                  backgroundImage: `url(${photo})`,
                  width: "120px",
                  height: "120px",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "50%",
                }}
              />
            </Box>
            <Divider
              sx={{
                borderColor: "primary.dark",
                borderWidth: "2px",
                marginTop: "20px",
              }}
            />
            <Box sx={{ background: "" }}>
              <Typography
                variant="h2"
                sx={{
                  textAlign: "center",
                  marginTop: "30px",
                  fontSize: {
                    xl: 40,
                    md: 35,
                    sm: 30,
                    xs: 25,
                  },
                }}
              >
                Desenvolvedor Fullstack
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  textAlign: "left",
                  marginTop: "30px",
                  fontSize: {
                    xl: 30,
                    md: 25,
                    sm: 20,
                    xs: 22,
                  },
                  fontWeight: "",
                }}
              >
                PERFIL:
              </Typography>
              <PhoneIcon fontSize="large" />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
