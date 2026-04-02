import Image from "next/image";
import Link from "next/link";
import { weddingConfig } from "@/lib/wedding-config";

export default function Home() {
  const c = weddingConfig;

  return (
    <div className="bg-[#faf8f5] text-stone-800">
      {/* Hero */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
        <Image
          src={c.heroImage}
          alt="Fondo decorativo de la invitación"
          fill
          priority
          className="hero-bg-animate object-cover object-[center_22%] sm:object-center"
          sizes="100vw"
        />
        <div
          className="hero-overlay-animate absolute inset-0 bg-gradient-to-b from-stone-900/50 via-[#2a231c]/42 to-stone-900/55"
          aria-hidden
        />
        <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-white">
          <p className="hero-enter font-[family-name:var(--font-display)] text-4xl font-light tracking-[0.2em] text-[#f5f0ea] drop-shadow-sm sm:text-5xl md:text-6xl">
            {c.coupleNames}
          </p>
          <h1 className="hero-enter hero-enter-delay-1 font-[family-name:var(--font-display)] text-3xl font-normal tracking-[0.35em] text-[#faf6f1] drop-shadow-sm sm:text-4xl md:text-5xl">
            NOS CASAMOS
          </h1>
          <blockquote className="hero-enter hero-enter-delay-2 mt-4 max-w-xl border-t border-wedding-brown-light/45 pt-8 font-[family-name:var(--font-body)] text-base leading-relaxed text-white/95 sm:text-lg">
            <p className="italic">&ldquo;{c.verse.text}&rdquo;</p>
            <cite className="mt-3 block text-sm not-italic tracking-wide text-[#e8dfd4]">
              — {c.verse.reference}
            </cite>
          </blockquote>
        </div>
        <div
          className="hero-enter hero-enter-delay-4 absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-wedding-brown-light/90 motion-safe:animate-bounce"
          aria-hidden
        >
          <span className="block h-8 w-5 rounded-full border-2 border-current" />
        </div>
      </section>

      {/* Nuestra historia */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-normal tracking-[0.2em] text-stone-700 md:text-4xl">
            Nuestra historia
          </h2>
          <div
            className="mx-auto mt-4 h-px w-16 bg-wedding-brown-soft"
            aria-hidden
          />
        </div>
        <div className="mt-14 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-wedding-brown-light shadow-xl shadow-stone-200/80 ring-1 ring-wedding-brown-soft/30">
            <Image
              src={c.story.image}
              alt={c.story.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6 font-[family-name:var(--font-body)] text-lg leading-relaxed text-stone-600">
            {c.story.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="border-y border-wedding-brown-light/50 bg-[#f3efe8] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-[family-name:var(--font-display)] text-center text-2xl font-normal leading-snug tracking-wide text-stone-700 md:text-3xl">
            Queremos compartir este momento con vos
          </h2>
          <div
            className="mx-auto mt-4 h-px w-20 bg-wedding-brown-soft/80"
            aria-hidden
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <InfoCard title="Fecha" content={c.info.date} icon="calendar" />
            <InfoCard title="Lugar y hora" content={c.info.placeTime} icon="place" />
            <InfoCard
              title="Código de vestimenta"
              content={c.info.dressCode}
              icon="dress"
            />
          </div>
        </div>
      </section>

      {/* Regalos */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h2 className="font-[family-name:var(--font-display)] text-center text-3xl tracking-[0.15em] text-stone-700">
          Regalos 
        </h2>
        <div
          className="mx-auto mt-3 h-px w-14 bg-wedding-brown-soft"
          aria-hidden
        />
        <h2 className="font-[family-name:var(--font-display)] text-center text-2xl mt-8 tracking-[0.15em] text-stone-700">
           Nuestra luna de miel + Hogar
        </h2>
        <p className="mt-4 text-center font-[family-name:var(--font-body)] text-lg leading-relaxed text-stone-600">
          Tu presencia es nuestro regalo más importante. Pero si querés acompañarnos
          también con un detalle, estamos juntando fondos para nuestro comienzo
          juntos (preferentemente por transferencia).
        </p>
        <div className="mt-10 rounded-sm border border-wedding-brown-soft/70 bg-white p-8 shadow-md shadow-stone-100/80 ring-1 ring-wedding-brown-light/40">
          <p className="font-[family-name:var(--font-display)] text-xl text-wedding-brown-muted">
            Datos para transferencia
          </p>
          <dl className="mt-6 space-y-3 font-[family-name:var(--font-body)] text-stone-600">
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
              <dt className="shrink-0 font-medium text-wedding-brown-muted">Banco</dt>
              <dd>{c.gifts.bankName}</dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
              <dt className="shrink-0 font-medium text-wedding-brown-muted">Titular</dt>
              <dd>{c.gifts.holder}</dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
              <dt className="shrink-0 font-medium text-wedding-brown-muted">CBU</dt>
              <dd className="font-mono text-sm tracking-wide sm:text-base">
                {c.gifts.cbu}
              </dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
              <dt className="shrink-0 font-medium text-wedding-brown-muted">Alias</dt>
              <dd className="font-mono">{c.gifts.alias}</dd>
            </div>
          </dl>
          {c.gifts.note ? (
            <p className="mt-6 border-t border-wedding-brown-light pt-6 text-sm text-stone-500">
              {c.gifts.note}
            </p>
          ) : null}
        </div>
      </section>

      {/* Confirmar asistencia */}
      <section className="bg-[#f3efe8] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-[0.12em] text-stone-700">
            Confirmar asistencia
          </h2>
          <div
            className="mx-auto mt-3 h-px w-14 bg-wedding-brown-soft"
            aria-hidden
          />
          <p className="mt-4 font-[family-name:var(--font-body)] text-stone-600">
            Nos encantaría saber si podés venir. Completá el formulario con tu
            confirmación.
          </p>
          <div className="mt-10 rounded-sm border border-wedding-brown-soft/70 bg-white p-10 shadow-md shadow-stone-100/80 ring-1 ring-wedding-brown-light/40">
            <Link
              href={c.rsvpFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-sm bg-wedding-brown px-8 font-[family-name:var(--font-body)] text-sm font-medium uppercase tracking-[0.2em] text-[#faf8f5] shadow-sm transition hover:bg-wedding-brown-muted"
            >
              Ir al formulario
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-wedding-brown-light py-10 text-center font-[family-name:var(--font-body)] text-sm text-stone-500">
        {c.coupleNames}{" "}
        <span className="text-wedding-brown-muted">·</span> Con amor
      </footer>
    </div>
  );
}

function InfoCard({
  title,
  content,
  icon,
}: {
  title: string;
  content: string;
  icon: "calendar" | "place" | "dress";
}) {
  return (
    <article className="flex flex-col items-center rounded-sm border border-wedding-brown-soft/60 bg-white p-8 text-center shadow-sm ring-1 ring-wedding-brown-light/35">
      <span
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-wedding-brown-light text-wedding-brown-muted"
        aria-hidden
      >
        {icon === "calendar" && (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        )}
        {icon === "place" && (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
        {icon === "dress" && (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        )}
      </span>
      <h3 className="font-[family-name:var(--font-display)] text-xl text-stone-700">
        {title}
      </h3>
      <p className="mt-3 font-[family-name:var(--font-body)] text-stone-600">
        {content}
      </p>
    </article>
  );
}
