import type { Component } from "solid-js";

import Card from "./components/Card";
import Coin from "./components/Coin";
import Container from "./components/Container";
import Description from "./components/Description";
import GithubIcon from "./components/GithubIcon";
import Hero from "./components/Hero";
import Name from "./components/Name";
import Subtext from "./components/Subtext";
import Tags from "./components/Tags";
import { profile } from "./content";

const App: Component = () => (
  <Container>
    <Hero />
    <Card>
      <Coin />
      <Name>{profile.name}</Name>
      <Subtext>{profile.role}</Subtext>
      <GithubIcon />
      <Description>{profile.intro}</Description>
      <Tags />
    </Card>
  </Container>
);

export default App;
