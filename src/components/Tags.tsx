import { For } from "solid-js";
import { styled } from "solid-styled-components";

import { stacks, type Tag as TagData } from "../content";

const Groups = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 640px;
  margin-top: 32px;
`;

const GroupLabel = styled("h2")`
  margin: 0 0 10px;
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-dim);
`;

const List = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Pill = styled("li")`
  padding: 6px 13px;
  font-size: 14px;
  line-height: 1.3;
  color: var(--text);
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-pill);
  transition: border-color var(--duration) var(--ease);

  &:hover {
    border-color: var(--accent);
  }

  &.highlight {
    color: var(--accent);
    background-color: var(--accent-soft);
    border-color: var(--accent);
  }
`;

const TagItem = (props: { tag: TagData }) => (
  <Pill classList={{ highlight: props.tag.highlight }}>{props.tag.label}</Pill>
);

const Tags = () => (
  <Groups>
    <For each={stacks}>
      {(group) => (
        <div>
          <GroupLabel>{group.label}</GroupLabel>
          <List>
            <For each={group.items}>{(tag) => <TagItem tag={tag} />}</For>
          </List>
        </div>
      )}
    </For>
  </Groups>
);

export default Tags;
