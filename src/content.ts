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
  repo: "https://github.com/majesnix/majesnix.dev",
} as const;

export type HamsterId = "chibi" | "kumo";

export interface Hamster {
  id: HamsterId;
  name: string;
  title: string;
  alt: string;
  /** object-position for the hero photo on desktop and on phones. */
  focus: string;
  focusMobile: string;
  /** Horizontal center of the click target over the hamster, desktop. */
  eggX: string;
}

/** One is picked at random per visit. The first one is the no-script fallback. */
export const hamsters: Hamster[] = [
  {
    id: "chibi",
    name: "Chibi",
    title: "Chief Morale Officer",
    alt: "A small white hamster on a wooden ramp, mid-snack.",
    focus: "50% 60%",
    focusMobile: "47% 50%",
    eggX: "50%",
  },
  {
    id: "kumo",
    name: "Kumo",
    title: "Head of Hideouts",
    alt: "A small white hamster peeking out of an orange ceramic hideout on sand.",
    focus: "63% 20%",
    focusMobile: "86% 40%",
    eggX: "63%",
  },
];

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
