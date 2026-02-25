<script setup lang="ts">
import Question from '~/components/Question.vue'
import Intro from '~/components/Intro.vue'
import Reward from '~/components/Reward.vue'

defineProps<{
  progress: number
}>()

const escapeRoomProgressStore = useQuizProgressStore()
const escapeRoomTimerStore = useQuizTimerStore()
const interval = ref<number | undefined>(undefined)

const onStart = () => {
  interval.value = setInterval(() => {
    escapeRoomTimerStore.decrement()
  }, 1000)
  escapeRoomProgressStore.correctAnswer()
}

const onComplete = () => {
  clearInterval(interval.value)
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
      v-else-if="progress <= 5"
      :key="progress"
      :progress="progress"
    />
    <Outro
      v-else-if="progress === 6"
      @complete="onComplete"
    />
    <Reward v-else />
  </div>
</template>

<style scoped>

</style>
