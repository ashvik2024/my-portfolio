import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import { useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const glow = useRef(null);
  const cursor = useRef(null);
  const cursorMotion = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (glow.current && cursor.current) {
      cursorMotion.current = {
        glowX: gsap.quickTo(glow.current, "x", { duration: 0.55, ease: "power3.out" }),
        glowY: gsap.quickTo(glow.current, "y", { duration: 0.55, ease: "power3.out" }),
        cursorX: gsap.quickTo(cursor.current, "x", { duration: 0.22, ease: "power3.out" }),
        cursorY: gsap.quickTo(cursor.current, "y", { duration: 0.22, ease: "power3.out" }),
      };
    }

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, anchors: true });
    const updateScroll = (time) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(updateScroll);

    const context = gsap.context(() => {
      ["#experience", "#education"].forEach((selector) => {
        gsap.from(`${selector} .section-heading > *`, {
          y: 35, opacity: 0, duration: 0.75, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: selector, start: "top 75%", once: true },
        });
      });
      gsap.from(".role", {
        y: 45, opacity: 0, duration: 0.75, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".timeline", start: "top 78%", once: true },
      });
      gsap.from(".education-card", {
        y: 45, opacity: 0, scale: 0.98, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".education-card", start: "top 85%", once: true },
      });
      gsap.to(".grid-layer", {
        opacity: 0.65,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom 35%", scrub: 0.8 },
      });
    });

    return () => {
      context.revert();
      cursorMotion.current = null;
      gsap.ticker.remove(updateScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <div
      className="site-shell"
      onPointerMove={(event) => {
        if (event.pointerType === "mouse" && cursorMotion.current) {
          cursorMotion.current.glowX(event.clientX);
          cursorMotion.current.glowY(event.clientY);
          cursorMotion.current.cursorX(event.clientX);
          cursorMotion.current.cursorY(event.clientY);
          glow.current.style.opacity = "1";
          cursor.current.style.opacity = "1";
          cursor.current.classList.toggle("cursor-over-link", Boolean(event.target.closest("a,button")));
        }
      }}
      onPointerLeave={() => {
        if (glow.current) glow.current.style.opacity = "0";
        if (cursor.current) cursor.current.style.opacity = "0";
      }}
    >
      <div className="grid-layer" aria-hidden="true" />
      <div ref={glow} className="mouse-glow" aria-hidden="true" />
      <div ref={cursor} className="cursor-trail" aria-hidden="true" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Navbar />
      <main><HeroSection /></main>
      <footer>
        <span>Vikas Kumar · Full Stack Developer</span>
        <a href="mailto:vk3261019@gmail.com">Let’s build something useful →</a>
      </footer>
    </div>
  );
}

export default App;
