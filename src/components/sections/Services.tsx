import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

import { SERVICES } from "@/data/services";
import { fadeUpStagger } from "@/lib/motion-variants";

const cardVariants = fadeUpStagger(0.08, 0.5);

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white uppercase tracking-wider"
            >
              <Wrench className="h-4 w-4" /> Nossos Serviços
            </motion.div>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-brand"
          >
            Excelência em logística integrada
          </motion.h2>
          <p className="mt-4 text-muted-foreground">
            Do porto à última milha, oferecemos soluções completas em cada etapa
            da cadeia logística.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {SERVICES.map((s, i) => (
            <motion.a
              key={s.title}
              href="#contact"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="group relative flex flex-col sm:flex-row overflow-hidden rounded-3xl bg-service-card-gradient shadow-soft-brand transition-all duration-500 hover:-translate-y-2 hover:shadow-elevate xl:h-80"
            >
              <div className="relative h-56 sm:h-auto sm:w-2/5 overflow-hidden shrink-0">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="relative flex-1 p-6 sm:p-8 text-white">
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm text-white/85 leading-relaxed text-left">
                  {s.desc}
                </p>
                <span className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold backdrop-blur transition-colors group-hover:bg-white group-hover:text-brand-deep">
                  Saiba mais
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
