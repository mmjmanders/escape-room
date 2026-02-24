import { answerSchema } from '#shared/schemas/answer'

export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, answer => answerSchema.safeParse(answer))
  if (!result.success) {
    throw createError({ statusCode: 400, statusMessage: 'Error parsing answer' })
  }
  else if (result.data.answer !== 'a') {
    throw createError({ statusCode: 406, statusMessage: 'Verkeerd antwoord' })
  }
  else setResponseStatus(event, 202)
})
