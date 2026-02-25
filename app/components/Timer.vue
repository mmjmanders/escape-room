<script setup lang="ts">
const props = defineProps<{ secondsLeft: number }>()

const minutes = computed(() => props.secondsLeft ? String(Math.floor(props.secondsLeft / 60)).padStart(2, '0') : '--')
const seconds = computed(() => props.secondsLeft ? String(props.secondsLeft % 60).padStart(2, '0') : '--')

const quizTimerStore = useQuizTimerStore()
</script>

<template>
  <div
    class="absolute right-8 flex gap-1 items-center sm:text-2xl md:text-3xl"
    :class="{ 'text-red-400': quizTimerStore.penalized || quizTimerStore.isExpired }"
  >
    <Icon
      v-if="quizTimerStore.isExpired"
      name="material-symbols:timer-off-outline-rounded"
    />
    <Icon
      v-else
      name="material-symbols:timer-outline-rounded"
    />
    <span class="font-mono">{{ minutes }}:{{ seconds }}</span>
  </div>
</template>

<style scoped>

</style>
