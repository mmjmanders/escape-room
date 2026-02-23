export const useEscapeRoomTimerStore = defineStore('escape-room-timer', () => {
  const timer = useLocalStorage('escape-room-timer', 10 * 60)
  const penalized = ref<boolean>(false)
  const isExpired = computed(() => timer.value <= 0)

  function decrement() {
    if (isExpired.value) return
    timer.value--
  }

  function togglePenalty() {
    penalized.value = !penalized.value
  }

  return {
    timer, isExpired, decrement, penalized, togglePenalty,
  }
})
