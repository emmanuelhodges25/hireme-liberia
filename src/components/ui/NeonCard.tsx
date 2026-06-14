import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function NeonCard({
  children,
}: Props) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-cyan-500/20
        bg-linear-to-br
        from-slate-950/90
        via-slate-900/90
        to-indigo-950/90
        p-6
        backdrop-blur-xl
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-linear-to-r
          from-cyan-500/5
          via-purple-500/5
          to-blue-500/5
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}