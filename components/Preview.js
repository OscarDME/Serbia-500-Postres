import { copy } from "@/lib/copy";

export default function Preview() {
  const { preview } = copy;
  return (
    <section className="w-full bg-[#FFF8EF] py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#3FA56C]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#2E8A58]">
            {preview.kicker}
          </span>
          <h2 className="font-display mt-4 text-3xl font-black leading-tight text-[#2B1D12] sm:text-4xl md:text-5xl">
            {preview.headline}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
          {preview.items.map((it, i) => (
            <div
              key={i}
              className="lift overflow-hidden rounded-2xl border border-[#E6D7C2] bg-white shadow-sm"
            >
              <img
                src={it.src}
                alt={it.alt}
                className="h-full w-full object-cover aspect-square"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
