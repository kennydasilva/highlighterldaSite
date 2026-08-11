import { useEffect, useMemo, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Images, X, ZoomIn } from "lucide-react";

import { FEATURED_PROJECT, OTHER_PROJECT_PHOTOS } from "@/data/gallery";
import { fadeUpStagger } from "@/lib/motion-variants";

const cardVariants = fadeUpStagger(0.06, 0.4);

const ALL_PHOTOS = [...FEATURED_PROJECT.photos, ...OTHER_PROJECT_PHOTOS];

// Padrão puramente visual (bento) para variar o tamanho dos blocos — não
// reflete qualquer ordem de importância das fotografias.
const OTHER_PHOTO_SPANS = [
  "col-span-2 row-span-2",
  "row-span-2",
  "",
  "",
  "col-span-2",
  "",
  "row-span-2",
  "",
  "col-span-2",
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex !== null ? ALL_PHOTOS[activeIndex] : null;

  const goTo = (delta: number) => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + delta + ALL_PHOTOS.length) % ALL_PHOTOS.length;
    });
  };

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(1);
      if (e.key === "ArrowLeft") goTo(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const featuredIndexOffset = 0;
  const otherIndexOffset = FEATURED_PROJECT.photos.length;

  return (
    <section
      id="galeria"
      className="py-24 lg:py-32 bg-brand-ice/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white uppercase tracking-wider"
            >
              <Images className="h-4 w-4" /> Galeria de Projectos
            </motion.div>
          </div>
        </div>

        {/* Projecto em destaque — texto copiado do portfólio (src/assets/scren) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 rounded-[2rem] overflow-hidden shadow-elevate bg-hero-gradient text-white"
        >
          <div className="relative p-8 sm:p-12 flex flex-col justify-center overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur w-fit">
                Projecto em Destaque
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold">
                {FEATURED_PROJECT.title}
              </h3>
              <p className="mt-4 text-white/85 leading-relaxed">
                {FEATURED_PROJECT.paragraph1}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {FEATURED_PROJECT.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-white/10 backdrop-blur px-4 py-4"
                  >
                    <div className="text-2xl sm:text-3xl font-bold font-display">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-white/70 leading-snug">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-white/70 leading-relaxed">
                {FEATURED_PROJECT.paragraph2}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 p-1.5 sm:p-2">
            {FEATURED_PROJECT.photos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActiveIndex(featuredIndexOffset + i)}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Outros projectos — apenas fotografias, sem descrições */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-brand text-center mb-8"
          >
            Outros Projectos
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense auto-rows-[150px] sm:auto-rows-[180px] lg:auto-rows-[210px] gap-3 sm:gap-4">
            {OTHER_PROJECT_PHOTOS.map((photo, i) => (
              <motion.button
                key={photo.src}
                type="button"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                onClick={() => setActiveIndex(otherIndexOffset + i)}
                className={`group relative overflow-hidden rounded-3xl border border-border bg-white shadow-soft-brand hover:shadow-elevate hover:border-brand/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer ${OTHER_PHOTO_SPANS[i % OTHER_PHOTO_SPANS.length]}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <DialogPrimitive.Root
        open={activeItem !== null}
        onOpenChange={(open) => !open && setActiveIndex(null)}
      >
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-brand-deep/95 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 sm:p-8 outline-none"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <DialogPrimitive.Title className="sr-only">
              {activeItem?.alt ?? "Galeria de projectos"}
            </DialogPrimitive.Title>
            <DialogPrimitive.Close className="absolute right-4 top-4 sm:right-6 sm:top-6 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 cursor-pointer">
              <X className="h-5 w-5" />
              <span className="sr-only">Fechar</span>
            </DialogPrimitive.Close>

            {ALL_PHOTOS.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => goTo(-1)}
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 sm:p-3 text-white transition-colors hover:bg-white/20 cursor-pointer"
                >
                  <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">Anterior</span>
                </button>
                <button
                  type="button"
                  onClick={() => goTo(1)}
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 sm:p-3 text-white transition-colors hover:bg-white/20 cursor-pointer"
                >
                  <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">Seguinte</span>
                </button>
              </>
            )}

            <AnimatePresence mode="wait">
              {activeItem && (
                <motion.figure
                  key={activeItem.src}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="flex max-h-full max-w-full flex-col items-center"
                >
                  <img
                    src={activeItem.src}
                    alt={activeItem.alt}
                    className="max-h-[75vh] max-w-[90vw] rounded-2xl object-contain shadow-elevate"
                  />
                  {activeIndex !== null && (
                    <p className="mt-4 text-center text-sm text-white/50">
                      {activeIndex + 1} / {ALL_PHOTOS.length}
                    </p>
                  )}
                </motion.figure>
              )}
            </AnimatePresence>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </section>
  );
}
