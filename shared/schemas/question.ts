import * as z from 'zod'

export const question = z.object({
  question: z.string(),
  options: z.object({
    a: z.string(),
    b: z.string(),
    c: z.string(),
  }),
}).strip()

export type Question = z.infer<typeof question>
