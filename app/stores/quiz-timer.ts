export const useQuizTimerStore = defineStore('quiz-timer', () => {
  const timer = ref<number>(5 * 60)
  const penalized = ref<boolean>(false)
  const isExpired = computed(() => timer.value <= 0)
  const canSubmit = computed(() => !isExpired.value && !penalized.value)
  const interval = ref<number | undefined>(undefined)

  function decrement() {
    if (isExpired.value) return
    timer.value--
  }

  function setTimerInterval(timerInterval: number) {
    interval.value = timerInterval
  }

  function clearTimerInterval() {
    if (interval.value) {
      clearInterval(interval.value)
      interval.value = undefined
    }
  }

  function togglePenalty() {
    penalized.value = !penalized.value
  }

  return {
    timer, isExpired, decrement, penalized, togglePenalty, canSubmit, setTimerInterval, clearTimerInterval,
  }
})
