import z from "zod";

const emailSchema = z.string().email();
const cpfSchema = z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/);
const passportSchema = z.string().regex(/^[A-Z0-9]{6,9}$/i);

export const loginSchema = z.object({
    username: z.union([
        emailSchema,
        cpfSchema,
        passportSchema,
    ]),
    password: z.string().min(8),

})