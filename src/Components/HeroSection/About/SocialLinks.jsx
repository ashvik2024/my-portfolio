import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";

const SocialLinks = () => {
  return (
    <div>
      {/* Social Links */}
      <ul className="flex flex-wrap gap-3 mt-4 mb-5">
        <li>
          <a
            href="https://github.com/ashvik2024"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 bg-black text-white text-sm sm:text-base rounded-lg transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            <FontAwesomeIcon icon={faGithub} className="text-xl sm:text-xl" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/vikas-kumar-delhi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 bg-black text-white text-sm sm:text-base rounded-lg transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="text-xl sm:text-xl" />
          </a>
        </li>
                <li>
          <a
            href="mailto:vk3261019@gmail.com"
            className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-black text-white text-sm sm:text-base rounded-lg transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-xl sm:text-xl" />
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1SPBSMdlMTWkzZ5CaJOjFobcC59pV7_IP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-black text-white text-sm sm:text-base rounded-lg transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200 font-outfit" 
          >
            <FontAwesomeIcon icon={faFilePdf} className="text-xl sm:text-xl" />
            Resume
          </a>
        </li>

      </ul>
    </div>
  );
};

export default SocialLinks;
