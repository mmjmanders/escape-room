import * as z from 'zod'

export const question = z.object({
  question: z.string(),
}).strip()

export type Question = z.infer<typeof question>
