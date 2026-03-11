"use client";

import { useEffect } from "react";
import { C, MONO } from "@/lib/theme";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useInView } from "@/hooks/useInView";
import Prompt from "./Prompt";
import Cursor from "./Cursor";

export default function SectionHeader({ command, path = "~", onDone }) {
  const [ref, visible] = useInView();
  const [typed, done] = useTypewriter(command, 40, 200, visible);

  useEffect(() => {
    if (done && onDone) onDone();
  }, [done]);

  return (
    <div ref={ref} style={{ marginBottom: "1.5rem", fontSize: "0.85rem", fontFamily: MONO }}>
      <Prompt path={path} />
      <span style={{ color: C.white }}>{typed}</span>
      {!done && visible && <Cursor />}
    </div>
  );
}
