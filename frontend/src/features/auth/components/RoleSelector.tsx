interface Props {
  value: string;
  onChange: (role: string) => void;
}

const roles = [
  {
    value: "USER",
    title: "Job Seeker",
  },
  {
    value: "RECRUITER",
    title: "Recruiter",
  },
  {
    value: "COMPANY",
    title: "Company",
  },
];

export default function RoleSelector({
  value,
  onChange,
}: Props) {
  return (
    <div className="grid gap-4">
      {roles.map((role) => (
        <button
          key={role.value}
          type="button"
          onClick={() =>
            onChange(role.value)
          }
          className={`rounded-2xl border p-4 text-left transition
            ${
              value === role.value
                ? "border-[#002B7F] bg-blue-50"
                : ""
            }`}
        >
          <h3 className="font-semibold">
            {role.title}
          </h3>
        </button>
      ))}
    </div>
  );
}