// @ts-ignore
import image from "../assets/images/yui.jpg";
import styled from "styled-components";

const Background = styled.div`
  height: 380px;
  position: relative;
  background-position: center center;
  background-size: cover;
  margin: 0;
  padding: 0;
  border: 0;
  display: flex;
  align-items: center;
  background-position: 0px -400px;
  width: 100%;
  background-image: url(${image});
`;

export default Background;
