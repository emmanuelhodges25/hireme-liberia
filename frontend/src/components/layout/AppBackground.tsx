export default function AppBackground() {
  return (
    <>
      {/* Background Image */}
      <div
        className="fixed inset-0 -z-50 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/dashboard-bg.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="fixed inset-0 -z-40 bg-[#020B1F]/90" />

      {/* Gradient Overlay */}
      <div className="fixed inset-0 -z-30 bg-linear-to-b from-[#020B1F]/80 via-[#06173A]/70 to-[#020B1F]/90" />

      {/* Grid Overlay */}
      <div
        className="fixed inset-0 -z-20 opacity-10"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />
    </>
  );
}