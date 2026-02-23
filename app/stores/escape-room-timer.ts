export const useEscapeRoomTimerStore = defineStore('escape-room-timer', () => {
  const timer = useLocalStorage('escape-room-timer', 30 * 60)
  const isExpired = computed(() => timer.value <= 0)

  function decrement() {
    if (isExpired.value) return
    timer.value--
  }

  return {
    timer, isExpired, decrement,
  }
})
