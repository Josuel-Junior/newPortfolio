import api from "../../../assets/api.png";
import clinic from "../../../assets/clinic-vale.png";
import app from "../../../assets/app.png";

export const listProjects = [
  {
    title: "API Cadastro de pessoas",
    description:
      "API que permite o cadastro de pessoas e a associação de endereços. Desenvolvida com Spring Boot e Java, seguindo os princípios do Clean Code, com tratamento de exceções e testes automatizados utilizando JUnit e Mockito.",
    image: api,
    gitHub: "https://github.com/Josuel-Junior/register-people-and-address",
    deploy: "https://github.com/Josuel-Junior/register-people-and-address"
  },
  {
    title: "Aplição WEB desenvolvida para empresa Clinic Vale",
    description:
      "Aplicação desenvolvida para a empresa Clinic Vale, utilizando React.js e TypeScript, com integração à API da Meta para exibição de postagens em tempo real.",
    image: clinic,
    gitHub: "https://github.com/Josuel-Junior/clinicvale",
    deploy: "https://laboratorioclinicvale.com.br/",
  },
  {
    title: "Aplicativo Mobile",
    description:
      "Aplicativo desenvolvido em React Native e TypeScript para auxiliar lojistas que trabalham com a aplicação de películas em celulares. Ao inserir a marca e o modelo do aparelho, o sistema exibe uma lista de películas compatíveis.",
    image: app,
    gitHub: "https://github.com/Josuel-Junior/pelicula-compativel",
    deploy: "https://play.google.com/store/apps/details?id=com.josueljfc.peliculacompativelv1&hl=pt_BR",
  },
];
