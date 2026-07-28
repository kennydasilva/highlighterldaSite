import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import highlighterLogo from "@/assets/imagens/logo/HIGHLIGHTER-LOGO.png";
import { MozambiqueMap } from "@/components/MozambiqueMap";
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
          {/* Cobertura nacional */}
          <div className="relative bg-hero-gradient text-white p-8 sm:p-12 lg:p-16 overflow-hidden min-h-[420px] grid sm:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur">
                Cobertura nacional
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold">
                Presentes em todo o Moçambique
              </h2>
              <p className="mt-4 text-white/85 max-w-md">
                De Maputo a Pemba, ligamos portos, ferrovias e indústrias com
                operações coordenadas e visibilidade total em cada etapa.
              </p>
              <a
                href="#services"
                className="mt-8 rounded-full bg-white text-brand-deep px-7 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:bg-brand-ice inline-flex items-center justify-center gap-2"
              >
                Ver os nossos serviços <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative h-full py-4 hidden sm:block">
              <MozambiqueMap />
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
              <p className="relative text-sm sm:text-base leading-relaxed text-white/95 text-left">
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
