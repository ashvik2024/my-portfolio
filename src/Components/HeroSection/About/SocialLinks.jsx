import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const SocialLinks = () => (
  <div className="hero-actions">
    <a className="primary-button" href="mailto:vk3261019@gmail.com">Get in touch <FontAwesomeIcon icon={faArrowRight} /></a>
    <a href="tel:+919871218981" aria-label="Call Vikas Kumar"><FontAwesomeIcon icon={faPhone} /></a>
    <a href="mailto:vk3261019@gmail.com" aria-label="Email Vikas Kumar"><FontAwesomeIcon icon={faEnvelope} /></a>
    <a className="linkedin-link" href="https://www.linkedin.com/in/vikas-kumar-delhi" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
    <a className="github-link" href="https://github.com/ashvik2024" target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
  </div>
);

export default SocialLinks;
