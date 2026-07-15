import { motion } from "framer-motion";
import { Award } from "lucide-react";

import aboutTeamField from "@/assets/imagens/about-team-field.jpg";
import { Tilt } from "@/components/Tilt";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white uppercase tracking-wider">
            <Award className="h-4 w-4" /> Sobre Nós
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[420px] lg:min-h-0 lg:h-full"
          >
            <Tilt className="relative rounded-3xl overflow-hidden shadow-elevate h-full">
              <img
                src={aboutTeamField}
                alt="Equipa da Highlighter em operação no terreno, com capacetes e coletes de segurança"
                loading="lazy"
                width={1280}
                height={960}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/60 to-transparent" />
            </Tilt>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 lg:-bottom-4 -right-4 sm:right-8 bg-white rounded-2xl p-6 shadow-elevate w-64"
            >
              <div className="text-5xl font-bold text-brand">+13</div>
              <div className="text-sm text-muted-foreground mt-1">
                Anos a entregar logística inteligente em Moçambique e SADC
              </div>
            </motion.div>
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-2xl bg-brand-ice border border-brand/20 -z-10" />
          </motion.div>

          <div className="lg:h-full lg:flex lg:flex-col lg:justify-between">

            <div>
              
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-brand">
                Parceiro estratégico em operações industriais
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-justify">
                A Highlighter Group é uma empresa com mais de 13 anos de
                experiência multidisciplinar dedicada a oferecer soluções
                estratégicas em transporte, logística e apoio industrial. Atuamos
                em ambientes operacionais exigentes, como portos, ferrovias e
                indústrias, contribuindo para a continuidade operacional,
                produtividade e crescimento sustentável dos nossos parceiros.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4 items-start">
                <div className="rounded-2xl border border-border bg-white p-5 hover:border-brand/40 hover:shadow-soft-brand transition-all duration-300">
                  <div className="text-sm font-bold text-brand">Visão</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Ser uma referência no setor de transporte, logística e
                    serviços industriais. E contribuir para o desenvolvimento de
                    operações de grande escala.
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-white p-5 hover:border-brand/40 hover:shadow-soft-brand transition-all duration-300 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-bold text-brand">Missão</div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      Desenvolver soluções inteligentes e integradas em
                      transporte, logística, serviços ferro-portuários e apoio
                      industrial, adaptadas às necessidades de grandes operações.
                    </div>
                  </div>
                  {/* CONFIRMAR COM MARKETING: a captura de ecrã corta o cabeçalho desta
                      segunda coluna (só se vê o texto após o separador "|"). Assumi
                      "Valores" por eliminação, já que é o único dos 3 conceitos sem
                      caixa própria — confirmar com a equipa antes de publicar. */}
                  <div className="border-l border-border pl-4">
                    <div className="text-sm font-bold text-brand">Valores</div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      Garantir eficiência operacional, segurança e cumprimento
                      rigoroso de normas, e assegurar a execução fiável e
                      organizada de cada serviço prestado.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {[
                ["Logística Integrada", 98],
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
