import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonial() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative rounded-3xl border border-border bg-white p-8 sm:p-12 shadow-soft-brand"
        >
          <Quote className="absolute -top-6 left-8 h-12 w-12 text-brand bg-white rounded-xl p-2 shadow-glow-brand" />
          <p className="text-xl sm:text-2xl font-display leading-relaxed text-brand-deep">
            "Como Gestor de Operações, é uma honra contribuir diariamente para o
            crescimento e excelência desta organização. O sucesso constrói-se
            com visão, trabalho e pessoas comprometidas — e na Highlighter,
            temos exactamente isso."
          </p>
          {/* CONFIRMAR COM MARKETING: a citação fala em primeira pessoa como
              "Gestor de Operações", mas a captura assina como "CEO" — mantive
              a citação e a assinatura exatamente como na imagem da marketing. */}
          <div className="mt-8 flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-hero-gradient text-white flex items-center justify-center font-bold text-lg shadow-glow-brand">
              EM
            </div>
            <div>
              <div className="font-bold text-brand-deep">Ednilton Madeira</div>
              <div className="text-sm text-muted-foreground">CEO</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
