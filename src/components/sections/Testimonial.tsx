import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import testimonialTeamRail from "@/assets/imagens/testimonial-team-rail.jpg";

export function Testimonial() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-3xl overflow-hidden shadow-soft-brand"
          >
            <img
              src={testimonialTeamRail}
              alt="Equipa da Highlighter em uniforme laranja a trabalhar numa via férrea"
              loading="lazy"
              width={1000}
              height={750}
              className="w-full h-64 lg:h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 relative rounded-3xl border border-border bg-white p-8 sm:p-12 shadow-soft-brand"
          >
            <Quote className="absolute -top-6 left-8 h-12 w-12 text-brand bg-white rounded-xl p-2 shadow-glow-brand" />
            <p className="text-xl sm:text-2xl font-display leading-relaxed text-brand-deep">
              "Como Gestor de Operações, é uma honra contribuir diariamente para
              o crescimento e excelência desta organização. O sucesso
              constrói-se com visão, trabalho e pessoas comprometidas — e na
              Highlighter, temos exactamente isso."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-hero-gradient text-white flex items-center justify-center font-bold text-lg shadow-glow-brand">
                CA
              </div>
              <div>
                <div className="font-bold text-brand-deep">Candido Azevedo</div>
                <div className="text-sm text-muted-foreground">
                  Operations Manager
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
