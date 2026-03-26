import { Link } from 'react-router-dom';
import type { Category } from './CategoryCard.types';

interface Props {
  readonly category: Category;
}

export function CategoryCard({ category }: Props) {
  return (
    <Link
      to={`/recipes?category=${category.id}`}
      className="group relative aspect-square overflow-hidden rounded bg-border"
    >
      <img
        src={category.imageSrc}
        alt={category.imageAlt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <span className="absolute bottom-4 left-4 font-heading text-lg font-semibold text-white">
        {category.label}
      </span>
    </Link>
  );
}
