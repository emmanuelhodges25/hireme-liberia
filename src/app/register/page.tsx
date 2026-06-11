import AuthLayout from "@/components/auth/AuthLayout";
import AuthShowcase from "@/components/auth/AuthShowcase";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <AuthShowcase />

      <div className="flex flex-1 items-center justify-center p-6">
        <RegisterForm />
      </div>
    </AuthLayout>
  );
}