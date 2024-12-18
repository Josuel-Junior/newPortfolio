import { Box, Container, Typography, useTheme } from "@mui/material";

import background from "../../assets/backgroundHome.png";

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
        <Container sx={{ background: "red", position: "absolute" }}>
          <Box sx={{ width: "80%", height: "70vh", backgroundColor: "red" }}>
            <p>teste</p>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
