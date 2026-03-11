"use client";

import { useState } from "react";
import { C, MONO } from "@/lib/theme";
import GlowTag from "@/components/ui/GlowTag";
import Cursor from "@/components/ui/Cursor";
import { useTypewriter } from "@/hooks/useTypewriter";

function CodeBlock({ text, lang }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        margin: "1.5rem 0",
        background: "#0D0D0D",
        border: `1px solid ${C.border}`,
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 16px",
          background: "#161616",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28CA41" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {lang && (
            <span style={{ fontFamily: MONO, fontSize: "0.65rem", color: C.dim }}>{lang}</span>
          )}
          <button
            onClick={handleCopy}
            style={{
              background: "transparent",
              border: `1px solid ${C.border}`,
              borderRadius: 4,
              padding: "3px 10px",
              fontFamily: MONO,
              fontSize: "0.65rem",
              color: copied ? C.green : C.dim,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {copied ? "copied!" : "copy"}
          </button>
        </div>
      </div>
      <pre
        style={{
          padding: "1.2rem 1.5rem",
          fontFamily: MONO,
          fontSize: "0.75rem",
          lineHeight: 1.7,
          color: C.greenDim,
          overflowX: "auto",
          margin: 0,
        }}
      >
        {text}
      </pre>
    </div>
  );
}

export default function BlogPost({ blog }) {
  const [titleText, titleDone] = useTypewriter(`cat ${blog.slug}.md`, 35, 300, true);
  const [hoverBack, setHoverBack] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.bg,
        color: C.white,
      }}
    >
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "3rem 2rem 6rem",
        }}
      >
        {/* Back link */}
        <a
          href="/#blog"
          onMouseEnter={() => setHoverBack(true)}
          onMouseLeave={() => setHoverBack(false)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: MONO,
            fontSize: "0.75rem",
            color: hoverBack ? C.green : C.dim,
            textDecoration: "none",
            marginBottom: "2.5rem",
            transition: "color 0.2s",
          }}
        >
          <span
            style={{
              transform: hoverBack ? "translateX(-4px)" : "none",
              transition: "transform 0.2s",
            }}
          >
            &larr;
          </span>
          cd ~/blog
        </a>

        {/* Terminal prompt */}
        <div
          style={{
            fontFamily: MONO,
            fontSize: "0.78rem",
            marginBottom: "2rem",
          }}
        >
          <span style={{ color: C.cyan }}>bhavya</span>
          <span style={{ color: C.dim }}>@</span>
          <span style={{ color: C.green }}>portfolio</span>
          <span style={{ color: C.dim }}>:</span>
          <span style={{ color: C.amber }}>~/blog</span>
          <span style={{ color: C.dim }}>$ </span>
          <span style={{ color: C.white }}>{titleText}</span>
          {!titleDone && <Cursor />}
        </div>

        {/* Blog header */}
        <div
          style={{
            opacity: titleDone ? 1 : 0,
            transform: titleDone ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.3s 0.05s",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <GlowTag color={C.cyan}>{blog.tag}</GlowTag>
            <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: C.dim }}>
              {blog.date}
            </span>
            <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: C.dim }}>
              {blog.readTime} read
            </span>
          </div>

          <h1
            style={{
              fontFamily: MONO,
              fontSize: "1.5rem",
              fontWeight: 700,
              color: C.green,
              lineHeight: 1.4,
              marginBottom: "1rem",
            }}
          >
            {blog.title}
          </h1>

          <p
            style={{
              fontFamily: MONO,
              fontSize: "0.82rem",
              color: C.greenDim,
              lineHeight: 1.7,
              marginBottom: "2rem",
              paddingBottom: "2rem",
              borderBottom: `1px solid ${C.border}`,
            }}
          >
            {blog.excerpt}
          </p>

          {/* Blog content */}
          <div>
            {blog.content.map((block, i) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={i}
                    style={{
                      fontFamily: MONO,
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: C.cyan,
                      marginTop: "2rem",
                      marginBottom: "0.8rem",
                    }}
                  >
                    ## {block.text}
                  </h2>
                );
              }

              if (block.type === "code") {
                return <CodeBlock key={i} text={block.text} lang={block.lang} />;
              }

              return (
                <p
                  key={i}
                  style={{
                    fontFamily: MONO,
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.9,
                    marginBottom: "1.2rem",
                  }}
                >
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* Footer */}
          <div
            style={{
              marginTop: "3rem",
              padding: "1.5rem",
              background: C.bgCard,
              border: `1px solid ${C.border}`,
              borderRadius: 8,
              fontFamily: MONO,
              fontSize: "0.72rem",
              lineHeight: 2,
              color: C.dim,
            }}
          >
            <div style={{ color: C.greenDim }}>--- EOF ---</div>
            <div>
              <span style={{ color: C.cyan }}>author</span>
              <span style={{ color: C.dim }}> : </span>
              <span style={{ color: C.green }}>Bhavya Gulati</span>
            </div>
            <div>
              <span style={{ color: C.cyan }}>published</span>
              <span style={{ color: C.dim }}> : </span>
              <span style={{ color: C.amber }}>{blog.date}</span>
            </div>
            <div>
              <span style={{ color: C.cyan }}>tags</span>
              <span style={{ color: C.dim }}> : </span>
              <span style={{ color: C.amber }}>["{blog.tag}"]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
