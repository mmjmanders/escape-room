<script setup lang="ts">
import Question from '~/components/Question.vue'

defineProps<{
  progress: number
}>()
</script>

<template>
  <h1>Vraag {{ progress }}</h1>
  <Question :progress="progress" />
</template>

<style scoped>

</style>
