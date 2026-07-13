import { motion } from "framer-motion";
import { ArrowRight, Wrench } from "lucide-react";

import { SERVICES } from "@/data/services";
import { fadeUpStagger } from "@/lib/motion-variants";

const cardVariants = fadeUpStagger(0.08, 0.5);

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-ice px-4 py-1.5 text-xs font-semibold text-brand-deep uppercase tracking-wider mb-4"
          >
            <Wrench className="h-3.5 w-3.5" /> Nossos Serviços
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold tracking-tight"
          >
            Excelência em{" "}
            <span className="text-gradient-brand">logística integrada</span>
          </motion.h2>
          <p className="mt-4 text-muted-foreground">
            Do porto à última milha, oferecemos soluções completas em cada etapa
            da cadeia logística.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.a
              key={s.title}
              href="#contact"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="group relative rounded-3xl overflow-hidden bg-white border border-border shadow-soft-brand hover:shadow-elevate transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-brand-deep/20 to-transparent" />
                <div className="absolute top-4 left-4 h-12 w-12 rounded-2xl bg-white/95 backdrop-blur flex items-center justify-center shadow-glow-brand">
                  <s.icon className="h-6 w-6 text-brand" />
                </div>
                <div className="absolute top-4 right-4 text-white/70 text-sm font-mono">
                  0{i + 1}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-deep group-hover:text-brand transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Saiba mais
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
