"use client";

import { useState } from "react";
import { C, MONO } from "@/lib/theme";
import GlowTag from "@/components/ui/GlowTag";

export default function ProjectCard({ project, index, visible }) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setExpanded(!expanded)}
      style={{
        background: hovered ? C.bgCard : "transparent",
        border: `1px solid ${hovered ? C.greenFaint : C.border}`,
        borderRadius: 8,
        padding: "1.2rem 1.5rem",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: `all 0.3s ${0.15 + index * 0.06}s, background 0.15s, border-color 0.15s`,
      }}
    >
      {/* File listing row */}
      <div
        style={{
          fontFamily: MONO,
          fontSize: "0.75rem",
          display: "grid",
          gridTemplateColumns: "120px 80px 1fr auto",
          alignItems: "center",
        }}
      >
        <span style={{ color: C.dim }}>drwxr-xr-x</span>
        <span style={{ color: C.dim }}>{project.tech.length} deps</span>
        <span style={{ color: C.cyan, fontWeight: 600 }}>📁 {project.name}/</span>
        <span style={{ color: C.dim, fontSize: "0.65rem" }}>{expanded ? "▼" : "▶"}</span>
      </div>

      {/* Title & desc */}
      <div style={{ marginTop: "0.8rem" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.9rem", fontWeight: 600, color: C.green }}>
          {project.title}
        </div>
        <div
          style={{
            fontFamily: MONO,
            fontSize: "0.78rem",
            color: C.greenDim,
            marginTop: "0.3rem",
            lineHeight: 1.6,
          }}
        >
          {project.desc}
        </div>
      </div>

      {/* Tech tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.8rem" }}>
        {project.tech.map((t) => (
          <GlowTag key={t}>{t}</GlowTag>
        ))}
      </div>

      {/* Expanded content */}
      {expanded && (
        <div
          style={{
            marginTop: "1rem",
            paddingTop: "1rem",
            borderTop: `1px solid ${C.border}`,
            animation: "fadeIn 0.3s both",
          }}
        >
          <div style={{ fontFamily: MONO, fontSize: "0.7rem", color: C.dim, marginBottom: "0.5rem" }}>
            // highlights
          </div>
          {project.highlights.map((h, i) => (
            <div
              key={i}
              style={{
                fontFamily: MONO,
                fontSize: "0.75rem",
                color: C.greenDim,
                lineHeight: 2,
                paddingLeft: 12,
              }}
            >
              <span style={{ color: C.green }}>→</span> {h}
            </div>
          ))}
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  fontFamily: MONO,
                  fontSize: "0.7rem",
                  color: C.dim,
                  textDecoration: "none",
                  padding: "0.3rem 0.8rem",
                  border: `1px solid ${C.border}`,
                  borderRadius: 4,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = C.green;
                  e.target.style.borderColor = C.greenFaint;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = C.dim;
                  e.target.style.borderColor = C.border;
                }}
              >
                [github]
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  fontFamily: MONO,
                  fontSize: "0.7rem",
                  color: C.dim,
                  textDecoration: "none",
                  padding: "0.3rem 0.8rem",
                  border: `1px solid ${C.border}`,
                  borderRadius: 4,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = C.amber;
                  e.target.style.borderColor = `${C.amber}40`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = C.dim;
                  e.target.style.borderColor = C.border;
                }}
              >
                [live demo]
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
