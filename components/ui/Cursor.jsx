import { C } from "@/lib/theme";

export default function Cursor({ color = C.green }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 9,
        height: 17,
        background: color,
        animation: "blink 1s step-end infinite",
        verticalAlign: "text-bottom",
        marginLeft: 2,
      }}
    />
  );
}
