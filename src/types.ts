export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  elevation?: string;
  duration?: string;
}

export interface Itinerary {
  id: string;
  name: string;
  duration: string;
  difficulty: 'Moderate' | 'Challenging' | 'Strenuous';
  description: string;
  days: ItineraryDay[];
}

export interface GearItem {
  category: string;
  items: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  author?: string;
  category?: string;
}
