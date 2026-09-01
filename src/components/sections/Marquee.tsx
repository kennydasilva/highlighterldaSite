import { useLanguage } from "@/lib/i18n";

export function Marquee() {
  const { t } = useLanguage();
  const row = [...t.marquee.items, ...t.marquee.items];
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
