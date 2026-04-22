"use client";

import { copy } from "@/lib/copy";

export default function MoreRecipesCta() {
  const { moreRecipesCta } = copy;

  const scrollToCta = (e) => {
    e.preventDefault();
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full bg-[#FFF8EF] py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#E6D7C2] bg-gradient-to-br from-[#FFEFD9] via-white to-[#FFEFF3] p-10 shadow-xl md:p-14">
          <div aria-hidden className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[#E8538C]/15 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-[#3FA56C]/15 blur-3xl" />

          <div className="relative">
            <p className="text-lg font-semibold uppercase tracking-[0.3em] text-[#6B4A35] md:text-xl">
              {moreRecipesCta.pretitle}
            </p>
            <p className="font-display mt-2 text-7xl font-black text-[#C73B7A] drop-shadow-sm md:text-8xl">
              {moreRecipesCta.big}
            </p>
            <p className="font-display mt-2 text-2xl font-black text-[#2B1D12] md:text-3xl">
              {moreRecipesCta.post}
            </p>

            <a
              href="#final-cta-section"
              onClick={scrollToCta}
              className="cta-shimmer anim-pulse-ring mt-8 inline-flex items-center justify-center rounded-2xl border-b-4 border-[#1f6d43] bg-[#3FA56C] px-10 py-5 text-base font-black uppercase tracking-wide text-white shadow-xl transition hover:translate-y-[-1px] hover:bg-[#2E8A58] sm:text-lg"
            >
              {moreRecipesCta.ctaLabel}
              <span className="ml-2 text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
