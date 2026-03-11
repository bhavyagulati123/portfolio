"use client";

import { useState } from "react";
import { C, MONO } from "@/lib/theme";
import { DATA } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import SectionHeader from "@/components/ui/SectionHeader";

const SKILL_BARS = [
  { name: "JavaScript/TS", pct: 92 },
  { name: "React/Next.js", pct: 90 },
  { name: "Node.js", pct: 88 },
  { name: "Python", pct: 78 },
  { name: "MongoDB", pct: 85 },
  { name: "PostgreSQL", pct: 75 },
];

export default function Skills() {
  const [ref, visible] = useInView();
  const [showContent, setShowContent] = useState(false);

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "4rem 2.5rem",
        maxWidth: 960,
        margin: "0 auto",
        borderTop: `1px solid ${C.border}`,
      }}
    >
      <SectionHeader
        command="cat skills.json"
        path="~/skills"
        onDone={() => setShowContent(true)}
      />

      {/* JSON display */}
      <div
        style={{
          background: C.bgCard,
          border: `1px solid ${C.border}`,
          borderRadius: 8,
          padding: "1.5rem 2rem",
          fontFamily: MONO,
          fontSize: "0.8rem",
          lineHeight: 2.2,
          opacity: showContent && visible ? 1 : 0,
          transform: showContent && visible ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.6s 0.2s",
        }}
      >
        <div style={{ color: C.dim }}>{"{"}</div>
        {Object.entries(DATA.skills).map(([key, vals], ki) => (
          <div key={key} style={{ paddingLeft: 24 }}>
            <span style={{ color: C.cyan }}>"{key}"</span>
            <span style={{ color: C.dim }}>: [</span>
            {vals.map((v, vi) => (
              <span key={v}>
                <span style={{ color: C.amber }}>"{v}"</span>
                {vi < vals.length - 1 && <span style={{ color: C.dim }}>, </span>}
              </span>
            ))}
            <span style={{ color: C.dim }}>
              ]{ki < Object.keys(DATA.skills).length - 1 ? "," : ""}
            </span>
          </div>
        ))}
        <div style={{ color: C.dim }}>{"}"}</div>
      </div>

      {/* Skill bars */}
      <div
        style={{
          marginTop: "2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.8rem",
        }}
      >
        {SKILL_BARS.map((s, i) => (
          <div
            key={s.name}
            style={{
              opacity: showContent && visible ? 1 : 0,
              transition: `opacity 0.4s ${0.4 + i * 0.1}s`,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: MONO,
                fontSize: "0.7rem",
                marginBottom: 4,
              }}
            >
              <span style={{ color: C.greenDim }}>{s.name}</span>
              <span style={{ color: C.dim }}>{s.pct}%</span>
            </div>
            <div
              style={{
                height: 3,
                background: C.greenGhost,
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  background: `linear-gradient(90deg, ${C.green}, ${C.cyan})`,
                  borderRadius: 2,
                  width: showContent && visible ? `${s.pct}%` : "0%",
                  transition: `width 1s cubic-bezier(0.22,1,0.36,1) ${0.6 + i * 0.1}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
