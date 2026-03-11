"use client";

import { useState } from "react";
import { C, MONO } from "@/lib/theme";
import { DATA } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowTag from "@/components/ui/GlowTag";
import Prompt from "@/components/ui/Prompt";

export default function Experience() {
  const [ref, visible] = useInView();
  const [showContent, setShowContent] = useState(false);

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        padding: "4rem 2.5rem",
        maxWidth: 960,
        margin: "0 auto",
        borderTop: `1px solid ${C.border}`,
      }}
    >
      <SectionHeader
        command="git log --oneline experience.log"
        path="~/career"
        onDone={() => setShowContent(true)}
      />

      {/* Experience cards */}
      {DATA.experience.map((exp, ei) => (
        <div
          key={ei}
          style={{
            background: C.bgCard,
            border: `1px solid ${C.border}`,
            borderRadius: 8,
            padding: "2rem",
            marginBottom: "1.5rem",
            opacity: showContent && visible ? 1 : 0,
            transform: showContent && visible ? "translateY(0)" : "translateY(16px)",
            transition: `all 0.6s ${0.2 + ei * 0.15}s`,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <div>
              <div
                style={{ fontFamily: MONO, fontSize: "0.95rem", fontWeight: 600, color: C.green }}
              >
                {exp.role}
              </div>
              <div style={{ fontFamily: MONO, fontSize: "0.82rem", color: C.cyan, marginTop: "0.2rem" }}>
                {exp.company}
              </div>
            </div>
            <GlowTag color={C.amber}>{exp.date}</GlowTag>
          </div>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: "1rem" }}>
            {exp.points.map((p, i) => (
              <div
                key={i}
                style={{
                  fontFamily: MONO,
                  fontSize: "0.78rem",
                  color: C.greenDim,
                  lineHeight: 2,
                  paddingLeft: 16,
                  position: "relative",
                  opacity: showContent && visible ? 1 : 0,
                  transition: `opacity 0.4s ${0.5 + i * 0.08}s`,
                }}
              >
                <span style={{ position: "absolute", left: 0, color: C.green }}>▸</span>
                {p}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Education */}
      <div style={{ marginTop: "2rem" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.82rem", marginBottom: "1rem" }}>
          <Prompt path="~/education" />
          <span style={{ color: C.white }}>cat degrees.log</span>
        </div>
        {DATA.education.map((edu, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              padding: "0.8rem 1.2rem",
              borderLeft: `2px solid ${i === 0 ? C.green : C.border}`,
              marginBottom: "0.5rem",
              background: i === 0 ? C.greenUltra : "transparent",
              borderRadius: "0 4px 4px 0",
              opacity: showContent && visible ? 1 : 0,
              transition: `opacity 0.4s ${0.8 + i * 0.1}s`,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: "0.82rem",
                  color: i === 0 ? C.green : C.greenDim,
                  fontWeight: 600,
                }}
              >
                {edu.degree}
              </div>
              <div
                style={{ fontFamily: MONO, fontSize: "0.72rem", color: C.dim, marginTop: "0.15rem" }}
              >
                {edu.school}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: MONO, fontSize: "0.7rem", color: C.dim }}>{edu.period}</div>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: "0.75rem",
                  color: C.amber,
                  fontWeight: 600,
                  marginTop: "0.15rem",
                }}
              >
                {edu.grade}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div style={{ marginTop: "2rem" }}>
        <div
          style={{
            fontFamily: MONO,
            fontSize: "0.72rem",
            color: C.dim,
            marginBottom: "0.8rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          // achievements
        </div>
        {DATA.achievements.map((a, i) => (
          <div
            key={i}
            style={{
              fontFamily: MONO,
              fontSize: "0.76rem",
              color: C.greenDim,
              lineHeight: 1.8,
              paddingLeft: 16,
              position: "relative",
              opacity: showContent && visible ? 1 : 0,
              transition: `opacity 0.4s ${1 + i * 0.1}s`,
            }}
          >
            <span style={{ position: "absolute", left: 0, color: C.amber }}>★</span>
            {a}
          </div>
        ))}
      </div>
    </section>
  );
}
