import type { Question } from '#shared/schemas/question'

export default defineEventHandler(async () => {
  const question: Question = {
    question: 'In welk jaar stond Oranje voor het eerst in de finale van een WK voetbal?',
  }
  return question
})
