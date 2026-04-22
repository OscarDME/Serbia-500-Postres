import { copy } from "@/lib/copy";

export default function Audience() {
  const { audience } = copy;
  return (
    <section className="w-full bg-[#FFF8EF] py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#E8538C]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#C73B7A]">
            {audience.kicker}
          </span>
          <h2 className="font-display mt-4 text-3xl font-black leading-tight text-[#2B1D12] sm:text-4xl md:text-5xl">
            {audience.headline}
          </h2>
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {audience.items.map((it, i) => (
            <li
              key={i}
              className="lift flex items-center gap-3 rounded-2xl border border-[#E6D7C2] bg-white px-5 py-4 shadow-sm"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3FA56C]/15 text-[#2E8A58]">
                ✓
              </span>
              <span className="text-[15px] font-semibold text-[#2B1D12] md:text-base">
                {it}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
