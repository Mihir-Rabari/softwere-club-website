export type Event = {
  title: string;
  date: string;
  description: string;
  link?: string;
};

export const upcoming: Event[] = [
  {
    title: "AI/ML Bootcamp",
    date: "Oct 15, 2025",
    description: "Hands-on intro to ML, data pipelines, and model deployment.",
    link: "#",
  },
  {
    title: "Open Source Sprint",
    date: "Nov 03, 2025",
    description: "Beginner-friendly contributions to real OSS projects.",
  },
];

export const past: Event[] = [
  {
    title: "Hack the Matrix 2.0",
    date: "Aug 2025",
    description: "48-hour hackathon with 120+ participants.",
  },
  {
    title: "Web3 101 Workshop",
    date: "Jul 2025",
    description: "Intro to smart contracts and decentralized apps.",
  },
];
