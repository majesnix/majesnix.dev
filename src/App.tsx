import Background from "./components/Background";
import Card from "./components/Card";
import Coin from "./components/Coin";
import Container from "./components/Container";
import Description from "./components/Description";
import GithubIcon from "./components/GithubIcon";
import Name from "./components/Name";
import React from "react";
import Subtext from "./components/Subtext";

// @ts-ignore
import dcl from "./assets/images/dcl.png";

function App() {
  return (
    <Container>
      <Background />
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
          <span style={{ fontWeight: "normal" }}>
            [ Learning: Scala ]
          </span>
          <br />
          <br />
          I&apos;m also interested in:
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>
            [ Administration (Windows/Linux), Nginx, Docker, Azure, Azure
            DevOps, AWS, My Hamster ]
          </span>
        </Description>
      </Card>
      <div style={{ height: "40px" }} />
    </Container>
  );
}

export default App;
