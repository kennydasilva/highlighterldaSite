import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Tracking() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="relative rounded-[2rem] overflow-hidden bg-hero-gradient text-white p-8 sm:p-12 lg:p-16 shadow-elevate">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
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
                  className="rounded-full bg-white text-brand-deep px-7 py-4 font-semibold transition-all hover:scale-105 hover:bg-brand-ice inline-flex items-center justify-center gap-2"
                >
                  Rastrear <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Animated world map dots */}
            <div className="relative h-64 lg:h-80 hidden md:block">
              <svg
                viewBox="0 0 400 300"
                className="absolute inset-0 w-full h-full opacity-70"
              >
                {Array.from({ length: 40 }).map((_, i) => {
                  const cx = (i * 37) % 400;
                  const cy = (i * 53) % 300;
                  return (
                    <circle
                      key={i}
                      cx={cx}
                      cy={cy}
                      r="1.5"
                      fill="white"
                      opacity={0.6}
                    />
                  );
                })}
                <motion.path
                  d="M 50 200 Q 150 50 250 150 T 380 100"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="6 6"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5 }}
                />
              </svg>
              {[
                { l: "20%", t: "65%" },
                { l: "60%", t: "45%" },
                { l: "92%", t: "30%" },
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
      </div>
    </section>
  );
}
