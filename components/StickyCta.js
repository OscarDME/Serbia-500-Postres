"use client";

import { useEffect, useState } from "react";
import { copy } from "@/lib/copy";
import { BASE_CHECKOUT_URL, buildCheckoutUrl, fireBeginCheckout } from "@/lib/checkout";

export default function StickyCta() {
  const { stickyCta, finalCta } = copy;
  const [visible, setVisible] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState(BASE_CHECKOUT_URL);

  useEffect(() => {
    setCheckoutUrl(buildCheckoutUrl());
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => fireBeginCheckout(finalCta.offerPrice);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transform border-t border-[#E6D7C2] bg-white/95 px-4 py-3 shadow-[0_-10px_30px_-10px_rgba(43,29,18,0.25)] backdrop-blur transition md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-md items-center gap-3">
        <div className="flex-1 leading-tight">
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#6B4A35]">
            {stickyCta.priceLabel}
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-xl font-black text-[#3FA56C]">
              {stickyCta.offerPrice}
            </span>
            <span className="text-xs font-bold text-[#6B4A35] line-through decoration-[#E8538C] decoration-2">
              {stickyCta.strikePrice}
            </span>
          </div>
        </div>
        <a
          href={checkoutUrl}
          onClick={handleClick}
          className="cta-shimmer inline-flex items-center justify-center rounded-xl border-b-4 border-[#1f6d43] bg-[#3FA56C] px-5 py-3 text-sm font-black uppercase tracking-wide text-white shadow-lg"
        >
          {stickyCta.ctaLabel}
          <span className="ml-1.5 text-base">→</span>
        </a>
      </div>
    </div>
  );
}
