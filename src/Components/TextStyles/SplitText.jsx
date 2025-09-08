import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const SplitText = ({ text, className = "", delay = 100, duration = 0.6 }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const chars = ref.current.querySelectorAll(".char");

    // Reset before animation
    gsap.set(chars, { opacity: 0, y: 40 });

    // Animate
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration,
      stagger: delay / 1000,
      ease: "power3.out",
    });
  }, [text, delay, duration]);

  return (
    <h1 ref={ref} className={`${className}`}>
      {text.split("").map((char, i) => (
        <span key={i} className="char inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

export default SplitText;
