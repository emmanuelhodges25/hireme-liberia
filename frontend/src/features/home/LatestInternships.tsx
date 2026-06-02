const internships = [
  "Remote Software Internship",
  "Marketing Internship",
  "UI/UX Design Internship",
];

export default function LatestInternships() {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold">
        Latest Internships
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        {internships.map((i) => (
          <div
            key={i}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >
            <h3 className="font-semibold">{i}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}