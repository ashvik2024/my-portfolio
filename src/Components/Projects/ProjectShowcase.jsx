import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard, faMobileScreenButton, faRepeat } from "@fortawesome/free-solid-svg-icons";
import { SiDocker, SiMongodb, SiNextdotjs, SiNginx, SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiTypescript } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const projectTech = {
  "Next.js": [SiNextdotjs, "#000000"],
  React: [SiReact, "#61dafb"],
  "Node.js": [SiNodedotjs, "#5fa04e"],
  PostgreSQL: [SiPostgresql, "#4169e1"],
  Prisma: [SiPrisma, "#2d3748"],
  TypeScript: [SiTypescript, "#3178c6"],
  MongoDB: [SiMongodb, "#47a248"],
  Docker: [SiDocker, "#2496ed"],
  Nginx: [SiNginx, "#009639"],
};

const projectUtility = {
  Subscriptions: [faRepeat, "#8b5cf6"],
  Payments: [faCreditCard, "#16a34a"],
  "Responsive UI": [faMobileScreenButton, "#0ea5e9"],
};

const projects = [
  {
    title: "Gharr Se",
    type: "Food Subscription Platform",
    description: "Fresh home-cooked vegetarian tiffin plans with trial meals, flexible skips, and delivery availability across South Delhi.",
    stack: ["Next.js", "Subscriptions", "Payments", "Responsive UI"],
    url: "https://www.gharrse.food/",
    image: "/projects/gharrse.png",
    tone: "coral",
  },
  {
    title: "ProSca QMS",
    type: "Quality Manufacturing SaaS",
    description: "A multi-tenant quality manufacturing platform that streamlines secure workflows, role-based access, subscriptions, and business processes.",
    stack: ["React", "Node.js", "PostgreSQL", "Prisma", "AWS"],
    url: "https://proscaqms.com/",
    image: "/projects/prosca-qms.png",
    tone: "neutral",
  },
  {
    title: "ProSca EGP",
    type: "Export Growth Platform",
    description: "A B2B SaaS platform that helps Indian MSMEs assess export readiness and unlock global growth through a scalable digital workflow.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Docker", "Nginx"],
    url: "https://proscaegp.com/",
    image: "/projects/prosca-egp.png",
    tone: "blue",
  },
];

const ProjectShowcase = () => {
  const section = useRef(null);
  const carousel = useRef(null);
  const drag = useRef({ active: false, x: 0, scroll: 0 });

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".project-showcase .section-heading", {
          y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: section.current, start: "top 75%" },
        });
        gsap.from(".project-card", {
          y: 80, opacity: 0, rotateY: 8, duration: 0.9, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: carousel.current, start: "top 82%" },
        });
      });
    }, section);
    return () => context.revert();
  }, []);

  const startDrag = (event) => {
    drag.current = { active: true, x: event.clientX, scroll: carousel.current.scrollLeft };
    carousel.current.setPointerCapture(event.pointerId);
  };

  const moveDrag = (event) => {
    if (drag.current.active) carousel.current.scrollLeft = drag.current.scroll - (event.clientX - drag.current.x);
  };

  return (
    <section ref={section} id="projects" className="section project-showcase">
      <div className="section-heading">
        <p>02 / Selected work</p>
        <h2>Built to move ideas into production.</h2>
      </div>
      <div
        ref={carousel}
        className="project-carousel"
        aria-label="Selected projects. Drag horizontally to browse."
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={() => { drag.current.active = false; }}
        onPointerCancel={() => { drag.current.active = false; }}
      >
        {projects.map((project, index) => (
          <article
            className={`project-card project-card-${project.tone}`}
            key={project.title}
            onPointerMove={(event) => {
              if (event.pointerType !== "mouse") return;
              const rect = event.currentTarget.getBoundingClientRect();
              gsap.set(event.currentTarget, {
                rotateX: (event.clientY - rect.top) / rect.height * -8 + 4,
                rotateY: (event.clientX - rect.left) / rect.width * 8 - 4,
              });
            }}
            onPointerLeave={(event) => gsap.to(event.currentTarget, { rotateX: 0, rotateY: 0, duration: 0.45, ease: "power3.out", overwrite: "auto" })}
          >
            <div className="project-visual" aria-hidden="true">
              <span>0{index + 1}</span>
              <div className="project-window">
                <i /><i /><i />
                <img src={project.image} alt="" draggable="false" />
              </div>
            </div>
            <div className="project-copy">
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div>
                {project.stack.map((item) => {
                  const [Logo, color] = projectTech[item] || [];
                  const [utilityIcon, utilityColor] = projectUtility[item] || [];
                  return (
                    <span key={item}>
                      {item === "AWS" ? (
                        <FontAwesomeIcon icon={faAws} style={{ color: "#ff9900" }} />
                      ) : Logo ? (
                        <Logo style={{ color }} />
                      ) : utilityIcon ? (
                        <FontAwesomeIcon icon={utilityIcon} style={{ color: utilityColor }} />
                      ) : null}
                      {item}
                    </span>
                  );
                })}
              </div>
              <a href={project.url} target="_blank" rel="noreferrer" onPointerDown={(event) => event.stopPropagation()}>
                View live project <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="drag-hint">← Drag to explore →</p>
    </section>
  );
};

export default ProjectShowcase;
