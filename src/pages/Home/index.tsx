import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import background from "../../assets/teste3.png"; // Imagem importada

import { Parallax, Pagination, Navigation } from "swiper/modules";

export const Home: React.FC = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
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
        {/* Container de fundo parallax */}
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%" // Definindo a intensidade do movimento
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover", // Garantindo que a imagem cubra toda a área
            backgroundPosition: "center", // Centralizando a imagem
            backgroundAttachment: "fixed", // Fixando o fundo para efeito parallax
            width: "200vw", // Ocupa toda a largura da tela
            height: "100vh", // Garantindo que o fundo tenha altura maior que a tela
            position: "absolute", // Precisamos que o fundo seja absoluto para o efeito parallax
            top: 0,
            left: 0,
            zIndex: -1, // Garantindo que o fundo fique atrás do conteúdo
          }}
        ></div>

        {/* Slides do Swiper */}
        <SwiperSlide>
          <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="title" data-swiper-parallax="-300">
              Slide 1
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec...
              </p>
            </div>
          </Box>
        </SwiperSlide>

        {/* Outros slides */}
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 2
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 3
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
