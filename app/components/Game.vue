<script setup lang="ts">
import Question from '~/components/Question.vue'
import Intro from '~/components/Intro.vue'

defineProps<{
  progress: number
}>()
</script>

<template>
  <div class="game-container">
    <Intro v-if="progress === 0" />
    <Question
      v-else
      :key="progress"
      :progress="progress"
    />
  </div>
</template>

<style scoped>

</style>
