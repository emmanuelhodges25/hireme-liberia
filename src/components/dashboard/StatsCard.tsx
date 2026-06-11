interface Props {
  title: string;
  value: string;
}

export default function StatsCard({
  title,
  value,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
      "
    >
      <h3 className="text-slate-400">
        {title}
      </h3>

      <p className="mt-2 text-4xl font-bold text-white">
        {value}
      </p>
    </div>
  );
}