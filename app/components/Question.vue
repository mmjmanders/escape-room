<script setup lang="ts">
const props = defineProps<{
  progress: number
}>()

const { data } = useFetch(`/api/question${props.progress}`)
</script>

<template>
  <h1>Vraag {{ progress }}</h1>
  <div class="flex flex-col gap-4 text-2xl">
    <div>{{ data?.question }}</div>
    <div class="flex flex-col gap-1">
      <div
        v-for="(answer, option) in data?.options"
        :key="option"
        class="flex gap-2"
      >
        <input
          :id="'option-' + option"
          name="answer"
          type="radio"
          :value="option"
        >
        <label :for="'option-' + option">{{ answer }}</label>
      </div>
    </div>
  </div>
</template>

<style scoped>
input, label {
  @apply hover:cursor-pointer;
}
</style>
