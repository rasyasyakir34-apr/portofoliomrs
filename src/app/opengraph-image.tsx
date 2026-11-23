import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#070a1a",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid lines background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(58% 55% at 72% 18%, rgba(47,69,255,0.38), transparent 70%), radial-gradient(45% 45% at 12% 82%, rgba(255,178,30,0.12), transparent 72%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "80px 96px",
          }}
        >
          {/* Initials badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #2f45ff, #7483ff)",
              color: "#ffffff",
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              marginBottom: 48,
            }}
          >
            {site.initials}
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "rgba(255,255,255,0.55)",
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            {site.name}
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 0.95,
              letterSpacing: "-0.045em",
              maxWidth: 820,
            }}
          >
            I build web apps that solve real problems.
          </div>

          {/* Role + location */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 48,
            }}
          >
            <div
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "-0.01em",
              }}
            >
              {site.role}
            </div>
            <div
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                backgroundColor: "#ffb21e",
              }}
            />
            <div
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "rgba(255,255,255,0.45)",
              }}
            >
              {site.location}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
