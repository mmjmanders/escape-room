export const useEscapeRoomProgressStore = defineStore('escape-room-progress', () => {
  const progress = useLocalStorage('escape-room-progress', 0)

  function correctAnswer() {
    progress.value++
  }

  return {
    progress,
    correctAnswer,
  }
})
