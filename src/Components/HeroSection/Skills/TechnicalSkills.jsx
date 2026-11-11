import { useLayoutEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws } from "@fortawesome/free-brands-svg-icons";
import { faCloudArrowUp, faCode, faDatabase, faDiagramProject, faLayerGroup, faServer, faToolbox } from "@fortawesome/free-solid-svg-icons";
import { SiDocker, SiExpress, SiGit, SiGithub, SiGithubactions, SiJavascript, SiLinux, SiMongodb, SiMongoose, SiNextdotjs, SiNginx, SiNodedotjs, SiPostgresql, SiPostman, SiPrisma, SiReact, SiTypescript } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedContent from "../../ReactBits/AnimatedContent";

gsap.registerPlugin(ScrollTrigger);

const skillIcons = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "AWS EC2": faAws,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  "Prisma ORM": SiPrisma,
  Mongoose: SiMongoose,
  Docker: SiDocker,
  Nginx: SiNginx,
  "CI/CD": SiGithubactions,
  Linux: SiLinux,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
};

const skillColors = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  "React.js": "#61dafb",
  "Next.js": "#000000",
  "Node.js": "#5fa04e",
  "Express.js": "#000000",
  "AWS EC2": "#ff9900",
  MongoDB: "#47a248",
  PostgreSQL: "#4169e1",
  "Prisma ORM": "#2d3748",
  Mongoose: "#880000",
  Docker: "#2496ed",
  Nginx: "#009639",
  "CI/CD": "#2088ff",
  Linux: "#fcc624",
  Git: "#f05032",
  GitHub: "#181717",
  Postman: "#ff6c37",
};

const backedLogos = new Set(["Next.js", "Express.js", "Prisma ORM", "GitHub"]);

const groups = [
  { title: "Languages", icon: faCode, skills: ["JavaScript", "TypeScript"] },
  { title: "Frontend", icon: faLayerGroup, skills: ["React.js", "Next.js"] },
  { title: "Backend", icon: faServer, skills: ["Node.js", "Express.js", "REST APIs"] },
  { title: "Databases", icon: faDatabase, skills: ["MongoDB", "PostgreSQL", "Prisma ORM", "Mongoose"] },
  { title: "Cloud & DevOps", icon: faCloudArrowUp, skills: ["AWS EC2", "Docker", "Nginx", "CI/CD", "Linux"] },
  { title: "Architecture", icon: faDiagramProject, skills: ["Multi-Tenant SaaS", "Database Design", "System Architecture"] },
  { title: "Tools", icon: faToolbox, skills: ["Git", "GitHub", "Postman"] },
];

const TechnicalSkills = () => {
  const section = useRef(null);

  const moveIcons = (event) => {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    gsap.set(card.querySelector(".skill-icon"), { x: x * 16, y: y * 16, rotate: x * 7 });
    gsap.set(card.querySelectorAll(".skill-chip svg"), { x: x * 4, y: y * 4 });
  };

  const resetIcons = (event) => {
    gsap.to(event.currentTarget.querySelectorAll(".skill-icon,.skill-chip svg"), { x: 0, y: 0, rotate: 0, duration: 0.65, ease: "back.out(2)", overwrite: "auto" });
  };

  const dropCard = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      event.currentTarget,
      { y: gsap.utils.random(-24, -14), rotate: gsap.utils.random(-1.4, 1.4), scale: 0.985 },
      { y: 0, rotate: 0, scale: 1, duration: 0.75, ease: "bounce.out", overwrite: true },
    );
  };

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: { trigger: section.current, start: "top 72%", once: true },
        });
        timeline.from(".expertise-heading > *", { y: 35, opacity: 0, duration: 0.65, stagger: 0.1, ease: "power3.out" });
      });
    }, section);
    return () => context.revert();
  }, []);

  return (
    <section ref={section} id="skills" className="section">
      <div className="section-heading expertise-heading"><p>04 / Expertise</p><h2>Modern tools. Production mindset.</h2></div>
      <div className="skills-grid">
        {groups.map(({ title, icon, skills }, index) => (
          <AnimatedContent
            className="skill-card-shell"
            key={title}
            distance={36}
            duration={0.7}
            ease="power3.out"
            delay={index * 0.07}
            threshold={0.12}
          >
          <article className={`skill-card${title === "Tools" ? " skill-card-tools" : ""}`} onPointerEnter={dropCard} onPointerMove={moveIcons} onPointerLeave={resetIcons}>
            <div className="skill-title">
              <span className="skill-icon" aria-hidden="true"><FontAwesomeIcon icon={icon} /></span>
              <h3>{title}</h3>
            </div>
            <div className="skill-list">
              {skills.map((skill) => {
                const Logo = skillIcons[skill];
                return (
                  <span className={`skill-chip${title === "Tools" ? " tool-icon" : ""}`} key={skill} aria-label={title === "Tools" ? skill : undefined} title={title === "Tools" ? skill : undefined}>
                    {typeof Logo === "function" ? (
                      <Logo className={`brand-logo${backedLogos.has(skill) ? " logo-backed" : ""}`} style={{ color: skillColors[skill] }} aria-hidden="true" />
                    ) : (
                      <FontAwesomeIcon icon={Logo || icon} className={skillColors[skill] ? "brand-logo" : ""} style={{ color: skillColors[skill] }} aria-hidden="true" />
                    )}
                    {title !== "Tools" && skill}
                  </span>
                );
              })}
            </div>
          </article>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
