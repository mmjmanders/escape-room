import type { Question } from '#shared/schemas/question'

export default defineEventHandler(async () => ({
  question: 'Maak de titel van het liedje af: <em>Per ongeluk&hellip;</em>',
  type: 'open',
} as Question),
)
