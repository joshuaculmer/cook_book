import { Link } from 'react-router-dom';

interface Props {
  readonly heading: string;
  readonly subheading: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly ctaLabel?: string;
  readonly ctaHref?: string;
}

export function Hero({
  heading,
  subheading,
  imageSrc,
  imageAlt,
  ctaLabel = 'Browse Recipes',
  ctaHref = '/recipes',
}: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl lg:text-6xl font-heading font-semibold leading-tight text-text">
            {heading}
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-md">
            {subheading}
          </p>
          <div className="flex gap-4 pt-2">
            <Link
              to={ctaHref}
              className="inline-block px-8 py-3 bg-accent text-bg font-medium tracking-wide hover:opacity-80 transition-opacity rounded"
            >
              {ctaLabel}
            </Link>
            <Link
              to="/about"
              className="inline-block px-8 py-3 border border-border text-text font-medium tracking-wide hover:border-accent hover:text-accent transition-colors rounded"
            >
              Our Story
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded overflow-hidden bg-border lg:order-last order-first">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
