import { z, ZodNumber, ZodString } from "zod";

export const userNameChecker: ZodString = z.string().trim().min(5).max(50);
export const phoneNumberChecker: ZodString = z.string().regex(/^[6-9]\d{9}$/);
export const emailChecker: ZodString = z.string().trim().email();

export const messageChecker: ZodString = z.string().trim().min(25).max(200);
export const subjectChecker: ZodString = z.string().trim().min(10).max(100);
export const ageChecker: ZodNumber = z.number().gte(18);
