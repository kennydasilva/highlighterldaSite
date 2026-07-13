import { motion } from "framer-motion";

import { Counter } from "@/components/Counter";
import { fadeUpStagger } from "@/lib/motion-variants";

const statVariants = fadeUpStagger(0.1, 0.3);

export function Stats() {
  const stats = [
    { n: 13, s: "+", l: "Anos" },
    { n: 100, s: "+", l: "Projectos" },
    { n: 50, s: "+", l: "Especialistas" },
  ];
  return (
    <section className="py-20 relative overflow-hidden bg-brand text-white">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((st, i) => (
            <motion.div
              key={st.l}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={statVariants}
              className="text-center"
            >
              <div className="text-5xl sm:text-6xl font-bold font-display">
                <Counter to={st.n} suffix={st.s} />
              </div>
              <div className="mt-2 text-sm uppercase tracking-widest text-white/80">
                {st.l}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
