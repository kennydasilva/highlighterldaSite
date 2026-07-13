import { Train, Ship, Boxes, Sprout, HardHat, Leaf } from "lucide-react";

import serviceCargoTransport from "@/assets/imagens/service-cargo-transport.jpg";
import serviceRailPort from "@/assets/imagens/service-rail-port.jpg";
import serviceStevedoreCargo from "@/assets/imagens/service-stevedore-cargo.jpg";
import serviceWorkforce from "@/assets/imagens/service-workforce.jpg";

export const SERVICES = [
  {
    icon: Train,
    title: "Transporte de Cargas & Minérios",
    desc: "Transporte seguro e eficiente de cargas gerais e minérios, com foco na pontualidade e controlo operacional.",
    img: serviceCargoTransport,
    alt: "Camião com carga coberta pronto para transporte",
  },
  {
    icon: Ship,
    title: "Serviços Ferroportuários",
    desc: "Operações portuárias e ferroviárias com elevados padrões de segurança e cumprimento rigoroso de prazos.",
    img: serviceRailPort,
    alt: "Guindaste a movimentar vagão ferroviário num porto",
  },
  {
    icon: Boxes,
    title: "Estiva & Gestão de Stock",
    desc: "Soluções eficazes de estiva e gestão de stock com foco em segurança e optimização logística.",
    img: serviceStevedoreCargo,
    alt: "Guindaste a carregar sacos de carga num camião no porto",
  },
  {
    icon: Sprout,
    title: "Agribusiness",
    desc: "Apoio logístico e operacional ao sector agrícola, incluindo transporte de produtos agrícolas.",
    // Sem foto própria de agribusiness disponível — reaproveita a imagem de transporte de carga,
    // a correspondência real mais próxima entre as fotos fornecidas.
    img: serviceCargoTransport,
    alt: "Camião de transporte de carga usado em operações agrícolas",
  },
  {
    icon: HardHat,
    title: "Mão-de-Obra Industrial",
    desc: "Fornecimento de mão-de-obra qualificada e experiente para aplicações industriais em diversos sectores.",
    img: serviceWorkforce,
    alt: "Equipa de colaboradores da Highlighter em uniforme de trabalho",
  },
  {
    icon: Leaf,
    title: "Reciclagem & Incineração",
    desc: "Soluções ambientalmente responsáveis para tratamento, reciclagem e incineração de resíduos industriais.",
    // Sem foto própria desta operação disponível — reaproveita a imagem ferroportuária
    // como imagem de operações industriais mais próxima entre as fotos fornecidas.
    img: serviceRailPort,
    alt: "Operação industrial em ambiente portuário",
  },
];
