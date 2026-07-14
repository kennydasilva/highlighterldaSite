export function Marquee() {
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
    <section className="py-8 border-y border-border bg-brand-soft-gradient text-white overflow-hidden">
      <div className="flex animate-marquee gap-12 whitespace-nowrap">
        {row.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-12 text-lg font-display font-medium"
          >
            <span>{t}</span>
            <span className="h-2 w-2 rounded-full bg-white/70" />
          </div>
        ))}
      </div>
    </section>
  );
}
