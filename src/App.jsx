import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  GlobeIcon,
  GraduationCapIcon,
  HeartHandshakeIcon,
  LineChartIcon,
  MessageIcon,
  MenuIcon,
  ShieldIcon,
  SparklesIcon,
  StarIcon,
  SearchIcon,
} from './components/icons';
import {
  brandLogos,
  ctaHref,
  contactItems,
  footerLinks,
  highlights,
  heroPoints,
  navLinks,
  processSteps,
  services,
  stats,
  testimonials,
  whatsappHref,
} from './data/siteData';

const serviceIconMap = {
  briefcase: BriefcaseIcon,
  search: SearchIcon,
  arrow: ArrowRightIcon,
  graduation: GraduationCapIcon,
  heart: HeartHandshakeIcon,
  chart: LineChartIcon,
};

const contactIconMap = {
  message: MessageIcon,
  globe: GlobeIcon,
  shield: ShieldIcon,
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, amount: 0.2 },
};

function SectionHeading({ eyebrow, title, accent, description, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-green">
        <span className="h-px w-8 bg-brand-green/40" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-brand-wine sm:text-4xl">
        {title} <span className="text-brand-pink">{accent}</span>
      </h2>
      <p className="mt-5 text-base leading-8 text-brand-wine/70">{description}</p>
    </div>
  );
}

