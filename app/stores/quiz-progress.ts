export const useQuizProgressStore = defineStore('quiz-progress', () => {
  const progress = ref<number>(0)

  function correctAnswer() {
    progress.value++
  }

  return {
    progress,
    correctAnswer,
  }
})
