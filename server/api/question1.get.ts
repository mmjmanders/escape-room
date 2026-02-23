import type { Question } from '#shared/schemas/question'

export default defineEventHandler(async () => {
  const question: Question = {
    question: 'Wat was de eerste hit van JOB?',
    options: {
      a: 'Per ongeluk verliefd',
      b: 'Nostalgie',
      c: 'Het perfecte plaatje',
    },
  }
  return question
})
