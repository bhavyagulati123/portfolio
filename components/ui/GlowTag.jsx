import { C, MONO } from "@/lib/theme";

export default function GlowTag({ children, color = C.green }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 8px",
        background: color === C.green ? "rgba(0,255,136,0.1)" : `${color}18`,
        border: `1px solid ${color}30`,
        borderRadius: 3,
        fontSize: "0.7rem",
        color: color,
        fontFamily: MONO,
        letterSpacing: "0.02em",
      }}
    >
      {children}
    </span>
  );
}
