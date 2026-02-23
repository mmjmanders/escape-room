import type { Question } from '#shared/schemas/question'

export default defineEventHandler(async () => ({
  question: 'Wat was de eerste higdsgdst van JOB?',
  type: 'choice',
  options: {
    a: 'Per ongeluk verliefd',
    b: 'Nostalgie',
    c: 'Het perfecte plaatje',
  },
} as Question),
)
