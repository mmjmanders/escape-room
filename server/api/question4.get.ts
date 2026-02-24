import type { Question } from '#shared/schemas/question'

export default defineEventHandler(async () => ({
  question: 'In welke film speelt Job de rol van dokter?',
  type: 'choice',
  options: {
    a: 'Juf Braaksel en de mysterieuze verdwijning',
    b: 'De Grote Sinterklaasfilm en de verdwenen verlanglijstjes',
    c: 'Juffrouw Pots',
  },
} as Question),
)
