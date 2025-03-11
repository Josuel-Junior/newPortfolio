import { Box } from "@mui/material";
import { SectionInitial } from "../pageInitial/SectionInitial";
import { SectionCloud } from "../AboutCloud/SectionCloud";
import { AboutMe } from "../AboutMe/AboutMe";
import { Projects } from "../Projects/SectionProjects";
import { Contact } from "../Contact/Contact";

export const Home: React.FC = () => {


  const handleScroll = (indicePage: string) => {
    const element = document.getElementById(indicePage);
    if (element) {
      const offset = 50;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };


  return (
    <Box id="home">
      <Box sx={{ width: "100vw", height: "100vh" }}>
        <SectionInitial
          title={"Josuel Junior"}
          subTitle={
            "Desenvolvedor Full Stack"
          }
          actionButton={handleScroll}
          titleSecondScreen={"Docker"}
          subTitleSecondScreen={
            "Uso Docker para containerizar aplicações, garantindo portabilidade, escalabilidade e eficiência no desenvolvimento e implantação."
          }
        />
      </Box>
      <SectionCloud />
      <AboutMe />
      <Projects />
      <Contact />
    </Box>
  );
};
