import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import highlighterLogo from "@/assets/imagens/logo/HIGHLIGHTER-LOGO.png";

export function Footer() {
  return (
    <footer className="bg-brand-soft-gradient text-white pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <h3 className="mb-4">
              {/* filtro para branco sólido: o logo original é azul/cinza e
                  ficaria pouco legível em cima do novo fundo azul do rodapé */}
              <img
                src={highlighterLogo}
                alt="Highlighter Group"
                className="h-10 w-auto brightness-0 invert"
              />
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Empresa moçambicana com mais de 13 anos em logística integrada e
              inteligente.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Instagram, Facebook, MessageCircle].map((Ic, i) => (
                <a
                  key={i}
                  // TODO: adicionar URLs reais das redes sociais
                  href="#"
                  className="h-10 w-10 rounded-xl bg-white/10 hover:bg-white hover:text-brand-deep flex items-center justify-center transition-colors"
                >
                  <Ic className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Serviços</h4>
            {/* CONFIRMAR COM MARKETING: "Agribusiness" está listado aqui na
                captura da marketing, mas não existe como card na secção de
                Serviços (que só tem os 5 cards mostrados na marketing).
                Mantive o link a apontar para #services, sem card próprio. */}
            <ul className="space-y-2 text-sm text-white/70">
              {[
                "Operações Portuárias",
                "Estiva",
                "Agribusiness",
                "Logística Integrada",
                "Ferroportuário",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#top" className="hover:text-white">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contactos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Contactos</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-white" />
                +258 84 141 1118
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-white" />
                info@highlighter.co.mz
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-white" />
                Rua 24 de Julho, Q 25, Nº131, Cidade da Matola
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Highlighter Lda · Logística, Excelência e
          Segurança
        </div>
      </div>
    </footer>
  );
}
