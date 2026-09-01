// Imagens alinhadas com o design da equipa de marketing (src/assets/design/).
// Título/descrição/alt de cada serviço vivem em src/data/translations.ts
// (chave services.items.<id>), traduzidos para pt/en.
import serviceCargoTransport from "@/assets/imagens/service-cargo-transport.jpg";
import serviceRailPort from "@/assets/imagens/service-rail-port.jpg";
import serviceStevedoreCargo from "@/assets/imagens/service-stevedore-cargo.jpg";
import serviceWorkforce from "@/assets/imagens/service-workforce.jpg";
import serviceRailCrew from "@/assets/imagens/service-rail-crew.jpg";

export const SERVICE_IMAGES = [
  { id: "transport", img: serviceStevedoreCargo },
  { id: "railPort", img: serviceRailCrew },
  { id: "cargoMinerals", img: serviceRailPort },
  { id: "stevedoreStock", img: serviceCargoTransport },
  { id: "industrialSupport", img: serviceWorkforce },
] as const;
