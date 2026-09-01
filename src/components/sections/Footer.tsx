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
import { useLanguage } from "@/lib/i18n";

// TODO: adicionar URLs reais do Facebook e WhatsApp quando disponíveis.
const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/highlighter-lda/",
  },
  {
    name: "Instagram",
    Icon: Instagram,
    href: "https://www.instagram.com/highlightergroup",
  },
  { name: "Facebook", Icon: Facebook, href: "#" },
  { name: "WhatsApp", Icon: MessageCircle, href: "#" },
];

export function Footer() {
  const { t } = useLanguage();
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
              {t.footer.description}
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map(({ name, Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  {...(href !== "#" && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  aria-label={name}
                  className="h-10 w-10 rounded-full bg-white/10 hover:bg-white hover:text-brand-deep flex items-center justify-center transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">
              {t.footer.servicesTitle}
            </h4>

            <ul className="space-y-2 text-sm text-white/70">
              {t.footer.services.map((s) => (
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
            <h4 className="font-display font-bold mb-4">
              {t.footer.companyTitle}
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              {t.footer.companyLinks.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">
              {t.footer.contactsTitle}
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-white" />
                +258 84 141 1118
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-white" />
                comercial@highlighter.co.mz
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-white" />
                {t.footer.addressLine}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Highlighter Lda ·{" "}
          {t.footer.copyrightSuffix}
        </div>
      </div>
    </footer>
  );
}
