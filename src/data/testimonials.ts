import ednitonPhoto from "@/assets/em/madeira.jpg";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  photo: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Liderar operações de grande escala exige visão estratégica, responsabilidade e um forte compromisso com a excelência operacional. Na Highlighter Group, acreditamos que o sucesso em transporte, logística, serviços ferro-portuários e soluções industriais está diretamente ligado à eficiência, segurança e capacidade de adaptação às necessidades de cada cliente. O nosso foco é oferecer soluções inteligentes, fiáveis e sustentáveis, contribuindo para operações mais organizadas, produtivas e orientadas para resultados. Trabalhamos todos os dias para construir parcerias sólidas e duradouras, baseadas na confiança e na entrega consistente de valor.",
    name: "Ednilton Madeira",
    role: "CEO",
    photo: ednitonPhoto,
  },
];
