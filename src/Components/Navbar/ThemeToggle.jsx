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
      className="flex items-center justify-center w-8 h-8 rounded-md 
                dark:gray-800 
                 border border-gray-300 dark:border-gray-600
                 text-yellow-500 dark:text-gray-200
                  hover:scale-110 transition-all duration-300"
    >
      <FontAwesomeIcon icon={darkMode ? faMoon : faSun} className="text-sm" />
    </button>
  );
}

export default ThemeToggle;
