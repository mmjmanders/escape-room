export const useEscapeRoomTimerStore = defineStore('escape-room-timer', () => {
  const timer = ref<number>(5 * 60)
  const penalized = ref<boolean>(false)
  const isExpired = computed(() => timer.value <= 0)
  const canSubmit = computed(() => !isExpired.value && !penalized.value)

  function decrement() {
    if (isExpired.value) return
    timer.value--
  }

  function togglePenalty() {
    penalized.value = !penalized.value
  }

  return {
    timer, isExpired, decrement, penalized, togglePenalty, canSubmit,
  }
})
