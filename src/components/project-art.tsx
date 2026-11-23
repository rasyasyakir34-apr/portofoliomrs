import type { ProjectArt as ArtVariant } from "@/lib/site";

type Props = {
  variant: ArtVariant;
  dark?: boolean;
};

export function ProjectArt({ variant, dark = false }: Props) {
  const fg = dark ? "#0a0d1f" : "#ffffff";
  const accent = "#ffb21e";
  const soft = dark ? "rgba(10, 13, 31, 0.22)" : "rgba(255, 255, 255, 0.22)";
  const group =
    "transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] [transform-box:fill-box] [transform-origin:center]";

  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    >
      {variant === "rings" && (
        <g className={`${group} group-hover:-translate-x-4 group-hover:rotate-12`}>
          <circle cx="285" cy="132" r="150" fill="none" stroke={fg} strokeWidth="14" />
          <circle cx="285" cy="132" r="115" fill="none" stroke={accent} strokeWidth="14" />
          <circle cx="285" cy="132" r="80" fill="none" stroke={fg} strokeWidth="14" />
          <circle cx="285" cy="132" r="45" fill="none" stroke={accent} strokeWidth="14" />
        </g>
      )}

      {variant === "arcs" && (
        <g>
          {[0, 1, 2, 3].map((col) =>
            [0, 1].map((row) => {
              const fill = (col + row) % 2 === 0 ? fg : soft;
              return (
                <path
                  key={`${col}-${row}`}
                  d="M0 0 H78 A78 78 0 0 1 0 78 Z"
                  fill={fill}
                  transform={`translate(${80 + col * 78} ${62 + row * 78}) rotate(${
                    (col * 90 + row * 180) % 360
                  }) translate(-39 -39)`}
                  className={`${group} group-hover:rotate-90`}
                />
              );
            }),
          )}
        </g>
      )}

      {variant === "diagonal" && (
        <g>
          <g className={`${group} group-hover:translate-x-6`}>
            {Array.from({ length: 9 }).map((_, index) => (
              <rect
                key={index}
                x={-30 + index * 46}
                y="-40"
                width="17"
                height="380"
                fill={soft}
                transform="rotate(28 200 150)"
              />
            ))}
          </g>
          <circle cx="322" cy="92" r="68" fill={accent} className={`${group} group-hover:scale-110`} />
        </g>
      )}

      {variant === "rows" && (
        <g className={`${group} group-hover:translate-x-5`}>
          <rect x="40" y="58" width="250" height="34" rx="17" fill={soft} />
          <rect x="96" y="112" width="250" height="34" rx="17" fill={fg} opacity="0.8" />
          <rect x="40" y="166" width="180" height="34" rx="17" fill={accent} />
          <rect x="96" y="220" width="230" height="34" rx="17" fill={soft} />
        </g>
      )}

      {variant === "dots" && (
        <g>
          {Array.from({ length: 7 }).map((_, col) =>
            Array.from({ length: 5 }).map((__, row) => (
              <circle
                key={`${col}-${row}`}
                cx={52 + col * 50}
                cy={68 + row * 44}
                r="7"
                fill={dark ? "rgba(10,13,31,0.32)" : soft}
                className={`${group} group-hover:scale-125`}
                style={{ transformOrigin: `${52 + col * 50}px ${68 + row * 44}px` }}
              />
            )),
          )}
          <circle cx="302" cy="112" r="62" fill={accent} className={`${group} group-hover:scale-110`} />
        </g>
      )}

      {variant === "waves" && (
        <g className={`${group} group-hover:-translate-y-3`}>
          {[70, 120, 170, 220].map((y, index) => (
            <path
              key={y}
              d={`M-40 ${y} Q 80 ${y - 46} 200 ${y} T 440 ${y}`}
              fill="none"
              stroke={index === 1 ? accent : soft}
              strokeWidth="16"
              strokeLinecap="round"
            />
          ))}
        </g>
      )}
    </svg>
  );
}
