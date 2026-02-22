<script setup lang="ts">
const props = defineProps<{
  progress: number
}>()

const { data } = useFetch(`/api/question${props.progress}`)
</script>

<template>
  <div>{{ data?.question }}</div>
</template>

<style scoped>

</style>
