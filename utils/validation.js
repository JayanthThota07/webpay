import { z } from "zod";

export const signupSchema = z.object({
  firstname: z.string().min(3).max(40),
  lastname: z.string().min(3).max(30),
  email: z.string().email("Invalid email"),
  password: z.string().min(8),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1),
});
