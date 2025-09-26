export type Achievement = {
  title: string;
  by: string;
  year: string;
  description?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Winners - City HackFest",
    by: "Team ByteForge",
    year: "2025",
    description: "Built an AI-powered campus assistant app in 24 hours.",
  },
  {
    title: "Top 10 - National Coding League",
    by: "Rohit, Isha",
    year: "2024",
  },
  {
    title: "OSS Contributions",
    by: "Club Members",
    year: "2024-25",
    description: "50+ merged PRs across popular GitHub repos.",
  },
];
