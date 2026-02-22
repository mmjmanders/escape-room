export const useEscapeRoomProgressStore = defineStore('escape-room-progress', () => {
  const progress = useLocalStorage('escape-room-progress', 1)

  function correctAnswer() {
    progress.value++
  }

  return {
    progress,
    correctAnswer,
  }
})
