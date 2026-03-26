import { Link } from 'react-router-dom';

interface Props {
  readonly heading: string;
  readonly body: string;
}

export function AboutTeaser({ heading, body }: Props) {
  return (
    <section className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 max-w-xl">
          <h2 className="text-3xl font-heading font-semibold text-text mb-4">{heading}</h2>
          <p className="text-base text-muted leading-relaxed mb-6">{body}</p>
          <Link
            to="/about"
            className="inline-block text-sm font-medium text-accent border-b border-accent pb-0.5 hover:opacity-70 transition-opacity"
          >
            Read our story
          </Link>
        </div>
        <div className="flex-1 aspect-[3/2] w-full rounded overflow-hidden bg-border">
          <img
            src="/images/about-placeholder.jpg"
            alt="A well-worn cookbook open on a kitchen counter"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
