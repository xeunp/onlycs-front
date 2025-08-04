import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility function to format price
export function formatPrice(price: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
  }).format(price);
}

// Utility function to get rarity color
export function getRarityColor(rarity: string): string {
  const rarityColors: Record<string, string> = {
    'Consumer Grade': 'text-gray-400',
    'Industrial Grade': 'text-blue-400',
    'Mil-Spec Grade': 'text-purple-400',
    'Restricted': 'text-pink-400',
    'Classified': 'text-red-400',
    'Covert': 'text-yellow-400',
    'Contraband': 'text-orange-400',
  };
  return rarityColors[rarity] || 'text-gray-400';
}

// Utility function to generate slug from name
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Utility function to capitalize first letter
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
