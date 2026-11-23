"use client";

import { useEffect, useRef } from "react";

/**
 * Soft radial spotlight that lazily follows the cursor — desktop only.
 * Renders via a fixed div so it stays above all content without affecting layout.
 */
export function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;

    // Current and target positions
    let dx = window.innerWidth / 2, dy = window.innerHeight / 2;
    let gx = dx, gy = dy;
    let tx = dx, ty = dy;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      // dot follows tightly
      dx += (tx - dx) * 0.55;
      dy += (ty - dy) * 0.55;
      dot.style.transform = `translate(${dx - 4}px, ${dy - 4}px)`;

      // glow follows slowly (spring lag)
      gx += (tx - gx) * 0.07;
      gy += (ty - gy) * 0.07;
      glow.style.transform = `translate(${gx}px, ${gy}px)`;

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Large soft glow */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden -translate-x-1/2 -translate-y-1/2 md:block"
        style={{
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(47,69,255,0.055) 0%, rgba(116,131,255,0.03) 40%, transparent 70%)",
          willChange: "transform",
        }}
      />
      {/* Tiny sharp dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 rounded-full md:block"
        style={{
          background: "rgba(116,131,255,0.6)",
          boxShadow: "0 0 8px 2px rgba(47,69,255,0.35)",
          willChange: "transform",
        }}
      />
    </>
  );
}
