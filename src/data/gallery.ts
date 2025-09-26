export interface GalleryItem {
  id: string;
  title: string;
  event: string;
  image: string;
}

export const gallery: GalleryItem[] = [
  {
    id: '1',
    title: 'Hackathon 2023',
    event: 'Annual Coding Competition',
    image: '/images/events/hackathon-2023.jpg',
  },
  {
    id: '2',
    title: 'Intro to Web Dev',
    event: 'Workshop Series',
    image: '/images/events/web-dev-workshop.jpg',
  },
  {
    id: '3',
    title: 'AI Workshop',
    event: 'Machine Learning Basics',
    image: '/images/events/ai-workshop.jpg',
  },
  {
    id: '4',
    title: 'Open Source Day',
    event: 'Contributor Workshop',
    image: '/images/events/open-source-day.jpg',
  },
  {
    id: '5',
    title: 'Tech Talk',
    event: 'Industry Experts Panel',
    image: '/images/events/tech-talk.jpg',
  },
  {
    id: '6',
    title: 'Code Retreat',
    event: 'Weekend Coding Challenge',
    image: '/images/events/code-retreat.jpg',
  },
];
