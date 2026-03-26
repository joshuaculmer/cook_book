import { Hero }         from '@/components/Hero/Hero';
import { RecipeGrid }   from '@/components/RecipeGrid/RecipeGrid';
import { CategoryGrid } from '@/components/CategoryGrid/CategoryGrid';
import { AboutTeaser }  from '@/components/AboutTeaser/AboutTeaser';
import { FEATURED_RECIPES }  from '@/data/recipes';
import { RECIPE_CATEGORIES } from '@/data/categories';

export function Home() {
  return (
    <>
      <Hero
        heading="From Our Kitchen to Yours"
        subheading="Simple, tested recipes for everyday home cooks. No fuss — just food that works."
        imageSrc="/images/hero-placeholder.jpg"
        imageAlt="A beautifully set dining table with seasonal dishes"
        ctaLabel="Browse Recipes"
        ctaHref="/about"
      />
      <RecipeGrid
        title="Featured Recipes"
        subtitle="Our most loved dishes this season"
        recipes={FEATURED_RECIPES}
      />
      <CategoryGrid categories={RECIPE_CATEGORIES} />
      <AboutTeaser
        heading="Cooking with intention"
        body="We believe great food starts with curiosity. Our recipes are tested in a real kitchen, written for real people, and made to be cooked — not just admired."
      />
    </>
  );
}
