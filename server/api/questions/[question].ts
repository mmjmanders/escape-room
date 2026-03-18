import question1get from '~~/server/utils/question1.get'
import question1post from '~~/server/utils/question1.post'
import question2get from '~~/server/utils/question2.get'
import question2post from '~~/server/utils/question2.post'
import question3get from '~~/server/utils/question3.get'
import question3post from '~~/server/utils/question3.post'
import question4get from '~~/server/utils/question4.get'
import question4post from '~~/server/utils/question4.post'
import question5get from '~~/server/utils/question5.get'
import question5post from '~~/server/utils/question5.post'

const router = createRouter()

const questions: Record<number, Record<string, EventHandler>> = {
  1: { get: question1get, post: question1post },
  2: { get: question2get, post: question2post },
  3: { get: question3get, post: question3post },
  4: { get: question4get, post: question4post },
  5: { get: question5get, post: question5post },
}

router.use('/**', defineEventHandler(async (event) => {
  const questionId: number = Number(getRouterParam(event, '_'))
  const method = getMethod(event).toLowerCase()

  if (questionId && questions[questionId] && questions[questionId][method]) {
    return questions[questionId][method](event)
  }
  else {
    setResponseStatus(event, 404)
  }
}))

export default useBase('/api/questions', router.handler)
