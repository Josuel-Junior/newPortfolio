import {
  Box,
  Button,
  Container,
  Divider,
  Grid2,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import background from "../../assets/home.png";

import photo from "../../assets/photo.jpg";
import PhoneIcon from "@mui/icons-material/Phone";

import styles from "./styles.module.css";
import { useRef } from "react";
import { Height } from "@mui/icons-material";

interface PageProps {
  offset: number;
  gradient: string;
  onClick: () => void;
}

const Page = ({ offset, gradient, onClick }: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          background: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "600",
            fontSize: {
              xl: 31,
              md: 30,
              sm: 30,
              xs: 25,
            },
            marginTop: "10px",
          }}
        >
          Desenvolvedor Fullstack
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "600",

            fontSize: {
              xl: 31,
              md: 30,
              sm: 30,
              xs: 25,
            },
          }}
        >
          Josuel Junior
        </Typography>
      </Box>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer
      className={`${styles.text} ${styles.number}`}
      offset={offset}
      speed={0.3}
    >
      <span>0{offset + 1}</span>
    </ParallaxLayer>
  </>
);

export const Home: React.FC = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const parallax = useRef<IParallax>(null);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <div style={{ background: "#dfdfdf" }}>
      <Parallax
        className={styles.container}
        ref={parallax}
        pages={3}
        horizontal
      >
        <ParallaxLayer offset={0} speed={2.5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button onClick={()=>scroll(1)} sx={{background:"red"}}>
            Mudar
          </Button>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
