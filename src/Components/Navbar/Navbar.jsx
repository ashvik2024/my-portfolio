import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <a className="wordmark" href="#top" aria-label="Vikas Kumar, home">VK<span>.</span></a>
      <div className="nav-links">
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="mailto:vk3261019@gmail.com" className="nav-cta">Contact</a>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
