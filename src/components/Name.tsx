import { styled } from "solid-styled-components";

const Name = styled("h1")`
  margin: 24px 0 6px;
  font-family: var(--font-display);
  font-size: clamp(28px, 5vw, 38px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: var(--text);
`;

export default Name;
