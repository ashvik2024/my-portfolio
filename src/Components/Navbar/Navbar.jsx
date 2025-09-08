import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
<nav className="flex items-center justify-center mb-20">
  <div className="flex justify-between items-center w-full max-w-5xl">
    {/* Logo */}
    <h1 className="hover:text-green-500 text-3xl font-semibold">
      vikas.
    </h1>

    {/* Nav Links + Theme Toggle */}
    <div className="flex items-center gap-6">
      <ul className="flex gap-6">
        <li>
          <a href="../HeroSection/TechnicalSkills.jsx" className="hover:text-green-500 font-outfit font-bold">
            skills
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-green-500 font-outfit font-bold">
            projects
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-green-500 font-outfit font-bold">
            education
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-green-500 font-outfit font-bold">
            contact
          </a>
        </li>
      </ul>

      {/* Dark/Light Theme Toggle Button */}
      <ThemeToggle />
    </div>
  </div>
</nav>

  );
}

export default Navbar;
