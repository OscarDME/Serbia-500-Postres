import { copy } from "@/lib/copy";

export default function Guarantee() {
  const { guarantee } = copy;
  return (
    <section className="w-full bg-[#FFF8EF] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#E6D7C2] bg-gradient-to-br from-white via-[#FFEFD9] to-white p-8 shadow-xl md:p-12">
          <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#3FA56C]/15 blur-3xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-12">
            <img
              src={guarantee.image.src}
              alt={guarantee.image.alt}
              className="mx-auto h-40 w-40 object-contain anim-float md:h-52 md:w-52"
            />
            <div className="text-center md:text-left">
              <span className="inline-block rounded-full bg-[#3FA56C]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#2E8A58]">
                {guarantee.kicker}
              </span>
              <h2 className="font-display mt-4 text-3xl font-black leading-tight text-[#2B1D12] sm:text-4xl">
                {guarantee.headline}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4B3A2E] md:text-lg">
                {guarantee.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
