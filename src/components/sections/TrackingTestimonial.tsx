import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import highlighterLogo from "@/assets/imagens/logo/HIGHLIGHTER-LOGO.png";
import { TESTIMONIALS } from "@/data/testimonials";

export function TrackingTestimonial() {
  const testimonial = TESTIMONIALS[0];

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 rounded-[2rem] overflow-hidden shadow-elevate"
        >
          {/* Rastreio */}
          <div className="relative bg-hero-gradient text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center overflow-hidden min-h-[420px]">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur">
                Rastreio em tempo real
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold">
                Acompanhe a sua carga
              </h2>
              <p className="mt-4 text-white/85 max-w-md">
                Da recolha à entrega final, com actualizações, segurança e
                transparência total.
              </p>
              <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg">
                <label htmlFor="tracking-number" className="sr-only">
                  Número de encomenda
                </label>
                <input
                  id="tracking-number"
                  type="text"
                  placeholder="Número de encomenda..."
                  className="flex-1 rounded-xl bg-white/15 border border-white/25 px-5 py-4 text-white placeholder:text-white/60 backdrop-blur focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <button
                  type="button"
                  // TODO: ligar a sistema de rastreio real
                  className="rounded-full bg-white text-brand-deep px-7 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:bg-brand-ice inline-flex items-center justify-center gap-2"
                >
                  Rastrear <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              {/* Animated route dots */}
              <div className="relative h-24 mt-10 hidden sm:block">
                <svg
                  viewBox="0 0 400 100"
                  className="absolute inset-0 w-full h-full opacity-70"
                >
                  <motion.path
                    d="M 10 70 Q 120 10 220 55 T 390 30"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="6 6"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                  />
                </svg>
                {[
                  { l: "3%", t: "70%" },
                  { l: "55%", t: "38%" },
                  { l: "97%", t: "22%" },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: p.l,
                      top: p.t,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <span className="absolute inset-0 rounded-full bg-white animate-pulse-ring" />
                    <span className="relative block h-3 w-3 rounded-full bg-white" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testemunho */}
          <div className="relative min-h-[480px] lg:min-h-0">
            <img
              src={testimonial.photo}
              alt={testimonial.name}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
            <img
              src={highlighterLogo}
              alt=""
              aria-hidden="true"
              className="absolute top-6 left-6 h-9 w-auto brightness-0 invert opacity-90"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute inset-x-4 sm:inset-x-6 bottom-4 sm:bottom-6 rounded-2xl bg-black/45 backdrop-blur-md p-6 sm:p-8"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none select-none absolute -top-6 right-6 font-display text-8xl text-white/10 leading-none"
              >
                &rdquo;
              </span>
              <p className="relative text-sm sm:text-base leading-relaxed text-white/95 text-justify">
                {testimonial.quote}
              </p>
              <div className="relative mt-4">
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-sm text-white/70">{testimonial.role}</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
