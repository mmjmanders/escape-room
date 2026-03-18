<script setup lang="ts">
const quizTimerStore = useQuizTimerStore()

const onComplete = () => {
  quizTimerStore.clearTimerInterval()
  navigateTo('/reward')
}
</script>

<template>
  <div class="card">
    <Outro @complete="onComplete" />
  </div>
</template>
