import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"; // GitHub & LinkedIn icons
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";


const SocialLinks = () => {
  return (
    <div>
      {/* Social Links */}
      <ul className="flex gap-4 mt-4 mb-5">
        <li>
          <a
            href="https://github.com/ashvik2024"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>
        </li>
        <li>
          <a
            href="www.linkedin.com/in/vikas-kumar-delhi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1SPBSMdlMTWkzZ5CaJOjFobcC59pV7_IP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            <FontAwesomeIcon icon={faFilePdf} />
            Resume
          </a>
        </li>
        <li>
          <a
            href="mailto:vk3261019@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            Email
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
