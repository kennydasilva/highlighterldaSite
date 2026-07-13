/**
 * Ícones próprios, desenhados à mão (monolinha, geométricos), para substituir
 * ícones genéricos de biblioteca nos badges flutuantes do Hero — mesmo
 * espírito gráfico do logo (linhas limpas, geometria simples).
 */
type IconProps = { className?: string };

export function HelmetIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 15a8 8 0 0 1 16 0" />
      <path d="M2.5 15h19" />
      <path d="M3.5 15v2.5a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V15" />
      <path d="M12 4v3" />
    </svg>
  );
}

export function TruckIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 7h11v9H2z" />
      <path d="M13 10h4l4 3v3h-8z" />
      <circle cx="6.5" cy="18.5" r="1.6" />
      <circle cx="17" cy="18.5" r="1.6" />
    </svg>
  );
}

export function RouteNetworkIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.5 17.5 11 7" />
      <path d="M13 7l5.5 10.5" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="12" cy="5" r="2" />
      <circle cx="19" cy="19" r="2" />
    </svg>
  );
}
