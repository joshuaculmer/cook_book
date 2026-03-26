import { RecipeCard } from '@/components/RecipeCard/RecipeCard';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import type { Recipe } from '@/components/RecipeCard/RecipeCard.types';

interface Props {
  readonly title: string;
  readonly subtitle?: string;
  readonly recipes: readonly Recipe[];
}

export function RecipeGrid({ title, subtitle, recipes }: Props) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <SectionHeading title={title} subtitle={subtitle} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
