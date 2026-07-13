/**
 * Versão vetorial simplificada do monograma "H" da Highlighter (dois pilares
 * cruzados por uma faixa azul), usada onde o logo precisa de reagir a CSS
 * (hover na Nav) em vez do PNG estático.
 */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect
        x="28"
        y="14"
        width="16"
        height="72"
        rx="7"
        className="fill-brand-gray"
      />
      <rect
        x="56"
        y="14"
        width="16"
        height="72"
        rx="7"
        className="fill-brand"
      />
      <rect
        x="8"
        y="42"
        width="84"
        height="15"
        rx="7.5"
        className="fill-brand origin-left scale-x-[0.7] transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] [transform-box:fill-box] group-hover:scale-x-100"
      />
    </svg>
  );
}
