import {
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { SectionInitial } from "../SectionInitial/SectionInitial";
import { SectionCloud } from "../AboutCloud/SectionCloud";
import { AboutMe } from "../AboutMe/AboutMe";
import { Projects } from "../Projects/SectionProjects";

export const Home: React.FC = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const Scroll = () => {};

  return (
    <Box>
      <Box sx={{ width: "100vw", height: "100vh" }}>
        <SectionInitial
          title={"Josuel Junior"}
          subTitle={
            "Sou desenvolvedor Full Stack com foco em back-end, especializado em Java, Spring Boot e serviços de computação em nuvem da AWS."
          }
          actionButton={Scroll}
          titleSecondScreen={"Docker"}
          subTitleSecondScreen={
            "Com certificação AWS Cloud Practitioner, possuo conhecimento em serviços essenciais para o desenvolvimento com Cloud."
          }
        />
      </Box>
      <SectionCloud />
      <AboutMe/>
      <Projects/>
    </Box>
  );
};
