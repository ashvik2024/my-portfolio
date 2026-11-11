import About from "./About/About";
import TechnicalSkills from "./Skills/TechnicalSkills";
import Education from "./Education/Education";
import Projects from "../Projects/Projects";
import ProjectShowcase from "../Projects/ProjectShowcase";
import GitHubActivity from "../GitHubActivity";

const HeroSection = () => (
  <div id="top" className="content">
    <header className="hero">
      <div className="availability"><span /> Available for impactful opportunities</div>
      <p className="eyebrow">Full Stack Developer · Technical Lead</p>
      <h1>Building reliable SaaS products from <em>idea to production.</em></h1>
      <p className="hero-copy">
        I’m Vikas Kumar, a full stack engineer in New Delhi. I design, build,
        deploy, and maintain scalable web platforms across frontend, backend,
        databases, and cloud infrastructure.
      </p>
      <About />
      <div className="hero-stats" aria-label="Career highlights">
        <div><strong>1+</strong><span>Years experience</span></div>
        <div><strong>2</strong><span>Enterprise SaaS platforms</span></div>
        <div><strong>Full stack</strong><span>Product to production</span></div>
      </div>
    </header>
    <Projects />
    <ProjectShowcase />
    <GitHubActivity />
    <TechnicalSkills />
    <Education />
  </div>
);

export default HeroSection;
