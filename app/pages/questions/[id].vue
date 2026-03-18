<script setup lang="ts">
const route = useRoute()
const quizProgressStore = useQuizProgressStore()
const questionId = Number(route.params.id)

// Guard: redirect if invalid question
if (questionId < 1 || questionId > 5 || questionId !== quizProgressStore.progress) {
  navigateTo('/')
}
</script>

<template>
  <div class="card">
    <Question
      :progress="questionId"
    />
  </div>
</template>
