import { For } from "solid-js";
import { styled } from "solid-styled-components";

import avatar from "../assets/images/dcl.png?w=160;320&format=avif;webp;png&as=picture";

const Medallion = styled("picture")`
  display: block;
  width: var(--coin-size);
  height: var(--coin-size);
  margin-top: calc(var(--coin-size) / -2);
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--surface-raised);
  box-shadow:
    0 0 0 4px var(--surface),
    0 0 0 5px var(--border-strong),
    0 18px 36px -14px rgba(0, 0, 0, 0.8);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Coin = () => (
  <Medallion>
    <For each={Object.entries(avatar.sources)}>
      {([format, srcset]) => (
        <source type={`image/${format}`} srcset={srcset} sizes="160px" />
      )}
    </For>
    <img
      src={avatar.img.src}
      width={avatar.img.w}
      height={avatar.img.h}
      alt=""
      decoding="async"
    />
  </Medallion>
);

export default Coin;
