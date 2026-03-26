import type { Recipe } from '@/components/RecipeCard/RecipeCard.types';

export const FEATURED_RECIPES: readonly Recipe[] = [
  {
    id: 'classic-roast-chicken',
    title: 'Classic Roast Chicken',
    description:
      'A simple, perfect roast chicken with crispy golden skin and juicy, flavourful meat. Served with pan juices.',
    imageSrc: '/images/recipe-1.jpg',
    imageAlt: 'Golden roast chicken in a cast iron pan',
    prepTime: '20 min',
    servings: 4,
    category: 'Mains',
  },
  {
    id: 'lemon-pasta',
    title: 'Lemon & Herb Pasta',
    description:
      'A bright, weeknight pasta with fresh lemon zest, parsley, and a generous amount of good olive oil.',
    imageSrc: '/images/recipe-2.jpg',
    imageAlt: 'Bowl of pasta with lemon and fresh herbs',
    prepTime: '15 min',
    servings: 2,
    category: 'Pasta',
  },
  {
    id: 'chocolate-olive-oil-cake',
    title: 'Chocolate Olive Oil Cake',
    description:
      'Dense, moist, and deeply chocolatey. Made with olive oil for a rich texture that keeps beautifully for days.',
    imageSrc: '/images/recipe-3.jpg',
    imageAlt: 'Slice of dark chocolate cake dusted with cocoa powder',
    prepTime: '25 min',
    servings: 8,
    category: 'Desserts',
  },
];
