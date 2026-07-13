import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

import heroLocomotiveLift from "@/assets/imagens/hero-locomotive-lift.jpg";
import { Counter } from "@/components/Counter";
import { Tilt } from "@/components/Tilt";
import {
  HelmetIcon,
  RouteNetworkIcon,
  TruckIcon,
} from "@/components/icons/LogisticsIcons";
import { PREMIUM_EASE } from "@/lib/motion-variants";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-brand-deep mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              13+ anos movendo Moçambique e a SADC
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: PREMIUM_EASE }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-brand uppercase"
            >
              "Soluções inteligentes <br />
              para grandes operações"
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: PREMIUM_EASE }}
              className="mt-6 text-lg text-muted-foreground max-w-xl"
            >
              Logística, Serviços Ferro-Portuários e Soluções Industriais.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: PREMIUM_EASE }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-hero-gradient text-white px-7 py-4 font-semibold shadow-glow-brand transition-all hover:scale-105 hover:shadow-elevate"
              >
                Solicitar Cotação
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand-deep/15 px-7 py-4 font-semibold text-brand-deep transition-all hover:scale-105 hover:bg-brand-ice"
              >
                Ver Serviços
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 grid grid-cols-3 gap-4 max-w-md"
            >
              {[
                ["13+", "Anos"],
                ["100+", "Projectos"],
                ["50+", "Especialistas"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="text-3xl font-bold text-brand">{n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* 3D Visual */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: PREMIUM_EASE }}
              className="relative"
            >
              <Tilt className="relative rounded-3xl overflow-hidden shadow-elevate aspect-[4/5] sm:aspect-[5/6]">
                <motion.img
                  src={heroLocomotiveLift}
                  alt="Locomotiva a ser transportada em operação de carga especial"
                  style={{ y: parallaxY }}
                  className="w-full h-[115%] scale-110 object-cover"
                  width={1200}
                  height={1200}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-deep/70 via-brand-deep/20 to-transparent" />

                {/* Floating cards */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-6 left-6 glass rounded-2xl p-4 shadow-soft-brand"
                  style={{ transform: "translateZ(60px)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-hero-gradient text-white flex items-center justify-center">
                      <HelmetIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Segurança
                      </div>
                      <div className="font-bold text-brand-deep">100%</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-6 right-6 glass rounded-2xl p-4 shadow-soft-brand"
                  style={{ transform: "translateZ(80px)" }}
                >
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <TruckIcon className="h-4 w-4 text-brand" />
                    Entregas no prazo
                  </div>
                  <div className="text-2xl font-bold text-brand-deep">
                    <Counter to={98} suffix="%" duration={2} />
                  </div>
                  <div className="mt-2 h-1.5 w-32 bg-brand-ice rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "98%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-hero-gradient"
                    />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-32 left-6 glass rounded-2xl px-4 py-3 shadow-soft-brand"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-brand-deep">
                    <RouteNetworkIcon className="h-4 w-4 text-brand" />
                    Rede SADC activa
                  </div>
                </motion.div>
              </Tilt>

              {/* Rotating ring decoration */}
              <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full border-2 border-dashed border-brand/30 animate-spin-slow pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full border-2 border-dashed border-brand/40 animate-spin-slow [animation-direction:reverse] pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
