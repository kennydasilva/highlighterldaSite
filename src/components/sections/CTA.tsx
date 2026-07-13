import { Mail, Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative rounded-[2rem] overflow-hidden bg-brand text-white p-10 sm:p-16 text-center shadow-elevate">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Pronto para enviar a sua carga para{" "}
              <span className="text-brand-deep">qualquer parte do mundo?</span>
            </h2>
            <p className="mt-6 text-white/80 text-lg">
              Fale com a nossa equipa e receba uma proposta adaptada à sua
              operação.
            </p>
            {/* CONFIRMAR COM MARKETING: este número (+258 87 000 0000) parece um
                placeholder — o número real usado em todo o resto do site (Footer
                incluído) é +258 84 141 1118. Implementei literalmente o que está
                na imagem da marketing. */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+258870000000"
                className="inline-flex items-center gap-3 rounded-full bg-white text-brand-deep px-8 py-4 font-semibold shadow-elevate transition-all hover:scale-105"
              >
                <Phone className="h-5 w-5" /> +258 87 000 0000
              </a>
              <a
                href="mailto:info@highlighter.co.mz"
                className="inline-flex items-center gap-3 rounded-full border-2 border-white/30 px-8 py-4 font-semibold transition-all hover:scale-105 hover:bg-white/10"
              >
                <Mail className="h-5 w-5" /> Solicitar cotação
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
