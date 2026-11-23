/**
 * FluidBg — animated deep-blue fluid/smoke background.
 * Uses SVG feTurbulence to simulate the ink-in-water effect
 * similar to aulianza.com's hero background.
 * Rendered server-side (no "use client" needed).
 */
export function FluidBg() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{ backgroundColor: "#020c28" }}
    >
      {/* ── Layer 1: Primary dark-blue fluid ── */}
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="fluid-primary" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.013 0.009"
              numOctaves="7"
              result="turb"
            >
              <animate
                attributeName="baseFrequency"
                values="0.013 0.009;0.01 0.007;0.016 0.012;0.013 0.009"
                dur="28s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"
              />
            </feTurbulence>
            {/* Map noise → deep royal-blue palette */}
            <feColorMatrix
              type="matrix"
              values="0  0  0  0  0.01
                      0  0  0  0  0.03
                      0  0  0  0  0.44
                      0  0  0  3.2 -0.9"
              in="turb"
            />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#fluid-primary)" />
      </svg>

      {/* ── Layer 2: Lighter blue wisps (blended over) ── */}
      <svg
        className="absolute inset-0 h-full w-full"
        style={{ mixBlendMode: "screen", opacity: 0.55 }}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="fluid-wisps" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.022 0.017"
              numOctaves="5"
              result="turb2"
            >
              <animate
                attributeName="baseFrequency"
                values="0.022 0.017;0.018 0.013;0.026 0.02;0.022 0.017"
                dur="20s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"
              />
            </feTurbulence>
            {/* Lighter blue for the wispy highlight areas */}
            <feColorMatrix
              type="matrix"
              values="0  0  0  0  0.04
                      0  0  0  0  0.08
                      0  0  0  0  0.72
                      0  0  0  2.6 -1.2"
              in="turb2"
            />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#fluid-wisps)" />
      </svg>

      {/* ── Layer 3: Subtle vignette — darkens edges ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 50% 45%, transparent 20%, rgba(2,8,32,0.7) 100%)",
        }}
      />
    </div>
  );
}
