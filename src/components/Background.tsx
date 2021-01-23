//@ts-ignore
import image from "../assets/images/town.jpg";
import styled from "styled-components";

export default styled.div`
  height: 380px;
  position: relative;
  background-position: center center;
  background-size: cover;
  margin: 0;
  padding: 0;
  border: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background-image: url(${image});
`;
