import { C } from "@/lib/theme";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      style={{
        background: C.bg,
        color: C.green,
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Scanline effect */}
      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(transparent, rgba(0,255,136,0.03), transparent)",
          zIndex: 200,
          pointerEvents: "none",
          animation: "scanline 5s linear infinite",
        }}
      />

      {/* Subtle noise overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
          zIndex: 100,
          opacity: 0.6,
        }}
      />

      {/* CRT vignette */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.4) 100%)",
          pointerEvents: "none",
          zIndex: 150,
        }}
      />

      <div style={{ position: "relative", zIndex: 10 }}>
        <Nav />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
