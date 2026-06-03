export type UserRole =
  | "USER"
  | "RECRUITER"
  | "COMPANY"
  | "ADMIN";

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface RegisterFormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
}