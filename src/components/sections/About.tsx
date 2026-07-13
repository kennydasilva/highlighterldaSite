import { motion } from "framer-motion";
import { Award } from "lucide-react";

import aboutTeamField from "@/assets/imagens/about-team-field.jpg";
import { Tilt } from "@/components/Tilt";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <Tilt className="relative rounded-3xl overflow-hidden shadow-elevate">
              <img
                src={aboutTeamField}
                alt="Equipa da Highlighter em operação no terreno, com capacetes e coletes de segurança"
                loading="lazy"
                width={1280}
                height={960}
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/60 to-transparent" />
            </Tilt>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-4 sm:right-8 bg-white rounded-2xl p-6 shadow-elevate w-64"
            >
              <div className="text-5xl font-bold text-gradient-brand">+13</div>
              <div className="text-sm text-muted-foreground mt-1">
                Anos a entregar logística inteligente em Moçambique e SADC
              </div>
            </motion.div>
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-2xl bg-brand-ice border border-brand/20 -z-10" />
          </motion.div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-ice px-4 py-1.5 text-xs font-semibold text-brand-deep uppercase tracking-wider mb-4">
              <Award className="h-3.5 w-3.5" /> Sobre Nós
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Parceiro estratégico em{" "}
              <span className="text-gradient-brand">operações industriais</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Somos uma empresa moçambicana com mais de 13 anos no mercado,
              actuando como operadora logística integrada e inteligente em
              diversos sectores — do porto ao terreno, com competência técnica,
              segurança e compromisso.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                [
                  "Missão",
                  "Garantir os objectivos do cliente com eficácia e eficiência.",
                ],
                [
                  "Visão",
                  "Liderar o mercado nacional e da SADC criando valor sustentável.",
                ],
                [
                  "Valores",
                  "A pessoa em primeiro lugar — colaboradores, clientes e parceiros.",
                ],
              ].map(([t, d]) => (
                <div
                  key={t}
                  className="rounded-2xl border border-border bg-white p-5 hover:border-brand/40 hover:shadow-soft-brand transition-all"
                >
                  <div className="text-sm font-bold text-brand">{t}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{d}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              {[
                ["Logística Integrada", 95],
                ["Operações Ferroportuárias", 90],
                ["Estiva & Gestão de Cargas", 85],
              ].map(([l, v]) => (
                <div key={l as string}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-semibold text-brand-deep">{l}</span>
                    <span className="text-muted-foreground">{v}%</span>
                  </div>
                  <div className="h-2 bg-brand-ice rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${v}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-hero-gradient"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
