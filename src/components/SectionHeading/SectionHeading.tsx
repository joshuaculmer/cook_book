interface Props {
  readonly title: string;
  readonly subtitle?: string;
}

export function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-heading font-semibold text-text">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-base text-muted">{subtitle}</p>
      )}
    </div>
  );
}
