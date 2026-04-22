"use client";

import { copy } from "@/lib/copy";

export default function Categories() {
  const { categories } = copy;

  const scrollToCta = (e) => {
    e.preventDefault();
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="w-full bg-[#FFF8EF] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#3FA56C]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#2E8A58]">
            {categories.kicker}
          </span>
          <h2 className="font-display mt-4 text-3xl font-black leading-tight text-[#2B1D12] sm:text-4xl md:text-5xl">
            {categories.headline}
          </h2>
        </div>

        <div className="mt-12 space-y-6">
          {categories.groups.map((g, i) => (
            <div
              key={i}
              className="lift rounded-3xl border border-[#E6D7C2] bg-white p-5 shadow-sm md:p-7"
            >
              <h3 className="font-display text-xl font-black text-[#C73B7A] md:text-2xl">
                {g.title}
              </h3>
              <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
                {g.items.map((it, j) => (
                  <div
                    key={j}
                    className="overflow-hidden rounded-2xl border border-[#F1E2CE] bg-[#FFF8EF]"
                  >
                    <img
                      src={it.src}
                      alt={it.alt}
                      className="aspect-square h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#final-cta-section"
            onClick={scrollToCta}
            className="cta-shimmer anim-pulse-ring inline-flex items-center justify-center rounded-2xl border-b-4 border-[#1f6d43] bg-[#3FA56C] px-10 py-5 text-base font-black uppercase tracking-wide text-white shadow-xl transition hover:translate-y-[-1px] hover:bg-[#2E8A58] sm:text-lg"
          >
            {categories.ctaLabel}
            <span className="ml-2 text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
