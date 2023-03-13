import bgImage from "../assets/images/chibi.jpg";
import { styled } from "solid-styled-components";

const Background = styled("div")`
  height: 380px;
  background-position-x: 50%;
  background-position-y: 60%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${bgImage});
`;

export default Background;
