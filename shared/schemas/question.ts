import * as z from 'zod'

export const questionSchema
  = z.xor([
    z.object({
      question: z.string(),
      type: z.literal('choice'),
      options: z.object({
        a: z.string(),
        b: z.string(),
        c: z.string(),
      }),
    }).strip(),
    z.object({
      question: z.string(),
      type: z.literal(['open']),
    }).strip()])

export type Question = z.infer<typeof questionSchema>
