"use client";

import { useState } from "react";
import { C, MONO } from "@/lib/theme";
import { DATA } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import SectionHeader from "@/components/ui/SectionHeader";

function TermInput({ label, field, value, onChange, type = "text", focused, onFocus, onBlur }) {
  const isFocused = focused === field;
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label
        style={{
          display: "block",
          fontFamily: MONO,
          fontSize: "0.72rem",
          color: isFocused ? C.cyan : C.dim,
          marginBottom: "0.4rem",
          transition: "color 0.2s",
          letterSpacing: "0.04em",
        }}
      >
        <span style={{ color: isFocused ? C.green : C.dim, marginRight: 6 }}>❯</span>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={(e) => onChange(field, e.target.value)}
          onFocus={() => onFocus(field)}
          onBlur={onBlur}
          rows={4}
          style={{
            width: "100%",
            padding: "0.7rem 1rem",
            background: isFocused ? "rgba(0,255,136,0.04)" : "transparent",
            border: `1px solid ${isFocused ? C.greenFaint : C.border}`,
            borderRadius: 6,
            fontFamily: MONO,
            fontSize: "0.8rem",
            color: C.green,
            resize: "vertical",
            outline: "none",
            transition: "all 0.2s",
            lineHeight: 1.7,
          }}
          placeholder="Type here..."
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(field, e.target.value)}
          onFocus={() => onFocus(field)}
          onBlur={onBlur}
          style={{
            width: "100%",
            padding: "0.7rem 1rem",
            background: isFocused ? "rgba(0,255,136,0.04)" : "transparent",
            border: `1px solid ${isFocused ? C.greenFaint : C.border}`,
            borderRadius: 6,
            fontFamily: MONO,
            fontSize: "0.8rem",
            color: C.green,
            outline: "none",
            transition: "all 0.2s",
          }}
          placeholder={`Enter your ${label.toLowerCase()}...`}
        />
      )}
    </div>
  );
}

function SocialLink({ link, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 1.2rem",
        border: `1px solid ${hovered ? C.greenFaint : C.border}`,
        borderRadius: 6,
        textDecoration: "none",
        background: hovered ? C.bgCard : "transparent",
        fontFamily: MONO,
        transition: "all 0.2s",
        opacity: visible ? 1 : 0,
        animation: visible ? `fadeIn 0.25s ${0.25 + index * 0.06}s both` : "none",
      }}
    >
      <span
        style={{
          fontSize: "0.82rem",
          color: hovered ? C.green : C.greenDim,
          fontWeight: 500,
          transition: "color 0.2s",
        }}
      >
        {link.label}
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