function PrimaryButton({ href, children, className = '', variant = 'solid', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-brand-pink/30';
  const styles =
    variant === 'solid'
      ? 'bg-brand-wine text-brand-cream shadow-card hover:bg-brand-wine-600'
      : 'border border-brand-wine/12 bg-white/75 text-brand-wine hover:border-brand-wine/25 hover:bg-white';

  return (
    <a href={href} className={`${base} ${styles} ${className}`} {...props}>
      {children}
      <ArrowRightIcon className="h-4 w-4" />
    </a>
  );
}

function Card({ children, className = '' }) {
  return (
    <motion.div
      {...fadeUp}
      className={`rounded-4xl border border-brand-wine/10 bg-white/80 shadow-card backdrop-blur-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="min-h-dvh bg-[radial-gradient(circle_at_top_right,_rgba(216,166,162,0.24),_transparent_30%),radial-gradient(circle_at_10%_18%,_rgba(93,103,82,0.12),_transparent_28%),linear-gradient(180deg,_#f7f2f0_0%,_#fffdf9_55%,_#f6f0f7_100%)] text-brand-wine antialiased">
      <header className="sticky top-0 z-50 border-b border-brand-wine/8 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <img src="/logo.nav.png" alt="HRL Consultoria" className="h-10 w-10 rounded-xl object-cover" />
            <div>
              <p className="font-display text-lg font-semibold leading-none">HRL Consultoria</p>
            </div>
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-brand-wine/70 transition hover:bg-brand-wine/5 hover:text-brand-wine"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappHref}
              className="hidden rounded-full border border-brand-wine/10 px-4 py-2 text-sm font-semibold text-brand-wine transition hover:bg-brand-wine/5 sm:inline-flex"
            >
              Falar agora
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-wine/10 bg-white text-brand-wine md:hidden"
              aria-label="Abrir menu"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24">
          <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_50%_0,_rgba(216,166,162,0.28),_transparent_60%)]" />
          <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
            <motion.div {...fadeUp} className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-wine/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-green shadow-sm backdrop-blur-sm">
                <SparklesIcon className="h-4 w-4" />
                Consultoria de RH com visão estratégica
              </p>

              <h1 className="mt-6 font-display text-[2.8rem] font-medium leading-[1.05] tracking-tight text-brand-wine sm:text-6xl lg:text-[4.5rem]">
                Pessoas, processos e crescimento em{' '}
                <span className="relative inline-block text-brand-pink">
                  equilíbrio.
                  <svg
                    className="absolute -bottom-2 left-0 h-3 w-full text-brand-pink/60"
                    viewBox="0 0 300 12"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path d="M2 9C60 3 240 3 298 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-brand-wine/70 sm:text-lg">
                A HRL apoia empresas e profissionais com uma consultoria humana, clara e orientada a resultado.
                Estruturamos processos, fortalecemos lideranças e ajudamos na tomada de decisão com mais segurança.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href={ctaHref}>Solicitar contato</PrimaryButton>
                <PrimaryButton href="#solucoes" variant="ghost">
                  Ver soluções
                </PrimaryButton>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-brand-wine/70">
                {heroPoints.map((point) => (
                  <span key={point} className="inline-flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-green" />
                    {point}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <Card key={stat.label} className="px-5 py-4">
                    <p className="font-display text-3xl font-semibold text-brand-wine">{stat.value}</p>
                    <p className="mt-1 text-sm leading-6 text-brand-wine/60">{stat.label}</p>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="absolute -left-10 top-8 h-48 w-48 rounded-full bg-brand-pink/25 blur-3xl" />
              <div className="absolute -bottom-8 right-0 h-56 w-56 rounded-full bg-brand-green/15 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/45 p-2.5 shadow-glow backdrop-blur-sm">
                <img
                  src="/founder-portrait.jpeg"
                  alt="Fundadora da HRL Consultoria"
                  className="h-[540px] w-full rounded-[1.5rem] object-cover object-top"
                />

                <motion.div
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="absolute left-5 top-5 flex items-center gap-2 rounded-2xl border border-white/70 bg-white/90 px-3.5 py-2.5 shadow-soft backdrop-blur-md"
                >
                  <div className="flex text-brand-pink">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon key={index} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-brand-wine">Atuação com confiança</span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="absolute -bottom-6 left-4 rounded-2xl border border-brand-wine/10 bg-brand-paper/95 px-5 py-4 shadow-soft backdrop-blur-md sm:left-8"
              >
                <p className="font-display text-3xl font-semibold text-brand-wine">5 etapas</p>
                <p className="text-xs font-medium text-brand-wine/60">do diagnóstico ao resultado</p>
              </motion.div>
            </motion.div>
          </div>

          <div className="border-y border-brand-wine/10 bg-white/40 py-5">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.24em] text-brand-wine/45">
              Marcas e contextos que a HRL atende
            </p>
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex w-max animate-marquee whitespace-nowrap">
                {[0, 1].map((row) => (
                  <ul key={row} className="flex shrink-0 items-center" aria-hidden={row === 1}>
                    {brandLogos.map((label, index) => (
                      <li
                        key={`${row}-${label}-${index}`}
                        className="flex items-center font-display text-lg font-medium tracking-tight text-brand-wine/45"
                      >
                        <span className="px-5">{label}</span>
                        <span className="text-brand-pink/40" aria-hidden="true">
                          ·
                        </span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="solucoes" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Soluções"
            title="Consultoria feita para"
            accent="empresas e pessoas."
            description="A HRL atua em frentes complementares da jornada de trabalho, liderança e carreira. Tudo com foco em clareza, acolhimento e resultado."
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-4xl border border-brand-wine/10 bg-brand-wine/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIconMap[service.icon];

              return (
                <Card key={service.title} className="group rounded-none border-0 bg-white p-8 transition hover:bg-brand-cream">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-pink/15 text-brand-wine transition group-hover:bg-brand-wine group-hover:text-brand-cream">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-medium text-brand-wine">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-wine/65">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="metodo" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Método"
            title="Um processo simples, claro e"
            accent="bem conduzido."
            description="Cada projeto segue uma sequência objetiva, com acompanhamento próximo e entregas pensadas para gerar confiança do começo ao fim."
          />

          <div className="mt-16 grid gap-5 lg:grid-cols-5">
            {processSteps.map((step) => (
              <Card key={step.step} className="relative p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-wine/12 bg-brand-paper font-display text-base font-semibold text-brand-wine shadow-card">
                  {step.step}
                </div>
                <h3 className="mt-5 font-display text-lg font-medium text-brand-wine">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-brand-wine/65">{step.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="sobre" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="flex flex-col items-start">
              <Card className="overflow-hidden p-3">
                <img
                  src="/founder-portrait.jpeg"
                  alt="Fundadora da HRL Consultoria"
                  className="h-[560px] w-full rounded-[1.5rem] object-cover object-top"
                />
              </Card>
              <div className="relative z-10 -mt-8 ml-6 rounded-2xl border border-brand-wine/10 bg-brand-paper/95 px-5 py-4 shadow-soft backdrop-blur-md sm:ml-8">
                <p className="font-display text-lg font-semibold text-brand-wine">Raquel</p>
                <p className="text-xs font-medium text-brand-wine/60">Fundadora e business partner</p>
              </div>
            </div>

            <motion.div {...fadeUp}>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-green">
                <span className="h-px w-8 bg-brand-green/40" aria-hidden="true" />
                Sobre a HRL
              </p>
              <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-brand-wine sm:text-4xl">
                Olhar técnico com <span className="text-brand-pink">escuta humana</span> e postura de parceria.
              </h2>
              <p className="mt-5 text-base leading-8 text-brand-wine/70">
                A HRL foi construída para atender demandas de RH e carreira sem burocracia desnecessária. A ideia é
                traduzir complexidade em direção, apoiar decisões importantes e manter a experiência das pessoas no
                centro do processo.
              </p>

              <div className="mt-8 grid gap-2.5 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-brand-wine/75">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <blockquote className="mt-8 rounded-4xl border border-brand-wine/10 bg-gradient-to-br from-brand-wine to-brand-wine-600 p-7 text-brand-cream shadow-card">
                <p className="font-display text-lg leading-relaxed">
                  Estratégia de gente boa não precisa ser fria. Ela precisa ser clara, consistente e orientada ao
                  resultado certo.
                </p>
              </blockquote>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <PrimaryButton href={ctaHref}>Falar com a HRL</PrimaryButton>
                <span className="inline-flex items-center gap-2 text-sm text-brand-wine/60">
                  <CheckCircleIcon className="h-4 w-4 text-brand-green" />
                  Atendimento remoto e presencial
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Depoimentos"
            title="Experiências que reforçam"
            accent="credibilidade."
            description="Os relatos abaixo representam o tipo de percepção que a HRL busca construir em cada projeto."
            center
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="flex flex-col p-8">
                <SparklesIcon className="h-8 w-8 text-brand-pink/40" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-base leading-8 text-brand-wine/80">{item.quote}</blockquote>
                <div className="mt-6 flex gap-1 text-brand-pink" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <div className="mt-4 border-t border-brand-wine/8 pt-4">
                  <p className="font-display text-lg font-medium text-brand-wine">{item.name}</p>
                  <p className="mt-0.5 text-sm text-brand-wine/60">{item.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="contato" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div {...fadeUp} className="rounded-4xl border border-brand-wine/10 bg-white/80 p-8 shadow-card">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-green">
                <span className="h-px w-8 bg-brand-green/40" aria-hidden="true" />
                Contato
              </p>
              <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-brand-wine sm:text-4xl">
                Vamos transformar necessidade em <span className="text-brand-pink">plano de ação.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-brand-wine/70">
                Se você precisa estruturar RH, contratar melhor ou conduzir uma transição de carreira com mais
                segurança, a HRL pode te acompanhar do diagnóstico à entrega final.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href={whatsappHref}>Enviar e-mail</PrimaryButton>
                <PrimaryButton href="#inicio" variant="ghost">
                  Voltar ao topo
                </PrimaryButton>
              </div>
            </motion.div>

            <div className="grid gap-4">
              {contactItems.map((item) => {
                const Icon = contactIconMap[item.icon];

                return (
                  <Card key={item.label} className="p-6">
                    <a href={item.href} className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-pink/15 text-brand-wine">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-green">{item.label}</p>
                        <p className="mt-2 font-display text-xl font-medium text-brand-wine">{item.value}</p>
                      </div>
                    </a>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-wine/10 bg-brand-wine px-4 py-10 text-brand-cream sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.offwhite.hrl.png" alt="HRL Consultoria" className="h-11 w-11 rounded-xl object-cover" />
            <div>
              <p className="font-display text-lg font-semibold leading-none">HRL Consultoria</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-brand-cream/80 transition hover:bg-white/5 hover:text-brand-cream"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
