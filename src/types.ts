// src/types.ts
import { Transition, Easing, TargetAndTransition, Variants } from "framer-motion";
import { Icon as LucideIcon } from 'lucide-react';

// Declare google on the Window interface
declare global {
  interface Window {
    google: any; // Declaring as 'any' since @types/google.maps is not installed
  }
}

// Define a more precise EaseType based on framer-motion's Easing
export type CustomEaseType = Easing | Easing[];

// Define the structure for individual variant states, compatible with TargetAndTransition
export interface ItemVariant extends TargetAndTransition {
  opacity: number;
  y: number;
  transition?: Transition & {
    ease?: CustomEaseType;
  };
}

// Define CustomItemVariants as a collection of these ItemVariant states
// This interface extends Variants to ensure compatibility with framer-motion components
export interface CustomItemVariants extends Variants {
  hidden: ItemVariant;
  visible: ItemVariant;
}

// Interfaces for constants.ts
export interface PlanningModule {
  title: string;
  icon: typeof LucideIcon;
  desc: string;
  link: string;
}

export interface SafetyTopic {
  title: string;
  description: string;
  icon: typeof LucideIcon;
  link: string;
  color: string;
}

export interface Place {
  name: string;
  altitude: string;
  description: string;
  image: string;
  link: string;
}

export interface ItineraryCard {
  days: number;
  title: string;
  desc: string;
  difficulty: string;
  difficultyColor: string;
  link: string;
  highlights: string[];
  popular?: boolean;
}

export interface TrekStat {
  label: string;
  value: string;
  sub: string;
  icon: typeof LucideIcon;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  elevation: string;
  duration: string;
  highlights?: string[];
  lodging?: string;
  meals?: string;
}

export interface Itinerary {
  id: string;
  name: string;
  duration: string;
  difficulty: string;
  description: string;
  days: ItineraryDay[];
}

export interface GearItem {
  category: string;
  items: string[];
}

export type FAQCategory = 'Common' | 'Booking' | 'Preparation' | 'Safety' | 'Permits';

export interface FAQ {
  category: FAQCategory;
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
  author: string;
  category: string;
}

export interface TrustPillar {
  title: string;
  description: string;
  icon: typeof LucideIcon;
}
