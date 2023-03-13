import { FaBrandsGithub } from "solid-icons/fa";

const GithubIcon = () => {
  return (
    <a
      href="https://github.com/majesnix"
      target="_blank"
      rel="noreferrer"
      style={{
        "text-decoration": "none",
        color: "#999",
      }}
    >
      <FaBrandsGithub size={32} />
    </a>
  );
};

export default GithubIcon;
