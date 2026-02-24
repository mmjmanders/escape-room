<script setup lang="ts">
import Question from '~/components/Question.vue'
import Intro from '~/components/Intro.vue'

defineProps<{
  progress: number
}>()

const escapeRoomProgressStore = useEscapeRoomProgressStore()
const escapeRoomTimerStore = useEscapeRoomTimerStore()
const interval = ref<number | undefined>(undefined)

const onStart = () => {
  setInterval(() => {
    escapeRoomTimerStore.decrement()
  }, 1000)
  escapeRoomProgressStore.correctAnswer()
}

watch(() => escapeRoomTimerStore.isExpired, (expired) => {
  if (expired) clearInterval(interval.value)
})
</script>

<template>
  <div class="game-container">
    <Intro
      v-if="progress === 0"
      @start="onStart"
    />
    <Question
      v-else
      :key="progress"
      :progress="progress"
    />
  </div>
</template>

<style scoped>

</style>
