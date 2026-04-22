import { copy } from "@/lib/copy";

export default function Benefits() {
  const { benefits } = copy;
  return (
    <section className="relative w-full bg-gradient-to-b from-[#FFF8EF] to-[#FFEFD9] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#E8538C]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#C73B7A]">
            {benefits.kicker}
          </span>
          <h2 className="font-display mt-4 text-3xl font-black leading-tight text-[#2B1D12] sm:text-4xl md:text-5xl">
            {benefits.headline}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((it, i) => (
            <div
              key={i}
              className="lift group relative overflow-hidden rounded-3xl border border-[#E6D7C2] bg-white p-6 shadow-sm md:p-7"
            >
              <div
                aria-hidden
                className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#3FA56C]/10 transition group-hover:scale-125"
              />
              <div className="relative flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3FA56C]/20 to-[#E8538C]/20 text-2xl shadow-inner">
                  {it.icon}
                </span>
                <h3 className="font-display text-lg font-extrabold leading-snug text-[#2B1D12] md:text-xl">
                  {it.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
