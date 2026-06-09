interface Props {
  password: string;
}

export default function PasswordStrength({
  password,
}: Props) {
  const strength =
    password.length >= 12
      ? 100
      : password.length >= 8
      ? 60
      : password.length >= 4
      ? 30
      : 0;

  return (
    <div className="mt-2">
      <div className="h-2 rounded-full bg-white/10">
        <div
          style={{
            width: `${strength}%`,
          }}
          className="
            h-2
            rounded-full
            bg-[#E60023]
            transition-all
          "
        />
      </div>

      <p className="mt-1 text-xs text-slate-400">
        Password Strength
      </p>
    </div>
  );
}