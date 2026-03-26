export interface Recipe {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly prepTime: string;
  readonly servings: number;
  readonly category: string;
}
