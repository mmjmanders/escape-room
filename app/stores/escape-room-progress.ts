export const useEscapeRoomProgressStore = defineStore('escape-room-progress', () => {
  const progress = useLocalStorage('escape-room-progress', 0, { initOnMounted: true })

  function correctAnswer() {
    progress.value++
  }

  return {
    progress,
    correctAnswer,
  }
})
