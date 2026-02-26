<script setup lang="ts">
import Question from '~/components/Question.vue'
import Intro from '~/components/Intro.vue'
import Reward from '~/components/Reward.vue'

defineProps<{
  progress: number
}>()

const quizProgressStore = useQuizProgressStore()
const quizTimerStore = useQuizTimerStore()
const interval = ref<number | undefined>(undefined)

const onStart = () => {
  interval.value = setInterval(() => {
    quizTimerStore.decrement()
  }, 1000)
  quizProgressStore.correctAnswer()
}

const onComplete = () => {
  clearInterval(interval.value)
}

watch(() => quizTimerStore.isExpired, (expired) => {
  if (expired) clearInterval(interval.value)
})
</script>

<template>
  <div class="card">
    <Transition
      mode="out-in"
      name="fade"
    >
      <div :key="progress">
        <Intro
          v-if="progress === 0"
          @start="onStart"
        />
        <Question
          v-else-if="progress <= 5"
          :progress="progress"
        />
        <Outro
          v-else-if="progress === 6"
          @complete="onComplete"
        />
        <Reward v-else />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
