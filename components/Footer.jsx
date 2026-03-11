import { C, MONO } from "@/lib/theme";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "1.5rem 2.5rem",
        borderTop: `1px solid ${C.border}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: MONO,
        fontSize: "0.68rem",
        color: C.dim,
      }}
    >
      <span>© 2026 Bhavya Gulati — Built with React + caffeine</span>
      <span>v1.0.0 — all systems operational</span>
    </footer>
  );
}
