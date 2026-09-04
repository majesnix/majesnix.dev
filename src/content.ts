export interface Tag {
  label: string;
  /** Render in the accent color. Reserved for the one tag that matters most. */
  highlight?: boolean;
}

export interface TagGroup {
  label: string;
  items: Tag[];
}

const tag = (label: string, highlight = false): Tag => ({ label, highlight });

export const profile = {
  name: "Dominic Claßen",
  role: "Manager / Software Engineer",
  intro: "I write code as a hobby and I write code as my job.",
  description:
    "Dominic Claßen, manager and software engineer. Scala and TypeScript by day and by night, plus one very photogenic hamster.",
  github: "https://github.com/majesnix",
} as const;

export const stacks: TagGroup[] = [
  {
    label: "Daily drivers",
    items: [
      tag("AI"),
      tag("Claude Code"),
      tag("Scala"),
      tag("TypeScript"),
      tag("Node.js"),
      tag("React"),
      tag("SolidJS"),
      tag("Angular"),
      tag("NestJS"),
      tag("Pekko"),
      tag("Doobie"),
    ],
  },
  {
    label: "Also into",
    items: [
      tag("Linux & Windows admin"),
      tag("Nginx"),
      tag("Docker"),
      tag("Kubernetes"),
      tag("Azure"),
      tag("Azure DevOps"),
      tag("AWS"),
      tag("GitHub Actions"),
      tag("My hamster", true),
    ],
  },
];
