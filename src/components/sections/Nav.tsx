import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

import highlighterLogo from "@/assets/imagens/logo/HIGHLIGHTER-LOGO.png";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    ["Início", "#top"],
    ["Serviços", "#services"],
    ["Sobre", "#about"],
    ["Diferenciais", "#diferenciais"],
    ["Contactos", "#contact"],
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between rounded-2xl transition-all duration-500 px-4 md:px-6 py-3 ${
            scrolled ? "glass shadow-soft-brand" : "bg-transparent"
          }`}
        >
          <a href="#top" className="group flex items-center">
            <img
              src={highlighterLogo}
              alt="Highlighter Group"
              className="h-10 w-auto transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {links.map(([l, h]) => (
              <a
                key={h}
                href={h}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-brand transition-colors relative group"
              >
                {l}
                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-hero-gradient text-white px-5 py-2.5 text-sm font-semibold shadow-glow-brand transition-all duration-300 hover:scale-105 hover:shadow-elevate"
            >
              Solicitar Cotação <ArrowRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full glass"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1"
          >
            {links.map(([l, h]) => (
              <a
                key={h}
                href={h}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg hover:bg-brand-ice text-sm font-medium"
              >
                {l}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
}
