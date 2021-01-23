import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GithubIcon = () => {
  return (
    <a
      href="https://github.com/majesnix"
      target="_blank"
      rel="noreferrer"
      style={{
        textDecoration: "none",
        color: "#999",
      }}
    >
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
  );
};

export default GithubIcon;
