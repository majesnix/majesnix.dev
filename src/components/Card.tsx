import { styled } from "solid-styled-components";

const Card = styled("section")`
  position: relative;
  width: min(100% - 48px, 820px);
  margin: -40px auto 0;
  padding: 0 32px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-card);
  box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    width: calc(100% - 32px);
    padding: 0 20px 32px;
  }
`;

export default Card;
