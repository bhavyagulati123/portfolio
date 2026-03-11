"use client";

import { useState } from "react";
import { C, MONO } from "@/lib/theme";
import { DATA } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowTag from "@/components/ui/GlowTag";

function BlogEntry({ blog, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`/blog/${blog.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "100px 90px 1fr auto",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem 1.2rem",
        background: hovered ? C.bgCard : "transparent",
        border: `1px solid ${hovered ? C.greenFaint : "transparent"}`,
        borderRadius: 6,
        textDecoration: "none",
        fontFamily: MONO,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-12px)",
        transition: `all 0.3s ${0.15 + index * 0.06}s, background 0.15s, border-color 0.15s`,
      }}
    >
      <span style={{ fontSize: "0.7rem", color: C.dim }}>{blog.date}</span>
      <GlowTag color={C.cyan}>{blog.tag}</GlowTag>
      <span
        style={{
          fontSize: "0.82rem",
          color: hovered ? C.green : C.greenDim,
          transition: "color 0.2s",
          fontWeight: 500,
        }}
      >
        {blog.title}
      </span>
      <span
        style={{
          fontSize: "0.75rem",
          color: C.dim,
          transform: hovered ? "translateX(4px)" : "none",
          transition: "transform 0.2s",
        }}
      >
        →
      </span>
    </a>
  );
}

export default function Blog() {
  const [ref, visible] = useInView();
  const [showContent, setShowContent] = useState(false);

  return (
    <section
      id="blog"
      ref={ref}
      style={{
        padding: "4rem 2.5rem",
        maxWidth: 960,
        margin: "0 auto",
        borderTop: `1px solid ${C.border}`,
      }}
    >
      <SectionHeader
        command="find ~/blog -name '*.md' | head -3"
        path="~/blog"
        onDone={() => setShowContent(true)}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        {DATA.blogs.map((b, i) => (
          <BlogEntry
            key={i}
            blog={b}
            index={i}
            visible={showContent && visible}
          />
        ))}
      </div>
    </section>
  );
}
