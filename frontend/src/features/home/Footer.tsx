export default function Footer() {
  return (
    <footer className="mt-10 border-t bg-white p-10">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="font-bold">HireMe Liberia</h3>
          <p className="text-sm text-slate-500">
            Jobs • Opportunities • Empowerment
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Platform</h4>
          <p className="text-sm text-slate-500">Jobs</p>
          <p className="text-sm text-slate-500">Internships</p>
          <p className="text-sm text-slate-500">Scholarships</p>
        </div>

        <div>
          <h4 className="font-semibold">Company</h4>
          <p className="text-sm text-slate-500">About</p>
          <p className="text-sm text-slate-500">Contact</p>
        </div>

        <div>
          <h4 className="font-semibold">Legal</h4>
          <p className="text-sm text-slate-500">Privacy</p>
          <p className="text-sm text-slate-500">Terms</p>
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} HireMe Liberia - All rights reserved.
      </p>
      <p>Powered by : UnionDrop Innovations</p>
    </footer>
  );
}