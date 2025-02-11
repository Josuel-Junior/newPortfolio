import { Box } from "@mui/material";
import { SectionInitial } from "../pageInitial/SectionInitial";
import { SectionCloud } from "../AboutCloud/SectionCloud";
import { AboutMe } from "../AboutMe/AboutMe";
import { Projects } from "../Projects/SectionProjects";
import { Contact } from "../Contact/Contact";

export const Home: React.FC = () => {
  const Scroll = () => {};

  return (
    <Box id="home">
      <Box sx={{ width: "100vw", height: "100vh" }}>
        <SectionInitial
          title={"Josuel Junior"}
          subTitle={
            "Sou desenvolvedor Full Stack com foco em back-end, especializado em Java, Spring Boot e serviços de computação em nuvem da AWS."
          }
          actionButton={Scroll}
          titleSecondScreen={"Docker"}
          subTitleSecondScreen={
            "Utilizo Docker para containerizar aplicações, garantindo portabilidade, escalabilidade e eficiência no desenvolvimento e deployment de sistemas."
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
