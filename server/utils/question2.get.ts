import type { Question } from '#shared/schemas/question'

export default defineEventHandler(async () => ({
  question: 'Wat is de achternaam van Job?',
  type: 'choice',
  options: {
    a: 'van Grafhorst',
    b: 'van Ramshorst',
    c: 'van Rookworst',
  },
} as Question),
)
