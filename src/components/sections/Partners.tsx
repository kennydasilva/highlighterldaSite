import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

import truckFreightEasy from "@/assets/logotipo/TRUCKFREIGTEASY.png";
import overview from "@/assets/logotipo/OVERVIEW.png";
import mozFertilizer from "@/assets/logotipo/MOZfERTILIZER.jpeg";
import grindrod from "@/assets/logotipo/GRINDROD.png";
import cvm from "@/assets/logotipo/CVM.jpeg";
import micd from "@/assets/logotipo/MICD.jpeg";
import cfm from "@/assets/logotipo/cfm.webp";
import zap from "@/assets/logotipo/ZAP.png";
import anda from "@/assets/logotipo/ANDA.png";
import bollore from "@/assets/logotipo/bOLLORE.png";
import transcargo from "@/assets/logotipo/transcargo.png";
import ht from "@/assets/logotipo/HT.png";
import texeiraDuarte from "@/assets/logotipo/texeira_duarte.png";
import emim from "@/assets/logotipo/EMIM.png";

const PARTNERS = [
  { name: "Truck Freight Easy", logo: truckFreightEasy },
  { name: "Overview", logo: overview },
  { name: "Moz Fertilizer", logo: mozFertilizer },
  { name: "Grindrod", logo: grindrod },
  { name: "CVM", logo: cvm },
  { name: "MICD", logo: micd },
  { name: "CFM", logo: cfm },
  { name: "ZAP", logo: zap },
  { name: "ANDA", logo: anda },
  { name: "Bolloré", logo: bollore },
  { name: "Transcargo", logo: transcargo },
  { name: "HT", logo: ht },
  { name: "Texeira Duarte", logo: texeiraDuarte },
  { name: "EMIM", logo: emim },
];

export function Partners() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current || !trackRef.current) return;
      const overflow =
        trackRef.current.scrollWidth - containerRef.current.clientWidth;
      setDistance(Math.max(overflow, 0));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white uppercase tracking-wider">
              <Handshake className="h-4 w-4" /> Parceiros
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-brand">
            Quem Confia em Nós
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos lado a lado com operadoras, portos e indústrias de
            referência em Moçambique e na SADC.
          </p>
        </div>

        <div ref={containerRef} className="overflow-hidden">
          <motion.div
            ref={trackRef}
            className="flex items-center gap-6 w-max"
            animate={distance > 0 ? { x: [0, -distance, 0] } : undefined}
            transition={{
              duration: Math.max(distance / 45, 8),
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="shrink-0 flex items-center justify-center h-20 w-40 lg:h-24 lg:w-48 rounded-3xl bg-white border border-border hover:border-brand/40 hover:shadow-elevate transition-all duration-300 hover:-translate-y-1 p-6"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
