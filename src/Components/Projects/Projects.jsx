import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-black dark:text-gray-300 mb-3 sm:mb-5">projects.</h2>

      {/* Project 1 */}
      <div className="border-l border-black pl-4 my-6 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <a
              href="https://random-meme-genrator-tau.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <h3 className="text-xl sm:text-2xl font-semibold">
                Random Meme Generator
              </h3>
            </a>
            <p>A simple web app to generate random memes.</p>
          </div>
          <div className="flex gap-2">
            <a
              href="https://random-meme-genrator-tau.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-3 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                className="text-lg sm:text-xl"
              />
            </a>
            {/* <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-3 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              <FontAwesomeIcon icon={faGithub} className="text-lg sm:text-xl" />
            </a> */}
          </div>
        </div>
        <p>
          This project allows users to generate random memes on the fly. Built
          using React and external APIs.
        </p>
        <div className="flex gap-2">
          <div className="flex gap-2 flex-wrap mt-2">
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition border border-gray-500 text-sm font-medium">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition border border-gray-500 text-sm font-medium">
              Tailwind
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition border border-gray-500 text-sm font-medium">
              API
            </span>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="border-l border-black pl-4 my-6 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <a
              href="https://pokedex-ashvik.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <h3 className="text-xl sm:text-2xl font-semibold">Pokedex</h3>
            </a>
            <p>An interactive Pokedex to search and view Pokémon details.</p>
          </div>
          <div className="flex gap-2">
            <a
              href="https://pokedex-ashvik.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-3 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                className="text-lg sm:text-xl"
              />
            </a>
            {/* <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-3 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              <FontAwesomeIcon icon={faGithub} className="text-lg sm:text-xl" />
            </a> */}
          </div>
        </div>
        <p>
          A Pokedex app built with React, consuming the Pokémon API to display
          data dynamically.
        </p>
        <div className="flex gap-2">
          <div className="flex gap-2 flex-wrap mt-2">
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition border border-gray-500 text-sm font-medium">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition border border-gray-500 text-sm font-medium">
              Tailwind
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition border border-gray-500 text-sm font-medium">
              API
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
