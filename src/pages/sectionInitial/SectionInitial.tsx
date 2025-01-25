import {
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Fade } from "react-awesome-reveal";
import background from "../../assets/background2.png";
import { Parallax, Pagination, Navigation } from "swiper/modules";

interface IPops {
  title: String;
  subTitle: String;
  actionButton: () => void;
  titleSecondScreen: String;
  subTitleSecondScreen: String;
}

export const SectionInitial: React.FC<IPops> = ({
  title,
  subTitle,
  actionButton,
  titleSecondScreen,
  subTitleSecondScreen,
}) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
          style={{
            backgroundImage: `url(${background})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            width: "150vw",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        ></div>
        <SwiperSlide>
          <Container
            maxWidth="md"
            sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Fade delay={1e1} triggerOnce>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "600",
                  fontSize: {
                    xl: 40,
                    md: 35,
                    sm: 33,
                    xs: 29,
                  },
                }}
              >
                {title}
              </Typography>
            </Fade>
            <Fade delay={1e2} direction="left" triggerOnce>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "400",
                  fontSize: {
                    xl: 25,
                    md: 20,
                    sm: 19,
                    xs: 18,
                  },

                  textAlign: "center",
                  marginY: "30px",
                }}
              >
                {subTitle}
              </Typography>
            </Fade>
            <Button
              onClick={actionButton}
              sx={{
                fontFamily: "Rubik",
                backgroundColor: "rgb(255, 255, 255)",
                boxShadow: "rgb(255, 255, 255) 0px 0px 6px 0px",
                color: "rgb(0, 12, 42)",
                transition: "box-shadow 300ms ease-in-out",
                "&:hover": {
                  boxShadow: "0 0 8px 5px rgba(255, 255, 255, 0.6)",
                },
                padding: "10px",
              }}
            >
              Sobre mim
            </Button>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container
            maxWidth="md"
            sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Fade triggerOnce>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                {titleSecondScreen}
              </Typography>
            </Fade>
            <Fade triggerOnce>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "400",
                  fontSize: {
                    xl: 25,
                    md: 20,
                    sm: 19,
                    xs: 18,
                  },
                  textAlign: "center",
                  marginBottom: "60px",
                  marginTop: "30px",
                }}
              >
                {subTitleSecondScreen}
              </Typography>
            </Fade>
          </Container>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