export default function Contact() {
  const [ref, visible] = useInView();
  const [showContent, setShowContent] = useState(false);
  const [focused, setFocused] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (field, value) => setForm((p) => ({ ...p, [field]: value }));

  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    setError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio message from ${form.name}`,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Failed to send. Try again.");
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setSending(false);
    }
  };

  const isReady = form.name && form.email && form.message && !sending;

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "4rem 2.5rem 6rem",
        maxWidth: 960,
        margin: "0 auto",
        borderTop: `1px solid ${C.border}`,
      }}
    >
      <SectionHeader
        command="./connect.sh --hire-me"
        path="~/contact"
        onDone={() => setShowContent(true)}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: "2rem",
          opacity: showContent && visible ? 1 : 0,
          transform: showContent && visible ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.35s 0.15s",
        }}
      >
        {/* Left — Contact Form */}
        <div
          style={{
            background: C.bgCard,
            border: `1px solid ${C.border}`,
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          {/* Terminal title bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              padding: "10px 16px",
              background: "#161616",
              borderBottom: `1px solid ${C.border}`,
            }}
          >
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28CA41" }} />
            <span
              style={{
                fontFamily: MONO,
                fontSize: "0.68rem",
                color: C.dim,
                marginLeft: "auto",
              }}
            >
              send-message.sh
            </span>
          </div>

          <div style={{ padding: "1.5rem 1.8rem" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✓</div>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: "0.9rem",
                    color: C.green,
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                  }}
                >
                  Message sent successfully!
                </div>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: "0.75rem",
                    color: C.dim,
                    lineHeight: 1.8,
                  }}
                >
                  <span style={{ color: C.greenDim }}>return_code</span>:{" "}
                  <span style={{ color: C.amber }}>0</span>
                  <br />
                  <span style={{ color: C.greenDim }}>status</span>:{" "}
                  <span style={{ color: C.green }}>delivered</span>
                  <br />
                  <span style={{ color: C.greenDim }}>eta_response</span>:{" "}
                  <span style={{ color: C.cyan }}>~24h</span>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  style={{
                    marginTop: "1.5rem",
                    padding: "0.6rem 1.5rem",
                    background: "transparent",
                    border: `1px solid ${C.border}`,
                    borderRadius: 4,
                    fontFamily: MONO,
                    fontSize: "0.75rem",
                    color: C.dim,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = C.greenFaint;
                    e.target.style.color = C.green;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = C.border;
                    e.target.style.color = C.dim;
                  }}
                >
                  [send another]
                </button>
              </div>
            ) : (
              <>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: "0.7rem",
                    color: C.dim,
                    marginBottom: "1.2rem",
                  }}
                >
                  {"// fill in the fields below — all data piped securely"}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 1rem" }}>
                  <TermInput
                    label="Name"
                    field="name"
                    value={form.name}
                    onChange={handleChange}
                    focused={focused}
                    onFocus={setFocused}
                    onBlur={() => setFocused(null)}
                  />
                  <TermInput
                    label="Email"
                    field="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    focused={focused}
                    onFocus={setFocused}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <TermInput
                  label="Subject"
                  field="subject"
                  value={form.subject}
                  onChange={handleChange}
                  focused={focused}
                  onFocus={setFocused}
                  onBlur={() => setFocused(null)}
                />

                <TermInput
                  label="Message"
                  field="message"
                  value={form.message}
                  onChange={handleChange}
                  type="textarea"
                  focused={focused}
                  onFocus={setFocused}
                  onBlur={() => setFocused(null)}
                />

                {(!form.name || !form.email || !form.message) &&
                  (form.name || form.email || form.message || form.subject) && (
                    <div
                      style={{
                        fontFamily: MONO,
                        fontSize: "0.68rem",
                        color: C.amber,
                        marginBottom: "0.8rem",
                        opacity: 0.7,
                      }}
                    >
                      ⚠ required: name, email, message
                    </div>
                  )}

                <button
                  onClick={handleSubmit}
                  disabled={!isReady}
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    background: isReady ? "rgba(0,255,136,0.1)" : "transparent",
                    border: `1px solid ${isReady ? C.greenFaint : C.border}`,
                    borderRadius: 6,
                    fontFamily: MONO,
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: isReady ? C.green : C.dim,
                    cursor: isReady ? "pointer" : "not-allowed",
                    transition: "all 0.3s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => {
                    if (isReady) {
                      e.currentTarget.style.background = "rgba(0,255,136,0.18)";
                      e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,136,0.15)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      form.name && form.email && form.message
                        ? "rgba(0,255,136,0.1)"
                        : "transparent";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {sending ? (
                    <>
                      <span style={{ display: "inline-block", animation: "pulse 0.6s infinite" }}>
                        ●
                      </span>
                      sending packet...
                    </>
                  ) : (
                    <>$ send_message --to bhavya</>
                  )}
                </button>

                {error && (
                  <div
                    style={{
                      marginTop: "0.8rem",
                      fontFamily: MONO,
                      fontSize: "0.72rem",
                      color: C.red,
                    }}
                  >
                    {error}
                  </div>
                )}

                {(form.name || form.email) && (
                  <div
                    style={{
                      marginTop: "1rem",
                      padding: "0.8rem 1rem",
                      background: "rgba(0,0,0,0.3)",
                      borderRadius: 4,
                      fontFamily: MONO,
                      fontSize: "0.68rem",
                      lineHeight: 2,
                      color: C.dim,
                    }}
                  >
                    <div style={{ color: C.greenDim }}>// preview payload</div>
                    <div>{"{"}</div>
                    {form.name && (
                      <div style={{ paddingLeft: 16 }}>
                        <span style={{ color: C.cyan }}>"from"</span>:{" "}
                        <span style={{ color: C.amber }}>"{form.name}"</span>,
                      </div>
                    )}
                    {form.email && (
                      <div style={{ paddingLeft: 16 }}>
                        <span style={{ color: C.cyan }}>"email"</span>:{" "}
                        <span style={{ color: C.amber }}>"{form.email}"</span>,
                      </div>
                    )}
                    {form.subject && (
                      <div style={{ paddingLeft: 16 }}>
                        <span style={{ color: C.cyan }}>"subject"</span>:{" "}
                        <span style={{ color: C.amber }}>"{form.subject}"</span>,
                      </div>
                    )}
                    {form.message && (
                      <div style={{ paddingLeft: 16 }}>
                        <span style={{ color: C.cyan }}>"body"</span>:{" "}
                        <span style={{ color: C.amber }}>
                          "
                          {form.message.length > 40
                            ? form.message.slice(0, 40) + "..."
                            : form.message}
                          "
                        </span>
                      </div>
                    )}
                    <div>{"}"}</div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Right — Info + Social links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Quick info card */}
          <div
            style={{
              background: C.bgCard,
              border: `1px solid ${C.border}`,
              borderRadius: 8,
              padding: "1.5rem",
            }}
          >
            <div
              style={{
                fontFamily: MONO,
                fontSize: "0.7rem",
                color: C.dim,
                marginBottom: "1rem",
              }}
            >
              {"// contact info"}
            </div>
            <div style={{ fontFamily: MONO, fontSize: "0.78rem", lineHeight: 2.2 }}>
              <div>
                <span style={{ color: C.cyan }}>email</span>
                <span style={{ color: C.dim }}> : </span>
                <a
                  href={`mailto:${DATA.email}`}
                  style={{ color: C.green, textDecoration: "none" }}
                >
                  {DATA.email}
                </a>
              </div>
              <div>
                <span style={{ color: C.cyan }}>phone</span>
                <span style={{ color: C.dim }}> : </span>
                <span style={{ color: C.greenDim }}>{DATA.phone}</span>
              </div>
              <div>
                <span style={{ color: C.cyan }}>location</span>
                <span style={{ color: C.dim }}> : </span>
                <span style={{ color: C.greenDim }}>New Delhi, India</span>
              </div>
              <div>
                <span style={{ color: C.cyan }}>status</span>
                <span style={{ color: C.dim }}> : </span>
                <span style={{ color: C.green }}>● available</span>
              </div>
            </div>
          </div>

          {/* Social links */}
          {DATA.links.map((l, i) => (
            <SocialLink
              key={l.key}
              link={l}
              index={i}
              visible={showContent && visible}
            />
          ))}

          {/* Resume download */}
          <a
            href="/BHAVYA_GULATI_Resume.pdf"
            download="BHAVYA_GULATI_Resume.pdf"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.6rem",
              padding: "1rem",
              background: "rgba(0,255,136,0.08)",
              border: `1px solid ${C.greenFaint}`,
              borderRadius: 6,
              fontFamily: MONO,
              fontSize: "0.8rem",
              fontWeight: 600,
              color: C.green,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,255,136,0.14)";
              e.currentTarget.style.boxShadow = "0 0 15px rgba(0,255,136,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0,255,136,0.08)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            ⬇ download resume.pdf
          </a>
        </div>
      </div>
    </section>
  );
}
