import { CategoryCard } from '@/components/CategoryCard/CategoryCard';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import type { Category } from '@/components/CategoryCard/CategoryCard.types';

interface Props {
  readonly categories: readonly Category[];
}

export function CategoryGrid({ categories }: Props) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
      <SectionHeading title="Browse by Category" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
