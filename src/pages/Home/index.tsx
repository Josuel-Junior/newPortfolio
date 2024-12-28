import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Fade, Bounce, Flip, Hinge, Slide } from "react-awesome-reveal";

import background from "../../assets/background.png";

import { Parallax, Pagination, Navigation } from "swiper/modules";
import { SectionInitial } from "../sectionInitial/SectionInitial";

export const Home: React.FC = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const Scroll = () => {};

  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <SectionInitial
        title={"Josuel Junior"}
        subTitle={
          " Sou desenvolvedor Full Stack com foco em back-end, especializado em Java, Spring Boot e serviços de computação em nuvem da AWS."
        }
        actionButton={Scroll}
        titleSecondScreen={"Cloud"}
        subTitleSecondScreen={
          "Com certificação AWS Cloud Practitioner, possuo conhecimento em serviços essenciais para o desenvolvimento com Cloud."
        }
      />
    </Box>
  );
};
