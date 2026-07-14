import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function CEOMessage() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto relative rounded-3xl border border-border bg-white p-8 sm:p-12 shadow-soft-brand"
        >
          <Quote className="absolute -top-6 left-8 h-12 w-12 text-brand bg-white rounded-xl p-2 shadow-glow-brand" />
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-ice px-4 py-1.5 text-xs font-semibold text-brand-deep uppercase tracking-wider mb-6">
            Mensagem do CEO
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-justify">
            <p>
              Liderar operações de grande escala exige visão estratégica,
              responsabilidade e um forte compromisso com a excelência
              operacional.
            </p>
            <p>
              Na Highlighter Group, acreditamos que o sucesso em transporte,
              logística, serviços ferro-portuários e soluções industriais
              está diretamente ligado à eficiência, segurança e capacidade de
              adaptação às necessidades de cada cliente.
            </p>
            <p>
              O nosso foco é oferecer soluções inteligentes, fiáveis e
              sustentáveis, contribuindo para operações mais organizadas,
              produtivas e orientadas para resultados. Trabalhamos todos os
              dias para construir parcerias sólidas e duradouras, baseadas na
              confiança e na entrega consistente de valor.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4 pt-6 border-t border-border">
            <div className="h-14 w-14 rounded-full bg-hero-gradient text-white flex items-center justify-center font-bold text-lg shadow-glow-brand shrink-0">
              EM
            </div>
            <div>
              <div className="font-bold text-brand-deep">Ednilton Madeira</div>
              <div className="text-sm text-muted-foreground">
                CEO, Highlighter Group
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
