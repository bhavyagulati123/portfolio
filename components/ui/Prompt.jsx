import { C } from "@/lib/theme";

export default function Prompt({ path = "~" }) {
  return (
    <span>
      <span style={{ color: C.cyan }}>bhavya</span>
      <span style={{ color: C.dim }}>@</span>
      <span style={{ color: C.greenDim }}>portfolio</span>
      <span style={{ color: C.dim }}>:</span>
      <span style={{ color: C.amber }}>{path}</span>
      <span style={{ color: C.white }}>$ </span>
    </span>
  );
}
