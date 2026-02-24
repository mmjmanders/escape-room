import type { Question } from '#shared/schemas/question'

export default defineEventHandler(async () => ({
  question: 'Maak de volgende zin af: <em>Schat, wat is je sterrenbeeld&hellip;</em>',
  type: 'open',
} as Question),
)
