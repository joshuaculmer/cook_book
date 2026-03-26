import type { Category } from '@/components/CategoryCard/CategoryCard.types';

export const RECIPE_CATEGORIES: readonly Category[] = [
  {
    id: 'breakfast',
    label: 'Breakfast',
    imageSrc: '/images/category-1.jpg',
    imageAlt: 'Breakfast dishes',
  },
  {
    id: 'mains',
    label: 'Mains',
    imageSrc: '/images/category-2.jpg',
    imageAlt: 'Main course dishes',
  },
  {
    id: 'desserts',
    label: 'Desserts',
    imageSrc: '/images/category-3.jpg',
    imageAlt: 'Desserts and sweets',
  },
  {
    id: 'drinks',
    label: 'Drinks',
    imageSrc: '/images/category-4.jpg',
    imageAlt: 'Beverages and drinks',
  },
];
