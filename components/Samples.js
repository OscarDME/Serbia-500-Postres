import { copy } from "@/lib/copy";

export default function Samples() {
  const { samples } = copy;
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFEFD9] via-[#FFF8EF] to-[#FFEFD9] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#3FA56C]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#2E8A58]">
            {samples.kicker}
          </span>
          <h2 className="font-display mt-4 text-3xl font-black leading-tight text-[#2B1D12] sm:text-4xl md:text-5xl">
            {samples.headline}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {samples.items.map((it, i) => (
            <div
              key={i}
              className="lift group overflow-hidden rounded-3xl border border-[#E6D7C2] bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#FFF8EF]">
                <img src={it.src} alt={it.alt} className="h-full w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-[#3FA56C] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow">
                  {samples.badge}
                </span>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-display text-lg font-black leading-tight text-[#2B1D12] md:text-xl">
                  {it.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#C73B7A]">
                  {it.variant}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFEFD9] px-3 py-1.5 text-xs font-bold text-[#2B1D12]">
                    <span>🔥</span>
                    <span>{samples.caloriesLabel}: {it.kcal}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF7EF] px-3 py-1.5 text-xs font-bold text-[#2E8A58]">
                    <span>⏱️</span>
                    <span>{samples.timeLabel}: {it.time}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
