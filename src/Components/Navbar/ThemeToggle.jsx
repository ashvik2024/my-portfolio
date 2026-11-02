import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-400/40 hover:scale-105 transition-all"
      aria-label={darkMode ? "Use light theme" : "Use dark theme"}
    >
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-sm" />
    </button>
  );
}

export default ThemeToggle;
