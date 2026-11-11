import gsap from "gsap";

const roles = [
  {
    title: "Lead Software Engineer",
    type: "Full Time",
    company: "ProSca Business Solutions",
    date: "Aug 2026 — Present",
    summary: "Leading the development, system architecture, and cloud infrastructure of ProSca QMS and ProSca EGP—enterprise SaaS platforms built for scale.",
    points: [
      "Design scalable multi-tenant architecture, REST APIs, database isolation, and backend services.",
      "Build across React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Prisma, and Mongoose.",
      "Own AWS EC2, Docker Compose, Nginx, Linux servers, and CI/CD workflows for both platforms.",
      "Deliver payments, subscriptions, JWT authentication, RBAC, Meta WhatsApp, and OTP verification.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    type: "Internship",
    company: "ProSca Business Solutions",
    date: "Jan 2026 — Jul 2026",
    summary: "Contributed across the product stack while building the foundation for production SaaS engineering.",
    points: [
      "Developed responsive interfaces with React, Next.js, JavaScript, and TypeScript.",
      "Worked with MongoDB, PostgreSQL, and Prisma ORM for application data.",
      "Implemented authentication, authorization, and frontend-backend integrations.",
    ],
  },
];

const Projects = () => (
  <section id="experience" className="section">
    <div className="section-heading"><p>01 / Experience</p><h2>Engineering products that run in the real world.</h2></div>
    <div className="timeline">
      {roles.map((role) => (
        <article
          className="role"
          key={role.title}
          onPointerMove={(event) => {
            if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            const rect = event.currentTarget.getBoundingClientRect();
            gsap.set(event.currentTarget, {
              "--cursor-x": `${event.clientX - rect.left}px`,
              "--cursor-y": `${event.clientY - rect.top}px`,
              "--cursor-opacity": 1,
            });
          }}
          onPointerLeave={(event) => gsap.to(event.currentTarget, { "--cursor-opacity": 0, duration: 0.5, ease: "power2.out" })}
        >
          <div className="role-meta"><span>{role.date}</span><span>{role.type}</span></div>
          <div>
            <h3>{role.title}</h3><p className="company">{role.company}</p>
            <p className="role-summary">{role.summary}</p>
            <ul>{role.points.map((point) => <li key={point}>{point}</li>)}</ul>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
