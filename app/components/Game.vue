<script setup lang="ts">
import Question from '~/components/Question.vue'

defineProps<{
  progress: number
}>()
</script>

<template>
  <Question :progress="progress" />
</template>

<style scoped>

</style>
