/**
 * Versão vetorial simplificada do monograma "H" da Highlighter (dois pilares
 * cruzados por uma faixa azul), usada onde o logo precisa de reagir a CSS
 * (hover na Nav) em vez do PNG estático.
 *
 * `light`: variante toda em branco/translúcido, para usar sobre fundos de cor
 * (ex: o rodapé, que passou a ter fundo azul sólido) — evita repetir a cor de
 * marca em cima dela própria, o que ficaria ilegível.
 */
export function BrandMark({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect
        x="28"
        y="14"
        width="16"
        height="72"
        rx="7"
        className={light ? "fill-white/60" : "fill-brand-gray"}
      />
      <rect
        x="56"
        y="14"
        width="16"
        height="72"
        rx="7"
        className={light ? "fill-white" : "fill-brand"}
      />
      <rect
        x="8"
        y="42"
        width="84"
        height="15"
        rx="7.5"
        className={`origin-left scale-x-[0.7] transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] [transform-box:fill-box] group-hover:scale-x-100 ${light ? "fill-white" : "fill-brand"}`}
      />
    </svg>
  );
}
