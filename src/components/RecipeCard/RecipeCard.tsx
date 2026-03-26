import { Link } from 'react-router-dom';
import type { Recipe } from './RecipeCard.types';

interface Props {
  readonly recipe: Recipe;
}

export function RecipeCard({ recipe }: Props) {
  return (
    <Link
      to={`/recipes/${recipe.id}`}
      className="group flex flex-col bg-surface border border-border rounded overflow-hidden hover:border-accent transition-colors"
    >
      <div className="aspect-[4/3] overflow-hidden bg-border">
        <img
          src={recipe.imageSrc}
          alt={recipe.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <span className="text-xs font-medium uppercase tracking-wider text-accent">
          {recipe.category}
        </span>
        <h3 className="font-heading text-xl font-semibold text-text leading-snug">
          {recipe.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed flex-1">
          {recipe.description}
        </p>
        <div className="flex gap-4 mt-3 pt-3 border-t border-border text-xs text-muted">
          <span>{recipe.prepTime} prep</span>
          <span>Serves {recipe.servings}</span>
        </div>
      </div>
    </Link>
  );
}
