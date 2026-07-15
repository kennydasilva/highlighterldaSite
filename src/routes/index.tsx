import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Differentials } from "@/components/sections/Differentials";
import { TrackingTestimonial } from "@/components/sections/TrackingTestimonial";
import { Partners } from "@/components/sections/Partners";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Highlighter Lda | Logística, Excelência e Segurança" },
      {
        name: "description",
        content:
          "Empresa moçambicana com 13+ anos em logística integrada, operações ferroportuárias, estiva, fornecimento de minérios e mão-de-obra industrial.",
      },
      {
        property: "og:title",
        content: "Highlighter Lda | Logística, Excelência e Segurança",
      },
      {
        property: "og:description",
        content:
          "Logística integrada, operações ferroportuárias e fornecimento industrial em Moçambique e na SADC.",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <About />
      <Differentials />
      <TrackingTestimonial />
      <Partners />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
