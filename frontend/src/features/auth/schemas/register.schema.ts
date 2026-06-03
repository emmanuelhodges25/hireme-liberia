import { z } from "zod";

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(2),

    email: z
      .string()
      .email(),

    password: z
      .string()
      .min(8),

    confirmPassword: z
      .string(),

    role: z.enum([
      "USER",
      "RECRUITER",
      "COMPANY",
      "ADMIN",
    ]),
  })
  .refine(
    (data) =>
      data.password ===
      data.confirmPassword,
    {
      path: ["confirmPassword"],
      message:
        "Passwords do not match",
    }
  );

export type RegisterSchemaType =
  z.infer<typeof registerSchema>;