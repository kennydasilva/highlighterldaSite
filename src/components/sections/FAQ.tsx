import { useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

import { FAQS } from "@/data/faqs";
import highlighterLogo from "@/assets/imagens/logo/HIGHLIGHTER-LOGO.png";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 bg-brand-ice/40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-brand-deep uppercase tracking-wider mb-4">
                FAQ
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-brand">
                Perguntas Frequentes
              </h2>
              <p className="mt-4 text-muted-foreground text-justify">
                Informações importantes sobre as nossas operações logísticas,
                envio, entrega e segurança.
              </p>
            </div>
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <img
                src={highlighterLogo}
                alt="Highlighter Group"
                className="w-full max-w-md h-auto object-contain opacity-80 animate-float"
              />
            </div>
          </div>
          <div className="space-y-3">
            {FAQS.map(([q, a], i) => (
              <div
                key={i}
                className="rounded-3xl bg-white border border-border overflow-hidden hover:border-brand/30 transition-colors duration-300"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-brand-deep">{q}</span>
                  <span className="h-8 w-8 rounded-full bg-brand-ice flex items-center justify-center text-brand flex-shrink-0">
                    {open === i ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: open === i ? "auto" : 0,
                    opacity: open === i ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed text-justify">
                    {a}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
