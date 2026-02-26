<script setup lang="ts">
const props = defineProps<{ secondsLeft: number }>()

const minutes = computed(() => props.secondsLeft ? String(Math.floor(props.secondsLeft / 60)).padStart(2, '0') : '--')
const seconds = computed(() => props.secondsLeft ? String(props.secondsLeft % 60).padStart(2, '0') : '--')

const quizTimerStore = useQuizTimerStore()
</script>

<template>
  <div
    class="flex gap-2 items-center px-4 py-2 rounded-full font-mono text-xl sm:text-2xl transition-all duration-300 border-2 shadow-sm lg:absolute lg:right-8"
    :class="[
      quizTimerStore.penalized || quizTimerStore.isExpired
        ? 'bg-red-50 text-red-600 border-red-200'
        : 'bg-white text-blue-600 border-blue-100',
    ]"
  >
    <Icon
      v-if="quizTimerStore.isExpired"
      name="material-symbols:timer-off-outline-rounded"
      class="animate-pulse"
    />
    <Icon
      v-else
      name="material-symbols:timer-outline-rounded"
    />
    <span>{{ minutes }}:{{ seconds }}</span>
  </div>
</template>

<style scoped>

</style>
