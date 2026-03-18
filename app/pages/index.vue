<script setup lang="ts">
const quizProgressStore = useQuizProgressStore()
const quizTimerStore = useQuizTimerStore()

const onStart = () => {
  const interval = setInterval(() => {
    quizTimerStore.decrement()
  }, 1000)
  // Store interval in the store to clear later
  quizTimerStore.setTimerInterval(interval)
  quizProgressStore.correctAnswer()
  navigateTo('/questions/1')
}
</script>

<template>
  <div class="card">
    <Intro @start="onStart" />
  </div>
</template>
