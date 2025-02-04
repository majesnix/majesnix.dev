import type { Component } from "solid-js";
import Background from "./components/Background";
import Card from "./components/Card";
import Coin from "./components/Coin";
import Container from "./components/Container";
import Description from "./components/Description";
import GithubIcon from "./components/GithubIcon";
import Name from "./components/Name";
import Subtext from "./components/Subtext";

import dcl from "./assets/images/dcl.png";

const App: Component = () => {
  return (
    <Container>
      <Background />
      <Card>
        <Coin src={dcl} />
        <Name>{import.meta.env.VITE_APP_NAME}</Name>
        <Subtext>SOFTWARE ENGINEER</Subtext>
        <GithubIcon />
        <Description>
          I write code as a hobby and I write code as my job.
          <br />
          <br />
          <span style={{ "font-weight": "bold" }}>
            [ Typescript, Node.js, React, Angular, Nest.js, Scala, Pekko, Doobie
            ]
          </span>
          <br />
          <span style={{ "font-weight": "normal" }}>[ Learning: SolidJS ]</span>
          <br />
          <br />
          I&apos;m also interested in:
          <br />
          <br />
          <span style={{ "font-weight": "bold" }}>
            [ Administration (Windows/Linux), Nginx, Docker, Azure, Azure
            DevOps, AWS, Kubernetes, Github Actions, My Hamster ]
          </span>
        </Description>
      </Card>
      <div style={{ height: "40px" }} />
    </Container>
  );
};

export default App;
