import { motion } from "framer-motion";

import { DIFFS } from "@/data/differentials";
import { fadeUpStagger } from "@/lib/motion-variants";

const diffVariants = fadeUpStagger(0.08, 0.3);

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="py-24 lg:py-32 bg-brand-ice/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          {/* CONFIRMAR COM MARKETING: a captura mostra o badge "Nossos Serviços"
              (igual ao da secção de Serviços) por cima desta secção de
              Diferenciais — parece um lapso de copy/paste da marketing, mas
              implementei literalmente como está na imagem. */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-brand-deep uppercase tracking-wider mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-brand">
            Compromisso com excelência e resultados
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFS.map((d, i) => (
            <motion.div
              key={d.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={diffVariants}
              className="group rounded-3xl bg-white p-8 border border-border hover:border-brand/40 hover:shadow-elevate transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-brand-deep">{d.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                {d.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
