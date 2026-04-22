"use client";

import { copy } from "@/lib/copy";

export default function Hero() {
  const { hero } = copy;

  const scrollToCta = (e) => {
    e.preventDefault();
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFF8EF] via-[#FFEFF3] to-[#FFF8EF]">
      <div className="relative w-full bg-gradient-to-r from-[#E8538C] via-[#C73B7A] to-[#E8538C] anim-gradient text-white text-center text-[13px] sm:text-sm font-bold tracking-wide py-2.5 px-3 shadow-md">
        <span className="inline-block">{hero.urgencyBar}</span>
      </div>

      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#E8538C]/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-32 -right-20 h-96 w-96 rounded-full bg-[#3FA56C]/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[1.05fr_1fr] md:gap-14 md:px-8 md:py-20 lg:py-24">
        <div className="relative reveal-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E8538C]/30 bg-[#E8538C]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#C73B7A]">
            ⚡ {hero.badge}
          </span>

          <h1 className="font-display mt-5 text-4xl font-black leading-[1.05] text-[#2B1D12] sm:text-5xl md:text-6xl lg:text-[60px]">
            {hero.headline.before}
            <span className="relative inline-block">
              <span className="relative z-10 italic text-[#C73B7A]">
                {hero.headline.accent}
              </span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 z-0 h-3 rounded-full bg-[#FFD86E]/70 md:h-4"
              />
            </span>
            {hero.headline.after}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4B3A2E] sm:text-lg">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {hero.trustChips.map((chip, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-[#E6D7C2] bg-white/80 px-3.5 py-2 text-xs font-semibold text-[#2B1D12] shadow-sm backdrop-blur sm:text-sm"
              >
                <span className="text-base">{chip.icon}</span>
                {chip.text}
              </span>
            ))}
          </div>

          <a
            href="#final-cta-section"
            onClick={scrollToCta}
            className="cta-shimmer anim-pulse-ring mt-8 inline-flex w-full items-center justify-center rounded-2xl border-b-4 border-[#1f6d43] bg-[#3FA56C] px-6 py-5 text-base font-extrabold uppercase tracking-wide text-white shadow-xl transition hover:translate-y-[-1px] hover:bg-[#2E8A58] sm:w-auto sm:px-10 sm:text-lg"
          >
            {hero.ctaLabel}
            <span className="ml-2 text-xl">→</span>
          </a>

          <div className="mt-5 flex items-center gap-2 text-sm text-[#6B4A35]">
            <span className="flex" aria-label={hero.starsAriaLabel}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-[#FFB23F]">★</span>
              ))}
            </span>
            <span className="font-semibold">{hero.starsRating}</span>
            <span>· {hero.socialProof}</span>
          </div>
        </div>

        <div className="relative reveal-up" style={{ animationDelay: "0.1s" }}>
          <div className="relative mx-auto max-w-[520px]">
            <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#E8538C]/20 via-white to-[#3FA56C]/20 blur-2xl" />
            <div className="relative flex items-center justify-center">
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                className="h-auto w-full max-w-[460px] object-contain anim-float-slow drop-shadow-2xl"
              />
            </div>
            <div className="absolute -left-3 top-6 rotate-[-6deg] rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-[#E6D7C2] sm:-left-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{hero.floatingBadges.speed.icon}</span>
                <div className="text-left leading-tight">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#6B4A35]">
                    {hero.floatingBadges.speed.top}
                  </div>
                  <div className="text-lg font-black text-[#2B1D12]">{hero.floatingBadges.speed.bottom}</div>
                </div>
              </div>
            </div>
            <div className="absolute -right-3 bottom-8 rotate-[5deg] rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-[#E6D7C2] sm:-right-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{hero.floatingBadges.discount.icon}</span>
                <div className="text-left leading-tight">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#6B4A35]">
                    {hero.floatingBadges.discount.top}
                  </div>
                  <div className="text-lg font-black text-[#E8538C]">{hero.floatingBadges.discount.bottom}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
