interface Props {
  password: string;
}

export default function PasswordStrength({
  password,
}: Props) {
  const score =
    password.length >= 12
      ? 100
      : password.length >= 8
      ? 70
      : password.length >= 4
      ? 40
      : 10;

  return (
    <div className="mt-2">
      <div className="h-2 rounded-full bg-slate-200">
        <div
          className="h-2 rounded-full bg-green-500 transition-all"
          style={{
            width: `${score}%`,
          }}
        />
      </div>

      <p className="mt-1 text-xs text-slate-500">
        Password Strength
      </p>
    </div>
  );
}