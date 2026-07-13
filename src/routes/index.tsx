import { createFileRoute } from "@tanstack/react-router";
import { motion, useMotionValue, useTransform, useSpring, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Anchor,
  Train,
  Ship,
  Boxes,
  Sprout,
  Leaf,
  Wrench,
  HardHat,
  ShieldCheck,
  Clock,
  Eye,
  Network,
  Handshake,
  Award,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
  Menu,
  X,
  Plus,
  Minus,
  Quote,
} from "lucide-react";

import heroPort from "@/assets/hero-port.jpg";
import serviceRail from "@/assets/service-rail.jpg";
import serviceStevedore from "@/assets/service-stevedore.jpg";
import servicePort from "@/assets/service-port.jpg";
import aboutControl from "@/assets/about-control.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Highlighter Lda | Logística, Excelência e Segurança" },
      {
        name: "description",
        content:
          "Empresa moçambicana com 13+ anos em logística integrada, operações ferroportuárias, estiva, fornecimento de minérios e mão-de-obra industrial.",
      },
      { property: "og:title", content: "Highlighter Lda | Logística, Excelência e Segurança" },
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

/* -------------------- Helpers -------------------- */

function Counter({ to, suffix = "+", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / (duration * 1000), 1);
      setValue(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to, duration]);
  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-50, 50], [-8, 8]), { stiffness: 200, damping: 20 });
  return (
    <motion.div
      ref={ref}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set(e.clientX - r.left - r.width / 2);
        y.set(e.clientY - r.top - r.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* -------------------- Page -------------------- */

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
      <Tracking />
      <Testimonial />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

/* -------------------- Nav -------------------- */

function Nav() {
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
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-hero-gradient text-white shadow-glow-brand">
              <Anchor className="h-5 w-5" />
              <span className="absolute inset-0 rounded-xl border border-white/30" />
            </span>
            <span className="text-brand-deep">
              High<span className="text-brand">lighter</span>
            </span>
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
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-hero-gradient text-white px-5 py-2.5 text-sm font-semibold shadow-glow-brand hover:shadow-elevate transition-shadow"
            >
              Solicitar Cotação <ArrowRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-xl glass"
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

/* -------------------- Hero -------------------- */

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-brand/20 blur-3xl animate-blob" />
      <div className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-brand-glow/30 blur-3xl animate-blob [animation-delay:4s]" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-brand-deep mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              13+ anos movendo Moçambique e a SADC
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              Logística que <br />
              <span className="text-gradient-brand">move o mundo</span> <br />
              com precisão.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl"
            >
              Soluções integradas em operações ferroportuárias, estiva, fornecimento de minérios e
              mão-de-obra industrial — com segurança, eficiência e visão global.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-hero-gradient text-white px-7 py-4 font-semibold shadow-glow-brand hover:shadow-elevate transition-all"
              >
                Solicitar Cotação
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-deep/15 px-7 py-4 font-semibold text-brand-deep hover:bg-brand-ice transition-colors"
              >
                Ver Serviços
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 grid grid-cols-3 gap-4 max-w-md"
            >
              {[
                ["13+", "Anos"],
                ["100+", "Projectos"],
                ["50+", "Especialistas"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="text-3xl font-bold text-brand-deep">{n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* 3D Visual */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Tilt className="relative rounded-3xl overflow-hidden shadow-elevate aspect-[4/5] sm:aspect-[5/6]">
                <img
                  src={heroPort}
                  alt="Porto industrial"
                  className="w-full h-full object-cover"
                  width={1920}
                  height={1280}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-deep/70 via-brand-deep/20 to-transparent" />

                {/* Floating cards */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-6 left-6 glass rounded-2xl p-4 shadow-soft-brand"
                  style={{ transform: "translateZ(60px)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-hero-gradient text-white flex items-center justify-center">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Segurança</div>
                      <div className="font-bold text-brand-deep">100%</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-6 right-6 glass rounded-2xl p-4 shadow-soft-brand"
                  style={{ transform: "translateZ(80px)" }}
                >
                  <div className="text-xs text-muted-foreground">Entregas no prazo</div>
                  <div className="text-2xl font-bold text-brand-deep">
                    <Counter to={98} suffix="%" duration={2} />
                  </div>
                  <div className="mt-2 h-1.5 w-32 bg-brand-ice rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "98%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-hero-gradient"
                    />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-32 left-6 glass rounded-2xl px-4 py-3 shadow-soft-brand"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-brand-deep">
                    <Network className="h-4 w-4 text-brand" />
                    Rede SADC activa
                  </div>
                </motion.div>
              </Tilt>

              {/* Rotating ring decoration */}
              <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full border-2 border-dashed border-brand/30 animate-spin-slow pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full border-2 border-dashed border-brand-glow/40 animate-spin-slow [animation-direction:reverse] pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Marquee -------------------- */

function Marquee() {
  const items = [
    "Segurança Operacional",
    "Eficiência & Qualidade",
    "Logística Integrada",
    "Soluções Sustentáveis",
    "Fornecimento Confiável",
    "Conformidade & Segurança",
    "Entrega no Prazo",
  ];
  const row = [...items, ...items];
  return (
    <section className="py-8 border-y border-border bg-brand-deep text-white overflow-hidden">
      <div className="flex animate-marquee gap-12 whitespace-nowrap">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-12 text-lg font-display font-medium">
            <span>{t}</span>
            <span className="h-2 w-2 rounded-full bg-brand-glow" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- Services -------------------- */

const SERVICES = [
  {
    icon: Train,
    title: "Transporte de Cargas & Minérios",
    desc: "Transporte seguro e eficiente de cargas gerais e minérios, com foco na pontualidade e controlo operacional.",
    img: serviceRail,
  },
  {
    icon: Ship,
    title: "Serviços Ferroportuários",
    desc: "Operações portuárias e ferroviárias com elevados padrões de segurança e cumprimento rigoroso de prazos.",
    img: servicePort,
  },
  {
    icon: Boxes,
    title: "Estiva & Gestão de Stock",
    desc: "Soluções eficazes de estiva e gestão de stock com foco em segurança e optimização logística.",
    img: serviceStevedore,
  },
  {
    icon: Sprout,
    title: "Agribusiness",
    desc: "Apoio logístico e operacional ao sector agrícola, incluindo transporte de produtos agrícolas.",
    img: serviceRail,
  },
  {
    icon: HardHat,
    title: "Mão-de-Obra Industrial",
    desc: "Fornecimento de mão-de-obra qualificada e experiente para aplicações industriais em diversos sectores.",
    img: serviceStevedore,
  },
  {
    icon: Leaf,
    title: "Reciclagem & Incineração",
    desc: "Soluções ambientalmente responsáveis para tratamento, reciclagem e incineração de resíduos industriais.",
    img: servicePort,
  },
];

function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-ice px-4 py-1.5 text-xs font-semibold text-brand-deep uppercase tracking-wider mb-4"
          >
            <Wrench className="h-3.5 w-3.5" /> Nossos Serviços
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold tracking-tight"
          >
            Excelência em <span className="text-gradient-brand">logística integrada</span>
          </motion.h2>
          <p className="mt-4 text-muted-foreground">
            Do porto à última milha, oferecemos soluções completas em cada etapa da cadeia logística.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.a
              key={s.title}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative rounded-3xl overflow-hidden bg-white border border-border shadow-soft-brand hover:shadow-elevate transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-brand-deep/20 to-transparent" />
                <div className="absolute top-4 left-4 h-12 w-12 rounded-2xl bg-white/95 backdrop-blur flex items-center justify-center shadow-glow-brand">
                  <s.icon className="h-6 w-6 text-brand" />
                </div>
                <div className="absolute top-4 right-4 text-white/70 text-sm font-mono">
                  0{i + 1}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-deep group-hover:text-brand transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Saiba mais
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Stats -------------------- */

function Stats() {
  const stats = [
    { n: 13, s: "+", l: "Anos de Experiência" },
    { n: 100, s: "+", l: "Projectos Executados" },
    { n: 50, s: "+", l: "Profissionais" },
    { n: 100, s: "%", l: "Compromisso & Segurança" },
  ];
  return (
    <section className="py-20 relative overflow-hidden bg-hero-gradient text-white">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((st, i) => (
            <motion.div
              key={st.l}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl sm:text-6xl font-bold font-display">
                <Counter to={st.n} suffix={st.s} />
              </div>
              <div className="mt-2 text-sm uppercase tracking-widest text-white/80">{st.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- About -------------------- */

function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <Tilt className="relative rounded-3xl overflow-hidden shadow-elevate">
              <img
                src={aboutControl}
                alt="Centro de controlo logístico"
                loading="lazy"
                width={1280}
                height={960}
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/60 to-transparent" />
            </Tilt>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-4 sm:right-8 bg-white rounded-2xl p-6 shadow-elevate w-64"
            >
              <div className="text-5xl font-bold text-gradient-brand">+13</div>
              <div className="text-sm text-muted-foreground mt-1">
                Anos a entregar logística inteligente em Moçambique e SADC
              </div>
            </motion.div>
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-2xl bg-brand-ice border border-brand/20 -z-10" />
          </motion.div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-ice px-4 py-1.5 text-xs font-semibold text-brand-deep uppercase tracking-wider mb-4">
              <Award className="h-3.5 w-3.5" /> Sobre Nós
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Parceiro estratégico em <span className="text-gradient-brand">operações industriais</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Somos uma empresa moçambicana com mais de 13 anos no mercado, actuando como
              operadora logística integrada e inteligente em diversos sectores — do porto ao
              terreno, com competência técnica, segurança e compromisso.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                ["Missão", "Garantir os objectivos do cliente com eficácia e eficiência."],
                ["Visão", "Liderar o mercado nacional e da SADC criando valor sustentável."],
                ["Valores", "A pessoa em primeiro lugar — colaboradores, clientes e parceiros."],
              ].map(([t, d]) => (
                <div
                  key={t}
                  className="rounded-2xl border border-border bg-white p-5 hover:border-brand/40 hover:shadow-soft-brand transition-all"
                >
                  <div className="text-sm font-bold text-brand">{t}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{d}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              {[
                ["Logística Integrada", 95],
                ["Operações Ferroportuárias", 90],
                ["Estiva & Gestão de Cargas", 85],
              ].map(([l, v]) => (
                <div key={l as string}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-semibold text-brand-deep">{l}</span>
                    <span className="text-muted-foreground">{v}%</span>
                  </div>
                  <div className="h-2 bg-brand-ice rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${v}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-hero-gradient"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Differentials -------------------- */

const DIFFS = [
  { icon: Award, title: "Experiência Comprovada", desc: "Mais de 13 anos de actuação no sector logístico." },
  { icon: Clock, title: "Compromisso com Prazos", desc: "Rotas optimizadas e tecnologia de rastreio para pontualidade." },
  { icon: Eye, title: "Transparência Operacional", desc: "Comunicação clara e visibilidade total da operação." },
  { icon: ShieldCheck, title: "Segurança & Conformidade", desc: "Elevados padrões reduzindo riscos e garantindo integridade." },
  { icon: Network, title: "Soluções Integradas", desc: "Transporte, ferroportuário, estiva, stock e fornecimento." },
  { icon: Handshake, title: "Foco no Cliente", desc: "Parcerias duradouras baseadas em proximidade e confiança." },
];

function Differentials() {
  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-brand-ice/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-brand-deep uppercase tracking-wider mb-4">
            Nossos Diferenciais
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Compromisso com <span className="text-gradient-brand">excelência e resultados</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFS.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-3xl bg-white p-8 border border-border hover:border-brand/40 hover:shadow-elevate transition-all hover:-translate-y-1"
            >
              <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-hero-gradient text-white shadow-glow-brand mb-5 group-hover:scale-110 transition-transform">
                <d.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-deep">{d.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Tracking -------------------- */

function Tracking() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="relative rounded-[2rem] overflow-hidden bg-hero-gradient text-white p-8 sm:p-12 lg:p-16 shadow-elevate">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-blob" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur">
                Rastreio em tempo real
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold">Acompanhe a sua carga</h2>
              <p className="mt-4 text-white/85 max-w-md">
                Da recolha à entrega final, com actualizações, segurança e transparência total.
              </p>
              <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg">
                <input
                  type="text"
                  placeholder="Número de encomenda..."
                  className="flex-1 rounded-xl bg-white/15 border border-white/25 px-5 py-4 text-white placeholder:text-white/60 backdrop-blur focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <button
                  type="button"
                  className="rounded-xl bg-white text-brand-deep px-7 py-4 font-semibold hover:bg-brand-ice transition-colors inline-flex items-center justify-center gap-2"
                >
                  Rastrear <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Animated world map dots */}
            <div className="relative h-64 lg:h-80 hidden md:block">
              <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full opacity-70">
                {Array.from({ length: 40 }).map((_, i) => {
                  const cx = (i * 37) % 400;
                  const cy = (i * 53) % 300;
                  return (
                    <circle key={i} cx={cx} cy={cy} r="1.5" fill="white" opacity={0.6} />
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
                  style={{ left: p.l, top: p.t, transform: "translate(-50%, -50%)" }}
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

/* -------------------- Testimonial -------------------- */

function Testimonial() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative rounded-3xl border border-border bg-white p-8 sm:p-12 shadow-soft-brand"
        >
          <Quote className="absolute -top-6 left-8 h-12 w-12 text-brand bg-white rounded-xl p-2 shadow-glow-brand" />
          <p className="text-xl sm:text-2xl font-display leading-relaxed text-brand-deep">
            "Como Gestor de Operações, é uma honra contribuir diariamente para o crescimento e
            excelência desta organização. O sucesso constrói-se com visão, trabalho e pessoas
            comprometidas — e na Highlighter, temos exactamente isso."
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-hero-gradient text-white flex items-center justify-center font-bold text-lg shadow-glow-brand">
              CA
            </div>
            <div>
              <div className="font-bold text-brand-deep">Candido Azevedo</div>
              <div className="text-sm text-muted-foreground">Operations Manager</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- FAQ -------------------- */

const FAQS = [
  ["Quais serviços a Highlighter oferece?", "Actuamos em transporte de cargas gerais e minérios, serviços ferroportuários, estiva, gestão de stock, fornecimento de carvão mineral, aluguer de equipamentos e mão-de-obra especializada."],
  ["Como posso solicitar um serviço?", "Pode entrar em contacto pelo formulário, telefone ou e-mail. Após análise da necessidade, apresentamos proposta adequada à operação."],
  ["A empresa opera apenas a nível nacional?", "Actuamos principalmente em território nacional, com capacidade de apoio a operações regionais na SADC conforme o projecto."],
  ["Como é garantida a segurança das cargas?", "Adoptamos procedimentos rigorosos de segurança, controlo logístico e supervisão constante em todas as fases."],
  ["É possível acompanhar a operação?", "Sim. Mantemos comunicação contínua com o cliente e actualizações conforme a necessidade da operação."],
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 bg-brand-ice/40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-brand-deep uppercase tracking-wider mb-4">
              FAQ
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Perguntas <span className="text-gradient-brand">Frequentes</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Informações importantes sobre as nossas operações logísticas, envio, entrega e
              segurança.
            </p>
          </div>
          <div className="space-y-3">
            {FAQS.map(([q, a], i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-border overflow-hidden hover:border-brand/30 transition-colors"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-brand-deep">{q}</span>
                  <span className="h-8 w-8 rounded-full bg-brand-ice flex items-center justify-center text-brand flex-shrink-0">
                    {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- CTA -------------------- */

function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative rounded-[2rem] overflow-hidden bg-brand-deep text-white p-10 sm:p-16 text-center shadow-elevate">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-brand/40 blur-3xl" />
          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Pronto para enviar a sua carga para{" "}
              <span className="text-gradient-brand">qualquer parte do mundo?</span>
            </h2>
            <p className="mt-6 text-white/80 text-lg">
              Fale com a nossa equipa e receba uma proposta adaptada à sua operação.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+258841411118"
                className="inline-flex items-center gap-3 rounded-xl bg-white text-brand-deep px-8 py-4 font-semibold hover:scale-105 transition-transform shadow-elevate"
              >
                <Phone className="h-5 w-5" /> +258 84 141 1118
              </a>
              <a
                href="mailto:info@highlighter.co.mz"
                className="inline-flex items-center gap-3 rounded-xl border-2 border-white/30 px-8 py-4 font-semibold hover:bg-white/10 transition-colors"
              >
                <Mail className="h-5 w-5" /> Solicitar Cotação
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Footer -------------------- */

function Footer() {
  return (
    <footer className="bg-brand-deep text-white pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 font-display font-bold text-xl mb-4">
              <span className="h-10 w-10 rounded-xl bg-white text-brand flex items-center justify-center">
                <Anchor className="h-5 w-5" />
              </span>
              Highlighter
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Empresa moçambicana com mais de 13 anos em logística integrada e inteligente.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Instagram, Facebook, MessageCircle].map((Ic, i) => (
                <a
                  key={i}
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
            <ul className="space-y-2 text-sm text-white/70">
              {["Operações Portuárias", "Estiva", "Agribusiness", "Logística Integrada", "Ferroportuário"].map(
                (s) => (
                  <li key={s}>
                    <a href="#services" className="hover:text-white transition-colors">
                      {s}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#top" className="hover:text-white">Início</a></li>
              <li><a href="#about" className="hover:text-white">Sobre Nós</a></li>
              <li><a href="#services" className="hover:text-white">Serviços</a></li>
              <li><a href="#contact" className="hover:text-white">Contactos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Contactos</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-brand-glow" />
                +258 84 141 1118
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-brand-glow" />
                info@highlighter.co.mz
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-brand-glow" />
                Av. União Africana Nº 3162, Matola, Moçambique
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Highlighter Lda · Logística, Excelência e Segurança
        </div>
      </div>
    </footer>
  );
}
