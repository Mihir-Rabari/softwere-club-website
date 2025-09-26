export type Member = {
  name: string;
  role: string;
  image?: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
};

export const committee: Member[] = [
  {
    name: "Aarav Sharma",
    role: "President",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Isha Patel",
    role: "Vice President",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Rohit Verma",
    role: "Tech Lead",
    github: "https://github.com",
  },
  {
    name: "Neha Gupta",
    role: "Events Lead",
    instagram: "https://instagram.com",
  },
  {
    name: "Karan Mehta",
    role: "Design Lead",
  },
  {
    name: "Priya Nair",
    role: "Community Manager",
  },
];
