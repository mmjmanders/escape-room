<script setup lang="ts">
const quizTimerStore = useQuizTimerStore()
const quizProgressStore = useQuizProgressStore()

const onComplete = () => {
  quizTimerStore.clearTimerInterval()
  quizProgressStore.correctAnswer()
  navigateTo('/reward')
}

// Guard: redirect if invalid question
if (quizProgressStore.progress !== 6) {
  navigateTo('/')
}
</script>

<template>
  <div class="card">
    <Outro @complete="onComplete" />
  </div>
</template>
