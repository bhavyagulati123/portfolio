"use client";

import { useState } from "react";
import { C, MONO } from "@/lib/theme";
import { DATA } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const [ref, visible] = useInView();
  const [showContent, setShowContent] = useState(false);

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: "4rem 2.5rem",
        maxWidth: 960,
        margin: "0 auto",
        borderTop: `1px solid ${C.border}`,
      }}
    >
      <SectionHeader
        command="ls -la projects/"
        path="~/projects"
        onDone={() => setShowContent(true)}
      />

      {/* File listing header */}
      <div
        style={{
          fontFamily: MONO,
          fontSize: "0.7rem",
          color: C.dim,
          padding: "0.8rem 0",
          borderBottom: `1px solid ${C.border}`,
          display: "grid",
          gridTemplateColumns: "120px 80px 1fr",
          opacity: showContent && visible ? 1 : 0,
          transition: "opacity 0.4s 0.2s",
        }}
      >
        <span>permissions</span>
        <span>size</span>
        <span>name</span>
      </div>

      {/* Project cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
        {DATA.projects.map((p, i) => (
          <ProjectCard
            key={p.name}
            project={p}
            index={i}
            visible={showContent && visible}
          />
        ))}
      </div>
    </section>
  );
}
