export default function AppBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-50 bg-[#020817]" />

      <div
        className="
          fixed
          inset-0
          -z-40
          animate-pulse
          bg-[radial-gradient(circle_at_top_left,#002B7F,transparent_35%),radial-gradient(circle_at_bottom_right,#E60023,transparent_35%)]
          opacity-40
        "
      />

      <div
        className="
          fixed
          inset-0
          -z-30
          bg-[linear-gradient(to_bottom_right,rgba(255,255,255,.03)_1px,transparent_1px)]
          bg-size-[40px_40px]
        "
      />
    </>
  );
}