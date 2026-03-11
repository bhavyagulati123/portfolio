"use client";

import { useState, useEffect } from "react";
import { C, MONO } from "@/lib/theme";
import { DATA, ASCII_NAME } from "@/lib/data";
import Prompt from "@/components/ui/Prompt";

const BOOT_LINES = [
  { text: "[OK] Loading kernel modules...", color: C.dim, delay: 0 },
  { text: "[OK] Starting portfolio services...", color: C.dim, delay: 200 },
  { text: "[OK] Mounting /dev/skills...", color: C.dim, delay: 400 },
  { text: "[OK] Initializing network interfaces...", color: C.dim, delay: 600 },
  { text: "System ready.", color: C.green, delay: 900 },
];

const STATS = [
  { val: "5+", label: "prod releases" },
  { val: "30%", label: "faster APIs" },
  { val: "100%", label: "sprint delivery" },
  { val: "4", label: "shipped projects" },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showAscii, setShowAscii] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    BOOT_LINES.forEach((_, i) => {
      setTimeout(() => setVisibleLines(i + 1), BOOT_LINES[i].delay);
    });
    setTimeout(() => setShowAscii(true), 1200);
    setTimeout(() => setShowContent(true), 1800);
  }, []);

  return (
    <section
      id="about"
      style={{ padding: "3rem 2.5rem 5rem", maxWidth: 960, margin: "0 auto" }}
    >
      {/* Boot sequence */}
      <div style={{ fontSize: "0.72rem", lineHeight: 2, marginBottom: "2rem" }}>
        {BOOT_LINES.map((line, i) => (
          <div
            key={i}
            style={{
              color: line.color,
              opacity: i < visibleLines ? 1 : 0,
              transform: i < visibleLines ? "translateX(0)" : "translateX(-10px)",
              transition: "all 0.3s",
              fontFamily: MONO,
            }}
          >
            {line.text}
          </div>
        ))}
      </div>

      {/* ASCII Name */}
      <pre
        style={{
          fontFamily: MONO,
          fontSize: "clamp(0.35rem,1.1vw,0.65rem)",
          color: C.green,
          lineHeight: 1.25,
          opacity: showAscii ? 1 : 0,
          transform: showAscii ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.22,1,0.36,1)",
          textShadow: "0 0 20px rgba(0,255,136,0.3)",
          marginBottom: "2.5rem",
        }}
      >
        {ASCII_NAME}
      </pre>

      {/* Main info */}
      <div
        style={{
          opacity: showContent ? 1 : 0,
          transform: showContent ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div style={{ fontSize: "0.82rem", lineHeight: 2.2, fontFamily: MONO }}>
          <div>
            <Prompt />
            <span style={{ color: C.white }}>cat about.txt</span>
          </div>
          <div style={{ color: C.greenDim, marginTop: "0.5rem" }}>
            Full-Stack Engineer with strong foundations in Data Structures,
          </div>
          <div style={{ color: C.greenDim }}>
            Algorithms, and scalable web applications. Seeking Backend /
          </div>
          <div style={{ color: C.greenDim }}>
            Full-Stack roles to design RESTful APIs and performant systems.
          </div>
        </div>

        {/* Status badge */}
        <div
          style={{
            display: "inline-block",
            marginTop: "2rem",
            padding: "0.5rem 1rem",
            background: "rgba(0,255,136,0.08)",
            border: `1px solid ${C.greenFaint}`,
            borderRadius: 4,
            fontSize: "0.78rem",
            color: C.green,
            fontWeight: 600,
            animation: "pulseGlow 3s infinite",
            letterSpacing: "0.04em",
            fontFamily: MONO,
          }}
        >
          ● {DATA.status}
        </div>

        {/* Quick stats */}
        <div style={{ display: "flex", gap: "3rem", marginTop: "2.5rem" }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: C.green,
                  textShadow: "0 0 15px rgba(0,255,136,0.2)",
                }}
              >
                {s.val}
              </div>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: "0.65rem",
                  color: C.dim,
                  marginTop: "0.3rem",
                  letterSpacing: "0.04em",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
