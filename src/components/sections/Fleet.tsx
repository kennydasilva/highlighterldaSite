import { motion } from "framer-motion";
import { Truck } from "lucide-react";

import fleetHighlighter from "@/assets/imagens/fleet-highlighter.jpg";

export function Fleet() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-ice px-4 py-1.5 text-xs font-semibold text-brand-deep uppercase tracking-wider mb-4">
            <Truck className="h-3.5 w-3.5" /> A Nossa Frota
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-brand">
            Equipamento próprio para grandes operações
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uma frota diversificada de veículos e equipamentos pesados,
            pronta para responder às exigências de cada operação.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden shadow-elevate"
        >
          <img
            src={fleetHighlighter}
            alt="Fila de veículos e equipamentos da frota da Highlighter Group"
            loading="lazy"
            width={2400}
            height={398}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
