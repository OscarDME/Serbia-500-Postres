import { copy } from "@/lib/copy";

export default function Delivery() {
  const { delivery } = copy;
  return (
    <section className="w-full bg-gradient-to-b from-[#FFF8EF] to-[#FFEFD9] py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#3FA56C]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#2E8A58]">
            {delivery.kicker}
          </span>
          <h2 className="font-display mt-4 text-3xl font-black leading-tight text-[#2B1D12] sm:text-4xl md:text-5xl">
            {delivery.headline}
          </h2>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {delivery.items.map((it, i) => (
            <li
              key={i}
              className="lift flex items-start gap-4 rounded-2xl border border-[#E6D7C2] bg-white px-5 py-4 shadow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#3FA56C]/20 to-[#E8538C]/20 text-2xl">
                {it.icon}
              </span>
              <span className="text-[15px] font-semibold text-[#2B1D12] md:text-base">
                {it.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
