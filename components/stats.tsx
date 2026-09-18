"use client";

import NumberFlow from "@number-flow/react";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

export function StatTiles() {
  const ref = useRef<HTMLUListElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <ul ref={ref} className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {site.stats.map((s) => (
        <li key={s.label} className="card px-5 py-7 text-center">
          <p className="font-display text-4xl text-ink sm:text-5xl">
            <NumberFlow value={on ? s.value : 0} suffix={s.suffix} transformTiming={{ duration: 900, easing: "ease-out" }} />
          </p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">{s.label}</p>
        </li>
      ))}
    </ul>
  );
}
