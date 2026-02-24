export const useEscapeRoomProgressStore = defineStore('escape-room-progress', () => {
  const progress = ref<number>(0)

  function correctAnswer() {
    progress.value++
  }

  return {
    progress,
    correctAnswer,
  }
})
