import { FaBrandsGithub } from "solid-icons/fa";
import { styled } from "solid-styled-components";

import { profile } from "../content";

const Link = styled("a")`
  display: inline-flex;
  padding: 8px;
  border-radius: 50%;
  color: var(--text-muted);
  transition: color var(--duration) var(--ease);

  &:hover,
  &:focus-visible {
    color: var(--accent);
  }

  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`;

const GithubIcon = () => (
  <Link
    href={profile.github}
    target="_blank"
    rel="noreferrer"
    aria-label="majesnix on GitHub"
  >
    <FaBrandsGithub size={28} />
  </Link>
);

export default GithubIcon;
