import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="flex items-center justify-center">
      <div className="flex justify-between items-center w-full max-w-5xl">
        {/* Logo */}
        <h1 className="hover:text-green-500 text-xl font-outfit">
          vikas.
        </h1>

        {/* Nav Links + Theme Toggle */}
        <div className="flex items-center gap-6">
          {/* Nav Links (hidden on small screens) */}
          <ul className="hidden md:flex gap-6">
            <li>
              <a
                href="#skills"
                className="hover:text-green-500 font-outfit font-bold"
              >
                skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-green-500 font-outfit font-bold"
              >
                projects
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="hover:text-green-500 font-outfit font-bold"
              >
                education
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-green-500 font-outfit font-bold"
              >
                contact
              </a>
            </li>
          </ul>

          {/* Theme Toggle (always visible) */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
