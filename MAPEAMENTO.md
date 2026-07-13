# Mapeamento do Projeto — Highlighter Lda (Website)

> Gerado em 2026-07-13. Este documento é só análise/documentação — nenhum ficheiro de código foi alterado.
> Serve de referência para as próximas conversas sobre melhorias de design.

## Índice

1. [Estrutura geral do projeto](#1-estrutura-geral-do-projeto)
2. [Componentes](#2-componentes)
3. [Estilos e design tokens](#3-estilos-e-design-tokens)
4. [Animações](#4-animações)
5. [Responsividade](#5-responsividade)
6. [Performance e boas práticas](#6-performance-e-boas-práticas)
7. [SEO e acessibilidade básica](#7-seo-e-acessibilidade-básica)
8. [Conteúdo e copy](#8-conteúdo-e-copy)
9. [Resumo de oportunidades de melhoria](#9-resumo-de-oportunidades-de-melhoria)

---

## 1. Estrutura geral do projeto

### Árvore de ficheiros principais

```
WebsiteHighlighter/
├── AGENTS.md                      # aviso do Lovable sobre git history
├── components.json                # config shadcn/ui
├── eslint.config.js
├── prettierrc
├── vite.config.ts                 # usa @lovable.dev/vite-tanstack-config
├── tsconfig.json
├── .lovable/project.json          # template: tanstack_start_ts_2026-06-17
└── src/
    ├── assets/                    # 5 imagens JPEG (hero + serviços + about)
    ├── components/ui/             # 44 componentes shadcn/ui (ver secção 2)
    ├── hooks/use-mobile.tsx
    ├── lib/
    │   ├── utils.ts                    # helper `cn()` (clsx + tailwind-merge)
    │   ├── error-capture.ts            # captura erros SSR
    │   ├── error-page.ts               # página de erro estática (fallback)
    │   └── lovable-error-reporting.ts  # reporta erros ao Lovable
    ├── routes/
    │   ├── __root.tsx              # shell da app (html/head/body, error/404)
    │   ├── index.tsx               # ÚNICA página — landing page completa (1011 linhas)
    │   └── README.md
    ├── routeTree.gen.ts            # gerado automaticamente, não editar
    ├── router.tsx
    ├── server.ts                   # entrada SSR + wrapper de erros
    ├── start.ts                    # middleware de erro do TanStack Start
    └── styles.css                  # Tailwind v4 + design tokens + animações CSS
```

Nota: este diretório ainda **não é um repositório git** (não existe pasta `.git`), apesar de haver ficheiros `AGENTS.md`/`.lovable` que assumem sincronização com o Lovable.

### Stack e versões (`package.json`)

| Categoria         | Tecnologia                                                | Versão                                                                   |
| ----------------- | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| Framework         | React                                                     | 19.2.0                                                                   |
| Meta-framework    | TanStack Start (SSR)                                      | 1.167.50                                                                 |
| Router            | TanStack Router (file-based)                              | 1.168.25                                                                 |
| Build tool        | Vite                                                      | 8.0.16                                                                   |
| Estilos           | Tailwind CSS                                              | 4.2.1 (via `@tailwindcss/vite`, config em CSS, sem `tailwind.config.js`) |
| Componentes UI    | shadcn/ui (estilo "new-york") + Radix UI                  | várias                                                                   |
| Animação          | Framer Motion                                             | 12.41.0                                                                  |
| Ícones            | lucide-react                                              | 0.575.0                                                                  |
| Data/formulários  | react-hook-form, zod, date-fns                            | —                                                                        |
| Gestor de pacotes | Bun (há `bun.lock`) e npm (`package-lock.json`) coexistem | —                                                                        |

Esta não é uma stack Vite+React "clássica" — é **TanStack Start**, que faz SSR (server-side rendering) com um servidor Nitro por baixo. Isto é relevante porque muda como se pensa em SEO (o HTML já vem pronto do servidor, o que é bom) e em rotas (ficheiro = rota).

### Rotas / páginas existentes

O router é `@tanstack/react-router` com **file-based routing**. Atualmente existe **apenas uma rota**:

| Ficheiro                | URL           | Conteúdo                                                                                                                       |
| ----------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `src/routes/__root.tsx` | (layout raiz) | `<html>`, `<head>`, tratamento de erro e 404                                                                                   |
| `src/routes/index.tsx`  | `/`           | Landing page completa em single-page (todas as secções por âncora: `#top`, `#services`, `#about`, `#diferenciais`, `#contact`) |

Não há páginas secundárias (ex.: `/sobre`, `/contactos`, `/blog`) — tudo é navegação por scroll/âncora dentro da mesma página.

---

## 2. Componentes

### Componente principal: `src/routes/index.tsx`

Este ficheiro tem **1011 linhas** e contém **toda** a landing page, dividida em subcomponentes definidos no mesmo ficheiro (não exportados, não reutilizados fora dele):

| Componente                        | Função                                                        | Usado em                      |
| --------------------------------- | ------------------------------------------------------------- | ----------------------------- |
| `Counter`                         | Anima um número a subir até um valor quando entra no viewport | Hero, Stats                   |
| `Tilt`                            | Efeito 3D de inclinação ao mover o rato sobre um elemento     | Hero (imagem), About (imagem) |
| `Index`                           | Componente de página — junta todas as secções                 | rota `/`                      |
| `Nav`                             | Cabeçalho fixo, com estado "scrolled" e menu mobile           | topo da página                |
| `Hero`                            | Secção de abertura com título, CTA, stats e imagem 3D         | topo                          |
| `Marquee`                         | Faixa de texto a deslizar infinitamente                       | logo abaixo do Hero           |
| `Services` (+ `SERVICES` array)   | Grelha de 6 cards de serviços                                 | `#services`                   |
| `Stats`                           | 4 contadores animados em fundo com gradiente                  | após Services                 |
| `About` (+ dados inline)          | Imagem + missão/visão/valores + barras de progresso           | `#about`                      |
| `Differentials` (+ `DIFFS` array) | Grelha de 6 diferenciais                                      | `#diferenciais`               |
| `Tracking`                        | Bloco de "rastreio" com formulário e mapa SVG animado         | após Differentials            |
| `Testimonial`                     | Citação de um colaborador                                     | após Tracking                 |
| `FAQ` (+ `FAQS` array)            | Acordeão de perguntas frequentes                              | antes do CTA                  |
| `CTA`                             | Bloco final de chamada para ação com telefone/email           | `#contact`                    |
| `Footer`                          | Rodapé com links, contactos e redes sociais                   | fim da página                 |

**Achado importante:** este ficheiro faz o trabalho de ~14 componentes num único ficheiro monolítico. Não há duplicação de lógica visível, mas o ficheiro é claramente candidato a ser dividido — cada secção (`Hero`, `Services`, `About`, etc.) podia viver em `src/components/sections/`, com os dados (`SERVICES`, `DIFFS`, `FAQS`) em ficheiros próprios. Isto facilitaria editar copy/imagens sem mexer em 1000 linhas de JSX.

### Design system / componentes de UI reutilizáveis

Existe a pasta `src/components/ui/` com **44 componentes shadcn/ui** (accordion, button, card, dialog, form, input, select, sidebar, table, tabs, tooltip, etc.) — o "kit" standard do template shadcn/Lovable, com Radix UI por baixo e `class-variance-authority` para variantes.

**Achado importante:** confirmei por grep que **nenhum destes 44 componentes é importado ou usado** em `src/routes/index.tsx` (nem em nenhum outro ficheiro do projeto). A landing page inteira foi escrita à mão com `<div>`, `<a>`, `<button>` e classes Tailwind diretas, ignorando por completo o design system disponível.

Isto não é um problema de performance (ficheiros não importados não entram no bundle), mas é uma inconsistência de manutenção: há um design system pronto (botões, inputs, cards com variantes) e a página não o usa — por exemplo, o botão "Rastrear" e o input de rastreio em `Tracking()` reinventam estilos que já existem em `components/ui/button.tsx` e `components/ui/input.tsx`.

### Componentes não usados / candidatos a limpeza

- 44 ficheiros em `components/ui/` sem qualquer uso atual.
- `src/hooks/use-mobile.tsx` (`useIsMobile`) também não é chamado em lado nenhum de `index.tsx` — a deteção de mobile na Nav é feita à mão com `window.addEventListener("scroll", ...)`, não com este hook.

Não há componentes duplicados (mesma coisa implementada duas vezes) — o problema é antes um design system pronto e não aproveitado.

---

## 3. Estilos e design tokens

### Sistema de estilos

**Tailwind CSS v4**, configurado inteiramente em `src/styles.css` via `@theme inline` — **não existe** `tailwind.config.js/ts` (normal na v4). `components.json` confirma o setup shadcn (`baseColor: slate`, `cssVariables: true`, estilo `new-york`).

### Paleta de cores (definida em `:root`, formato `oklch`)

| Token                           | Valor                                   | Uso                                             |
| ------------------------------- | --------------------------------------- | ----------------------------------------------- |
| `--brand-deep`                  | `oklch(0.28 0.13 255)` — azul-marinho   | texto de destaque, fundos escuros (footer, CTA) |
| `--brand`                       | `oklch(0.55 0.21 255)` — azul elétrico  | cor primária, ícones, botões                    |
| `--brand-glow`                  | `oklch(0.72 0.18 240)` — azul-céu       | gradientes, detalhes                            |
| `--brand-ice`                   | `oklch(0.96 0.02 240)` — branco-azulado | fundos suaves, badges                           |
| `--background` / `--foreground` | branco puro / quase-preto azulado       | base do site                                    |
| `--muted-foreground`            | cinza-azulado médio                     | texto secundário                                |
| `--border`                      | cinza-azulado muito claro               | bordas                                          |
| `--destructive`                 | vermelho                                | (definido mas não usado na página atual)        |

Também há 3 gradientes (`--gradient-hero`, `--gradient-soft`, `--gradient-card`) e 3 sombras nomeadas (`--shadow-elevate`, `--shadow-glow`, `--shadow-soft`), todos derivados da mesma paleta `oklch`.

**Avaliação:** a paleta é coerente e usa uma técnica moderna e boa (`oklch`), com poucas cores base e derivações consistentes — não há sinais de cores hardcoded "soltas" fora do sistema (não encontrei nenhum `#hex` ou `rgb()` a marcar cor de marca fora de `styles.css`).

### Tipografia

- `--font-display`: **Space Grotesk** (títulos, `h1`–`h5`) — carregada via Google Fonts `<link>` no `head()` de `index.tsx`.
- `--font-body`: **Inter** (texto corrido) — mesma origem.

**Achado:** o `<link>` do Google Fonts está definido **apenas na rota `/`** (dentro do `head()` de `index.tsx`), não no `__root.tsx`. Como só há uma página isto não causa problema agora, mas se no futuro forem criadas mais rotas, cada uma teria de repetir este `<link>`, ou as fontes não carregam. Fica como nota para quando a estrutura crescer.

### Espaçamentos e breakpoints

Não há espaçamentos customizados — usa a escala default do Tailwind. Breakpoints também são os defaults do Tailwind v4 (`sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px), usados de forma consistente ao longo do `index.tsx` (ver secção 5).

### Inconsistências encontradas

- 4 utilities CSS estão **definidas mas nunca usadas** em nenhum componente: `animate-float`, `animate-shimmer`, `glass-dark`, `tilt-3d` (`src/styles.css:132-189`). São código morto — não fazem mal, mas também não ajudam; podem ser removidas ou aproveitadas.
- Fora isso, o uso de cor/tipografia é consistente — todas as secções usam os mesmos tokens de marca.

---

## 4. Animações

Toda a animação vem de duas fontes: **Framer Motion** (interações/entrada) e **keyframes CSS customizados** em `styles.css` (loops contínuos).

### Bibliotecas instaladas

- `framer-motion` 12.41.0 — usado extensivamente (10 usos de `whileInView`, 12 usos de `animate={{...}}` só em `index.tsx`).
- Não há GSAP, AOS ou Lottie no projeto.

### Catálogo de animações Framer Motion (por secção)

| Secção/Componente                           | Tipo                            | Trigger                         | Detalhe                                                                                  |
| ------------------------------------------- | ------------------------------- | ------------------------------- | ---------------------------------------------------------------------------------------- |
| `Nav` (menu mobile)                         | fade + slide-down               | on click (abrir menu)           | `opacity 0→1`, `y -10→0`                                                                 |
| `Hero` — badge "13+ anos"                   | fade + slide-up                 | on load                         | `duration 0.6`                                                                           |
| `Hero` — título `h1`                        | fade + slide-up                 | on load, delay 0.1              | `duration 0.7`                                                                           |
| `Hero` — parágrafo                          | fade + slide-up                 | on load, delay 0.25             | `duration 0.6`                                                                           |
| `Hero` — CTAs                               | fade + slide-up                 | on load, delay 0.4              | `duration 0.6`                                                                           |
| `Hero` — stats (13+/100+/50+)               | fade                            | on load, delay 0.6              | —                                                                                        |
| `Hero` — imagem principal                   | fade + scale                    | on load, delay 0.2              | `scale 0.9→1`                                                                            |
| `Hero` — card flutuante "Segurança"         | float loop                      | contínuo                        | `y: [0,-12,0]`, 5s, `easeInOut`, infinito                                                |
| `Hero` — card flutuante "Entregas no prazo" | float loop + barra de progresso | contínuo / on load              | `y: [0,12,0]` 6s delay 1s; barra `width 0→98%` em 1.5s                                   |
| `Hero` — card "Rede SADC"                   | float loop (x+y)                | contínuo                        | 7s `easeInOut`                                                                           |
| `Hero` — anéis decorativos                  | rotação                         | contínuo                        | `animate-spin-slow` 30s, um em sentido inverso                                           |
| `Hero` — blobs de fundo                     | movimento orgânico              | contínuo                        | `animate-blob` 18s, um com delay 4s                                                      |
| `Hero` — indicador "live" (bolinha verde)   | pulso expansivo                 | contínuo                        | `animate-pulse-ring` 2.4s                                                                |
| `Marquee`                                   | scroll horizontal infinito      | contínuo                        | `animate-marquee` 35s linear                                                             |
| `Services` — cards                          | fade + slide-up, staggered      | on scroll (`whileInView`, once) | delay `i * 0.08`, `duration 0.5`; hover: `-translate-y-2`, imagem `scale-110`            |
| `Stats` — badge de secção                   | fade + slide-up                 | on scroll                       | —                                                                                        |
| `Stats` — contadores                        | fade + slide-up, staggered      | on scroll (once)                | delay `i * 0.1`; número anima via `Counter` (JS `requestAnimationFrame`)                 |
| `About` — imagem                            | fade + slide da esquerda        | on scroll (once)                | `x -40→0`, `duration 0.7`                                                                |
| `About` — card flutuante "+13"              | float loop                      | contínuo                        | `y: [0,-10,0]`, 5s                                                                       |
| `About` — barras de progresso (skills)      | largura animada                 | on scroll (once)                | `width 0→X%`, `duration 1.2`, `easeOut`                                                  |
| `Differentials` — cards                     | fade + slide-up, staggered      | on scroll (once)                | delay `i * 0.08`; hover: ícone `scale-110`, card `-translate-y-1`                        |
| `Tracking` — blob de fundo                  | movimento orgânico              | contínuo                        | `animate-blob`                                                                           |
| `Tracking` — linha de rota SVG              | desenho de traçado              | on scroll (once)                | `pathLength 0→1`, `duration 2.5`                                                         |
| `Tracking` — pontos no "mapa"               | pulso expansivo                 | contínuo                        | `animate-pulse-ring` (CSS)                                                               |
| `Testimonial`                               | fade + slide-up                 | on scroll (once)                | —                                                                                        |
| `FAQ` — item aberto                         | expand/collapse (acordeão)      | on click                        | `height 0→auto`, `opacity 0→1` (sem `duration` explícita — usa default do Framer Motion) |
| `CTA` — botões                              | scale on hover                  | on hover                        | `hover:scale-105` (CSS puro, não Framer)                                                 |

### Padrão geral

- **Easing**: quase tudo usa `easeInOut` (loops) ou o easing default do Framer Motion (entradas). `About` usa `easeOut` explicitamente nas barras de progresso.
- **Duração**: entradas 0.5–0.8s; loops contínuos 2.4–35s.
- **Trigger dominante**: `whileInView` com `viewport={{ once: true }}` — ou seja, a maioria das animações de entrada só acontece **uma vez**, ao entrar no ecrã (boa prática, evita repetição irritante ao fazer scroll para cima e para baixo).
- **Stagger** (atraso escalonado entre itens de uma grelha) é usado de forma consistente em `Services`, `Stats` e `Differentials`, sempre com a fórmula `delay: i * 0.08` ou `i * 0.1` — este padrão está repetido manualmente 3 vezes em vez de centralizado num `variants` do Framer Motion partilhado. É a principal animação "repetida que podia ser centralizada".

### Animações CSS definidas mas não usadas

`animate-float`, `animate-shimmer` e a classe `.tilt-3d` (ver secção 3) — ficam disponíveis no CSS mas nenhum elemento lhes chama.

---

## 5. Responsividade

### Breakpoints usados

O `index.tsx` usa consistentemente `sm:`, `md:`, `lg:` do Tailwind (defaults: 640/768/1024px). Não encontrei uso de `xl:` ou `2xl:` em lado nenhum — os layouts "assentam" a partir do `lg` (1024px) e não têm um refinamento extra para ecrãs muito grandes (ex. >1536px), mas isto raramente é um problema visível dado que os containers usam `container mx-auto` com padding lateral.

### Secções e o seu comportamento responsivo

| Secção                       | Mobile (< md)                                                                   | Desktop (≥ lg)                |
| ---------------------------- | ------------------------------------------------------------------------------- | ----------------------------- |
| `Nav`                        | menu hamburguer (`lg:hidden`), CTA "Solicitar Cotação" escondido em `<sm`       | menu horizontal completo      |
| `Hero`                       | 1 coluna (texto em cima, imagem em baixo — `grid lg:grid-cols-12`)              | 2 colunas (6+6)               |
| `Services` / `Differentials` | 1 coluna → 2 colunas (`md:grid-cols-2`)                                         | 3 colunas (`lg:grid-cols-3`)  |
| `Stats`                      | 2 colunas (`grid-cols-2`)                                                       | 4 colunas (`lg:grid-cols-4`)  |
| `About`                      | 1 coluna, imagem em cima                                                        | 2 colunas lado a lado         |
| `Tracking`                   | mapa SVG animado **escondido** (`hidden md:block`) — só formulário fica visível | mapa + formulário lado a lado |
| `FAQ`                        | 1 coluna (texto + perguntas empilhados)                                         | 2 colunas                     |

**Avaliação geral:** a responsividade está bem pensada e é consistente — todas as grelhas principais têm pelo menos 2 breakpoints definidos, e a Nav trata corretamente o colapso para mobile. Não encontrei secções obviamente "esquecidas" no mobile.

**Pontos a validar visualmente** (não são erros óbvios de código, mas vale testar no browser):

- `Hero`: no ecrã entre `sm` e `lg`, a grelha de 12 colunas ainda está em 1 coluna (só quebra em `lg`) — em tablets (768–1023px) o hero pode ficar com a imagem grande antes do texto, o que vale a pena confirmar visualmente.
- Os cards flutuantes sobre a imagem do Hero (`absolute top-6 left-6`, etc.) usam posições fixas em `px` — em ecrãs muito estreitos (< 375px) podem sobrepor-se ao conteúdo da imagem.

---

## 6. Performance e boas práticas

### Build

`npx vite build` corre **sem erros**, gerando cliente + servidor SSR (Nitro) com sucesso. Bundle principal do cliente:

| Ficheiro                           | Tamanho  | Gzip     |
| ---------------------------------- | -------- | -------- |
| `index-*.js` (bundle JS principal) | 344.5 kB | 108.4 kB |
| `routes-*.js`                      | 162.3 kB | 50.8 kB  |
| `styles-*.css`                     | 88.3 kB  | 14.8 kB  |

Não há nada anormal aqui para uma página só, com Framer Motion + TanStack Router + React 19 — mas dá para reduzir cortando dependências não usadas do bundle final se algum dia entrarem em uso acidental (recharts, react-hook-form, embla-carousel, etc. estão instaladas mas não usadas no momento — não pesam no bundle porque não são importadas, mas pesam em `node_modules`/tempo de install).

### Imagens

| Ficheiro                | Tamanho    | Dimensões |
| ----------------------- | ---------- | --------- |
| `hero-port.jpg`         | **464 KB** | 1920×1280 |
| `service-port.jpg`      | 204 KB     | 1280×960  |
| `service-stevedore.jpg` | 152 KB     | 1280×960  |
| `about-control.jpg`     | 120 KB     | 1280×960  |
| `service-rail.jpg`      | 100 KB     | 1280×960  |

**Achados:**

- Todas as imagens são `.jpg` — nenhuma em formato moderno (WebP/AVIF), que tipicamente reduziria 30-50% do peso sem perda visível de qualidade.
- A imagem do Hero (a mais pesada, 464 KB) carrega **sem `loading="lazy"`** — o que está correto, já que é a imagem acima da dobra (above the fold) e deve carregar prioritariamente. Mas o peso dela ainda é alto para uma imagem crítica de LCP (Largest Contentful Paint).
- As 4 imagens de serviços/about **já usam `loading="lazy"`** corretamente (`src/routes/index.tsx:510`, `595`).
- Não há `srcset`/tamanhos responsivos — todas as imagens servem a mesma resolução a mobile e desktop, mesmo quando exibidas muito mais pequenas em ecrãs pequenos.
- Nota: o array `SERVICES` reutiliza a mesma imagem (`serviceRail`, `serviceStevedore`, `servicePort`) em 2 serviços diferentes cada uma (6 serviços, só 3 imagens distintas) — não é um erro técnico, mas é uma repetição visual que vale a pena resolver com mais fotos.

### Imports e dependências

- `npx eslint .` corre sem erros de lógica — os **678 erros** reportados são **100% de formatação** (regra `prettier/prettier`, corrigível com `npx prettier --write .`), não bugs.
- Restam **6 warnings** `react-refresh/only-export-components`, todos nos ficheiros `components/ui/*.tsx` — é o padrão esperado do shadcn/ui (ficheiros que exportam componente + variantes/helpers) e não indica um problema real.
- `@typescript-eslint/no-unused-vars` está **desligado** no `eslint.config.js` — ou seja, variáveis não usadas não seriam sinalizadas automaticamente pelo lint atual.

### Lazy loading de componentes

Não há `React.lazy()` / `Suspense` nem `import()` dinâmico em lado nenhum — como é uma única página, isto não é grave, mas se no futuro crescerem mais rotas, vale a pena introduzir code-splitting por rota (o TanStack Router já suporta isto nativamente por ficheiro).

---

## 7. SEO e acessibilidade básica

### Meta tags

- `__root.tsx` define meta tags **genéricas do template Lovable**: `title: "Lovable App"`, `description: "Lovable Generated Project"`, `author: "Lovable"`, `og:title/og:description` iguais, e `twitter:site: "@Lovable"`. Estas não foram personalizadas para a Highlighter.
- `index.tsx` **sobrepõe** título e descrição corretamente para a rota `/` (`"Highlighter Lda | Logística, Excelência e Segurança"` + descrição em português), então na prática a homepage tem o meta certo.
- **Falta**: `og:image`, `og:url`, `twitter:card` com imagem, e um `canonical` — importante para partilhas em redes sociais (WhatsApp, LinkedIn, Facebook, que são os canais mencionados no footer) mostrarem uma pré-visualização com imagem.
- O meta genérico "Lovable App"/"Lovable" só apareceria hoje em páginas de erro/404 (que herdam apenas o `__root.tsx`), mas vale corrigir por precaução caso surjam mais rotas.

### `lang` do HTML

`src/routes/__root.tsx:112` define `<html lang="en">`, mas **todo o conteúdo do site está em português** (pt-MZ, dado o contexto moçambicano). Isto é um problema real de acessibilidade e SEO: leitores de ecrã vão pronunciar o texto com regras fonéticas inglesas, e motores de busca podem classificar mal o idioma da página. Devia ser `lang="pt"` ou `lang="pt-MZ"`.

### Favicon

**Não existe favicon** no projeto — não há pasta `public/` nem qualquer ficheiro `favicon.*`, nem um `<link rel="icon">` no `__root.tsx`. O separador do browser fica com o ícone default.

### Alt text em imagens

Todas as `<img>` têm `alt` preenchido:

- Hero: `alt="Porto industrial"`
- Serviços: `alt={s.title}` (dinâmico, descritivo)
- About: `alt="Centro de controlo logístico"`

Isto está bem feito.

### Hierarquia de headings

- Um único `<h1>` na página (no Hero) — correto.
- `<h2>` usado consistentemente para os títulos de cada secção (Services, About, Differentials, Tracking, FAQ, CTA).
- `<h3>` usado dentro dos cards de serviços e no footer ("Serviços", "Empresa", "Contactos" usam `<h4>`, na verdade — o footer salta de nada direto a `<h4>` sem `<h3>` antes, o que tecnicamente quebra a ordem estrita de hierarquia, mas é um caso menor e comum em footers).

### Formulários e labels

O formulário de "Rastreio" (`Tracking`, `src/routes/index.tsx:742-753`) tem um `<input>` **sem `<label>` associada** — depende só do `placeholder` como indicação, o que é uma falha de acessibilidade (utilizadores de leitor de ecrã não sabem o que o campo pede se o placeholder desaparecer ao focar, e o placeholder não é lido da mesma forma que uma label em todos os leitores). Além disso, o botão "Rastrear" é `type="button"` sem `onClick` — ou seja, **não tem funcionalidade real** neste momento; é um placeholder visual.

### Contraste

Não corri uma auditoria automática de contraste (ex. axe/Lighthouse), mas visualmente a combinação branco-sobre-azul-marinho (`--brand-deep`) e azul-marinho-sobre-branco usada nos textos principais tem contraste alto — o ponto a validar seria o texto `text-white/70` e `text-white/60` usado no footer sobre fundo `--brand-deep`, que reduz a opacidade e pode ficar abaixo do rácio AA (4.5:1) para texto pequeno. Vale confirmar com uma ferramenta (ex. Lighthouse ou o DevTools do Chrome) depois de testar no browser.

---

## 8. Conteúdo e copy

Toda a copy está em português (pt-MZ), focada num único público-alvo (clientes B2B de logística em Moçambique/SADC). Resumo por secção:

| Secção            | Copy principal                                                                                                                                                                                                                            |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nav**           | Logo "Highlighter", links: Início, Serviços, Sobre, Diferenciais, Contactos; CTA "Solicitar Cotação"                                                                                                                                      |
| **Hero**          | Badge "13+ anos movendo Moçambique e a SADC"; título "Logística que move o mundo com precisão."; subtítulo sobre operações ferroportuárias, estiva, minérios e mão-de-obra; CTAs "Solicitar Cotação" / "Ver Serviços"; stats 13+/100+/50+ |
| **Marquee**       | 7 frases-chave em loop: Segurança Operacional, Eficiência & Qualidade, Logística Integrada, Soluções Sustentáveis, Fornecimento Confiável, Conformidade & Segurança, Entrega no Prazo                                                     |
| **Services**      | 6 serviços: Transporte de Cargas & Minérios, Serviços Ferroportuários, Estiva & Gestão de Stock, Agribusiness, Mão-de-Obra Industrial, Reciclagem & Incineração — cada um com título + descrição de 1 frase                               |
| **Stats**         | 13+ Anos de Experiência, 100+ Projectos Executados, 50+ Profissionais, 100% Compromisso & Segurança                                                                                                                                       |
| **About**         | Texto institucional (13+ anos, operadora logística integrada); blocos de Missão/Visão/Valores; barras de "competência": Logística Integrada 95%, Operações Ferroportuárias 90%, Estiva & Gestão de Cargas 85%                             |
| **Differentials** | 6 diferenciais: Experiência Comprovada, Compromisso com Prazos, Transparência Operacional, Segurança & Conformidade, Soluções Integradas, Foco no Cliente                                                                                 |
| **Tracking**      | "Acompanhe a sua carga" + formulário de rastreio (não funcional, ver secção 7)                                                                                                                                                            |
| **Testimonial**   | Citação de Candido Azevedo, Operations Manager                                                                                                                                                                                            |
| **FAQ**           | 5 perguntas/respostas sobre serviços, como contratar, âmbito geográfico, segurança, acompanhamento                                                                                                                                        |
| **CTA final**     | "Pronto para enviar a sua carga para qualquer parte do mundo?" + telefone `+258 84 141 1118` + email `info@highlighter.co.mz`                                                                                                             |
| **Footer**        | Descrição institucional curta; links de Serviços/Empresa; contactos (telefone, email, morada "Av. União Africana Nº 3162, Matola, Moçambique"); ícones sociais (LinkedIn, Instagram, Facebook, WhatsApp)                                  |

**Achados sobre o conteúdo:**

- Os **ícones sociais no footer** (`Linkedin`, `Instagram`, `Facebook`, `MessageCircle`) apontam todos para `href="#"` — são placeholders, não têm URLs reais associados ainda.
- O **formulário de rastreio** é decorativo (sem lógica associada) — se não houver plano de o tornar funcional a curto prazo, vale considerar se deve continuar na página ou ser adiado.
- Não há página/secção de **Política de Privacidade** ou **Termos**, nem link para elas — relevante se o formulário de rastreio vier a recolher dados.
- Toda a copy é consistente em tom (institucional, direto) e não há secções em falta óbvias face ao que uma landing page de logística B2B normalmente cobre (serviços, sobre, prova social, FAQ, contacto) — o essencial está coberto.

---

## 9. Resumo de oportunidades de melhoria

Lista compacta, sem prioridade implícita — para discutirmos o plano de ação juntos:

1. `<html lang="en">` devia ser `lang="pt"`/`"pt-MZ"` — o conteúdo é todo em português.
2. Não existe favicon nem `public/` — falta um ícone de separador/PWA.
3. Meta tags genéricas do template Lovable ("Lovable App") ainda no `__root.tsx`, fora da rota `/`.
4. Falta `og:image` para pré-visualizações ao partilhar o link (WhatsApp, LinkedIn, etc.).
5. Imagens em `.jpg` sem formato moderno (WebP/AVIF) nem `srcset` — a do Hero (464 KB) é a mais pesada e crítica para LCP.
6. 6 serviços, mas só 3 imagens distintas repetidas — vale considerar fotos próprias por serviço.
7. Formulário de rastreio (`Tracking`) sem `<label>` no input e sem funcionalidade real (botão sem `onClick`).
8. Ícones sociais do footer apontam para `href="#"` (placeholders).
9. `index.tsx` com 1011 linhas e 14 subcomponentes — bom candidato a dividir em `src/components/sections/*`.
10. 44 componentes shadcn/ui em `components/ui/` completamente por usar — página escrita à mão por cima, gerando inconsistência entre "o que existe" e "o que é usado".
11. 4 utilities CSS mortas (`animate-float`, `animate-shimmer`, `glass-dark`, `.tilt-3d`).
12. Padrão de stagger do Framer Motion (`delay: i * 0.08`) repetido manualmente em 3 secções — podia ser centralizado num `variants` partilhado.
13. 678 erros de lint são só formatação (`npx prettier --write .` resolve tudo de uma vez, sem risco).
14. Contraste de `text-white/60` / `text-white/70` no footer vale confirmar com Lighthouse.
