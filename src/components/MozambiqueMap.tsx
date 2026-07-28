import { motion } from "framer-motion";

import { MOZ_HUBS, MOZ_MAP_PATH, MOZ_MAP_VIEWBOX } from "@/data/mozambiqueMap";

// Rota que liga os principais hubs operacionais (Maputo → Beira → Tete → Nacala → Pemba)
const ROUTE = MOZ_HUBS.map((h) => `${h.left},${h.top}`).join(" L ");

export function MozambiqueMap() {
  return (
    <div className="relative mx-auto aspect-[10.63/16.38] h-full max-h-[360px]">
      <svg
        viewBox={MOZ_MAP_VIEWBOX}
        className="h-full w-full drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="mozFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.28)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
          </linearGradient>
        </defs>
        <motion.path
          d={MOZ_MAP_PATH}
          fill="url(#mozFill)"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth={0.04}
          strokeLinejoin="round"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
        />
      </svg>

      {/* Rotas animadas entre hubs */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-80"
        aria-hidden="true"
      >
        <motion.path
          d={`M ${ROUTE}`}
          fill="none"
          stroke="white"
          strokeWidth={0.5}
          strokeDasharray="2 2.5"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 0.4, ease: "easeInOut" }}
        />
      </svg>

      {/* Marcadores dos hubs */}
      {MOZ_HUBS.map((hub, i) => (
        <motion.div
          key={hub.name}
          className={`absolute flex items-center gap-2 ${hub.left > 60 ? "flex-row-reverse" : ""}`}
          style={{
            left: `${hub.left}%`,
            top: `${hub.top}%`,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 + i * 0.15 }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-white animate-pulse-ring" />
            <span className="relative block h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
          </span>
          <span className="whitespace-nowrap rounded-full bg-black/20 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm">
            {hub.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
