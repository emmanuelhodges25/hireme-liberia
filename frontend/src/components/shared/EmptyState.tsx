interface Props {
  title: string;
  description: string;
}

export default function EmptyState({
  title,
  description,
}: Props) {
  return (
    <div className="rounded-3xl border border-dashed bg-white p-12 text-center">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-slate-500">
        {description}
      </p>
    </div>
  );
}