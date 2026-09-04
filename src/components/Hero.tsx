import { For } from "solid-js";
import { styled } from "solid-styled-components";

import hero from "../assets/images/chibi.jpg?w=640;1024;1440&format=avif;webp;jpg&as=picture";

const HERO_ALT = "A small white hamster on a wooden ramp, mid-snack.";

const Frame = styled("div")`
  position: relative;
  height: var(--hero-height);
  overflow: hidden;
  background-color: var(--surface);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 60%;
  }

  /* Dissolve the photo into the page so the card rises out of it. */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      rgba(18, 18, 18, 0) 40%,
      rgba(18, 18, 18, 0.55) 78%,
      var(--bg) 100%
    );
  }

  @media (max-width: 768px) {
    img {
      object-position: 47% 50%;
    }
  }
`;

const Hero = () => (
  <Frame>
    <picture>
      <For each={Object.entries(hero.sources)}>
        {([format, srcset]) => (
          <source type={`image/${format}`} srcset={srcset} sizes="100vw" />
        )}
      </For>
      <img
        src={hero.img.src}
        width={hero.img.w}
        height={hero.img.h}
        alt={HERO_ALT}
        fetchpriority="high"
        decoding="async"
      />
    </picture>
  </Frame>
);

export default Hero;
