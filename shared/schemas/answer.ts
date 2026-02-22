import * as z from 'zod'

export const answer = z.object({
  answer: z.coerce.number(),
}).strip()

export type Answer = z.infer<typeof answer>
