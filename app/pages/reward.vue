<script setup lang="ts">
const quizProgressStore = useQuizProgressStore()

if (quizProgressStore.progress !== 7) {
  navigateTo('/')
}
</script>

<template>
  <div class="card">
    <Reward />
  </div>
</template>
