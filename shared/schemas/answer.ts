import * as z from 'zod'

export const answerSchema = z.object({
  answer: z.literal(['a', 'b', 'c']),
}).strip()

export type Answer = z.infer<typeof answerSchema>
