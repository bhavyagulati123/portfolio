"use client";

import { useState, useEffect } from "react";
import { C, MONO } from "@/lib/theme";

const NAV_LINKS = ["about", "skills", "projects", "experience", "blog", "contact"];

export default function Nav() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${C.border}`,
        padding: "0 2.5rem",
        height: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: MONO,
        fontSize: "0.75rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <span style={{ color: C.green, fontWeight: 600 }}>bhavya@portfolio</span>
        <span style={{ color: C.dim }}>|</span>
        {NAV_LINKS.map((s) => (
          <a
            key={s}
            href={`#${s}`}
            style={{
              color: C.dim,
              textDecoration: "none",
              transition: "color 0.2s",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => (e.target.style.color = C.green)}
            onMouseLeave={(e) => (e.target.style.color = C.dim)}
          >
            {s}
          </a>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <span style={{ color: C.dim }}>{time}</span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            color: C.green,
            fontSize: "0.7rem",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: C.green,
              animation: "pulse 2s infinite",
            }}
          />
          ONLINE
        </span>
      </div>
    </nav>
  );
}
