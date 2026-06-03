import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 transition-all hover:scale-105"
    >
      <Image
        src="/images/hireme-logo.png"
        alt="HireMe Liberia"
        width={50}
        height={50}
        priority
      />

      <div>
  <h1 className="text-xl font-bold">
    <span className="text-white">
      HireMe
    </span>

    <span className="text-[#E60023]">
      {" "}
      Liberia
    </span>
  </h1>

  <p className="text-xs text-slate-400">
    Opportunity Platform
  </p>
</div>
    </Link>
  );
}