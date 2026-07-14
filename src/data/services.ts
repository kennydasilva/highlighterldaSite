// Conteúdo alinhado com o design da equipa de marketing (src/assets/design/).
// A marketing mostra exatamente 5 serviços — sem cards de Agribusiness nem
// Reciclagem & Incineração. O rodapé da própria marketing lista "Agribusiness"
// como link mesmo sem card próprio; ver comentário em Footer.tsx.
import serviceCargoTransport from "@/assets/imagens/service-cargo-transport.jpg";
import serviceRailPort from "@/assets/imagens/service-rail-port.jpg";
import serviceStevedoreCargo from "@/assets/imagens/service-stevedore-cargo.jpg";
import serviceWorkforce from "@/assets/imagens/service-workforce.jpg";
import serviceRailCrew from "@/assets/imagens/service-rail-crew.jpg";

export const SERVICES = [
  {
    title: "Serviços de Transporte e Logística",
    desc: "Planeamento, coordenação e execução de operações de transporte e logística, assegurando o fluxo eficiente de mercadorias desde a origem até ao destino final. Atuamos com foco na otimização de rotas, cumprimento de prazos, segurança da carga e integração com operações portuárias, ferroviárias e industriais.",
    img: serviceStevedoreCargo,
    alt: "Guindaste a carregar sacos de carga num camião no porto",
  },
  {
    title: "Serviços Ferro-Portuários",
    desc: "Prestação de serviços especializados em ambientes ferro-portuários, apoiando operações ligadas à movimentação, organização e gestão de cargas entre portos, terminais ferroviários e áreas logísticas. Garantimos eficiência operacional, cumprimento de normas e integração entre diferentes modais de transporte.",
    img: serviceRailCrew,
    alt: "Equipa da Highlighter em uniforme laranja a trabalhar numa via férrea",
  },
  {
    title: "Transporte de Cargas Gerais e Minérios",
    desc: "Garantimos transporte seguro e eficiente de cargas gerais e minérios, com foco na pontualidade, controlo operacional e redução de riscos logísticos.",
    img: serviceRailPort,
    alt: "Guindaste a movimentar vagão ferroviário num porto",
  },
  {
    title: "Serviços de Estiva e Gestão de Stock",
    desc: "Oferecemos soluções eficazes de estiva e gestão de stock, com foco na segurança, eficiência e otimização dos processos logísticos.",
    img: serviceCargoTransport,
    alt: "Camião com carga coberta pronto para transporte",
  },
  {
    title: "Soluções e Apoio Industrial",
    desc: "Fornecimento de soluções de apoio a operações industriais, adaptadas às necessidades específicas de cada cliente. Atuamos em ambientes industriais complexos, garantindo suporte operacional, logística interna e assistência técnica para assegurar continuidade, eficiência e segurança dos processos produtivos.",
    img: serviceWorkforce,
    alt: "Equipa de colaboradores da Highlighter em uniforme de trabalho",
  },
  {
    title: "Apoio a Operações Portuárias",
    desc: "Apoio operacional completo a atividades portuárias, incluindo coordenação de operações, suporte logístico e assistência em processos de carga e descarga. Trabalhamos para assegurar fluidez operacional, redução de tempos de espera e maior produtividade nas operações portuárias.",
    img: serviceStevedoreCargo,
    alt: "Guindaste a carregar sacos de carga num camião no porto",
  },
];
