// @ts-ignore
import image from "../assets/images/chibi.JPG";
import styled from "styled-components";

const Background = styled.div`
  height: 380px;
  background-position-x: 50%;
  background-position-y: 60%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${image});
  }
`;

export default Background;
