import * as z from 'zod'

export const answerSchema = z.object({
  answer: z.string(),
}).strip()

export type Answer = z.infer<typeof answerSchema>
