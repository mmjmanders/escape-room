import type { Question } from '#shared/schemas/question'

export default defineEventHandler(async () => ({
  question: 'Wat was de eerste hit van JOB?',
  options: {
    a: 'Per ongeluk verliefd',
    b: 'Nostalgie',
    c: 'Het perfecte plaatje',
  },
} as Question),
)
