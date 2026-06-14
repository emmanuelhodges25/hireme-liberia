export default function PageGlow() {
  return (
    <>
      <div
        className="
          fixed
          top-0
          left-0
          h-125
          w-125
          rounded-full
          bg-linear-to-r
          from-cyan-500/20
          to-blue-500/20
          blur-[180px]
          animate-pulse
        "
      />

      <div
        className="
          fixed
          bottom-0
          right-0
          h-125
          w-125
          rounded-full
          bg-linear-to-r
          from-purple-500/20
          to-blue-500/20
          blur-[180px]
          animate-pulse
        "
      />
    </>
  );
}