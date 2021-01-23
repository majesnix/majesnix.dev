import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Card from "./components/Card";
import Coin from "./components/Coin";
import Background from "./components/Background";
import Name from "./components/Name";
import Subtext from "./components/Subtext";
import GithubIcon from "./components/GithubIcon";
import Description from "./components/Description";

//@ts-ignore
import dcl from "./assets/images/dcl.png";

const Container = styled.div`
  min-height: 100vh;
  background-color: #121212;
`;

function App() {
  return (
    <Container>
      <Background />
      <Header />
      <Card>
        <Coin src={dcl} />
        <Name>{process.env.REACT_APP_NAME}</Name>
        <Subtext>SOFTWARE ENGINEER</Subtext>
        <GithubIcon />
        <Description>
          I write code as a hobby and I write code as my job.
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>[ Javascript/Typescript ]</span>
          <br />
          <span style={{ fontWeight: "normal" }}>[ Learning: C#, Rust ]</span>
          <br />
          <br />
          I&apos;m also interested in:
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>
            [ Administration (Windows/Linux), Nginx, Docker, Azure, Azure
            DevOps, AWS ]
          </span>
        </Description>
      </Card>
    </Container>
  );
}

export default App;
