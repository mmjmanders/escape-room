import type { Question } from '#shared/schemas/question'

export default defineEventHandler(async (_) => {
  const question: Question = {
    question: 'In welk jaar stond Oranje voor het eerst in de finale van een WK voetbal?',
  }
  return question
})
