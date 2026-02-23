<script setup lang="ts">
import Question from '~/components/Question.vue'

defineProps<{
  progress: number
}>()
</script>

<template>
  <div class="game-container">
    <Question :progress="progress" />
  </div>
</template>

<style scoped>

</style>
