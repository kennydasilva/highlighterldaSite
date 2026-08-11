import brandedTrucks from "@/assets/galeria de projetos/Industrial harbour scene with branded trucks.webp";
import craneLocomotive from "@/assets/galeria de projetos/Crane lifting a red locomotive at port.webp";
import crewCargo from "@/assets/galeria de projetos/Industrial port with crew and cargo.webp";
import nightYard from "@/assets/galeria de projetos/Industrial yard at night with workers.webp";
import mobileCrane from "@/assets/galeria de projetos/PHOTO-2024-08-20-17-21-26.webp";
import railYardTeam from "@/assets/galeria de projetos/Industrial lifting in vibrant rail yard.webp";
import railTransport from "@/assets/galeria de projetos/Busy industrial port with truck and crane.webp";
import heavyLift from "@/assets/galeria de projetos/Heavy lift operation at industrial port.webp";
import truckDoorBridge from "@/assets/galeria de projetos/PHOTO-2024-08-19-16-12-20.webp";
import nightTarp from "@/assets/galeria de projetos/Nighttime industrial loading yard operation.webp";
import craneDetail from "@/assets/galeria de projetos/PHOTO-2024-08-20-17-21-27 2.webp";
import sunrisePort from "@/assets/galeria de projetos/Busy industrial port at sunrise.webp";
import craneOnFlatbed from "@/assets/galeria de projetos/PHOTO-2024-08-20-17-21-28.webp";

// Texto copiado tal e qual do PDF do portfólio (src/assets/scren) — não alterar
// nem acrescentar informação que não esteja na fonte.
export const FEATURED_PROJECT = {
  title: "Operação MICD-001",
  paragraph1:
    "Temos o orgulho de partilhar o sucesso da Operação MICD-001, realizada no Porto de Maputo Cais 7, envolvendo a movimentação de 3.000 toneladas de sacos de arroz a partir do navio MV ES JASMINE. A operação foi conduzida com foco na segurança, eficiência e coordenação logística, reforçando o compromisso da Highlighter Group com a excelência operacional.",
  paragraph2:
    "Ao longo da operação, foram mobilizados 7 camiões, realizando 51 carregamentos, o equivalente ao transporte de 30.600 sacos de arroz de 50 kg, totalizando 1.530 toneladas movimentadas nesta fase da operação.",
  stats: [
    { value: "7", label: "Camiões mobilizados" },
    { value: "51", label: "Carregamentos" },
    { value: "30.600", label: "Sacos de arroz de 50 kg" },
    { value: "1.530", label: "Toneladas movimentadas" },
  ],
  photos: [
    { src: crewCargo, alt: "Camião a ser carregado com sacos de arroz junto ao navio" },
    { src: sunrisePort, alt: "Carregamento de sacos de arroz no Porto de Maputo" },
    { src: nightYard, alt: "Carregamento nocturno de sacos de arroz" },
    { src: brandedTrucks, alt: "Camiões da Highlighter Group no Porto de Maputo" },
  ],
};

export interface GalleryPhoto {
  src: string;
  alt: string;
}

export const OTHER_PROJECT_PHOTOS: GalleryPhoto[] = [
  {
    src: craneLocomotive,
    alt: "Grua a suspender uma locomotiva a bordo de um navio",
  },
  {
    src: heavyLift,
    alt: "Locomotiva suspensa por grua de grande capacidade",
  },
  {
    src: railYardTeam,
    alt: "Equipa junto a uma locomotiva a ser içada",
  },
  {
    src: railTransport,
    alt: "Transporte de material ferroviário por camião",
  },
  {
    src: mobileCrane,
    alt: "Grua móvel junto a um navio graneleiro",
  },
  {
    src: craneDetail,
    alt: "Detalhe de equipamento pesado de içamento",
  },
  {
    src: craneOnFlatbed,
    alt: "Componente de grua transportado em camião plataforma",
  },
  {
    src: truckDoorBridge,
    alt: "Colaborador junto a um camião da Highlighter Group",
  },
  {
    src: nightTarp,
    alt: "Carga coberta com lona durante a noite",
  },
];
