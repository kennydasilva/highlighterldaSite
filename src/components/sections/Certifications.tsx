import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

// Nota: não tínhamos os ficheiros de logótipo reais dos parceiros nem uma
// imagem do certificado (o PDF do portefólio não foi extraível com as
// ferramentas locais disponíveis) — a faixa de parceiros reaproveita o
// padrão do Marquee já existente (texto, leve) e o prémio é recriado como
// badge estilizado, ambos consistentes com o resto do site em vez de fotos
// pesadas ou logótipos pixelizados.

const PARTNERS = [
  "CFM",
  "MICD",
  "Grindrod",
  "Cruz Vermelha de Moçambique",
  "Zap",
  "TransCargo",
  "Mozambique Fertilizer Company",
  "Bolloré Logistics",
  "ANDA",
  "Truck Freight Easy",
  "HT Segurança Lda",
  "Overview Construções",
];
const row = [...PARTNERS, ...PARTNERS];

export function Certifications() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-ice px-4 py-1.5 text-xs font-semibold text-brand-deep uppercase tracking-wider mb-4">
            Certificações & Parceiros
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-brand">
            Reconhecimento e parcerias de confiança
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto rounded-3xl border border-border bg-white p-8 sm:p-10 text-center shadow-soft-brand"
        >
          <div className="mx-auto h-14 w-14 rounded-2xl bg-hero-gradient text-white flex items-center justify-center shadow-glow-brand">
            <Trophy className="h-7 w-7" />
          </div>
          <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            The Business Concept · Logistics Warehouse &amp; Supply Chain
            Awards 2024
          </div>
          <div className="mt-3 space-y-1 font-display text-lg font-bold text-brand-deep">
            <p>Best Coal Supply Chain Service 2024 — Moçambique</p>
            <p>
              Excellence in Safe General Cargo Transportation 2024 —
              Moçambique
            </p>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Prémio atribuído em Setembro de 2024
          </div>
        </motion.div>
      </div>

      <div className="mt-16 py-8 border-y border-border bg-brand-ice/40 overflow-hidden">
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {row.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-12 text-base font-display font-semibold text-brand-deep/80"
            >
              <span>{p}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-brand/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
