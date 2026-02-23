<script setup lang="ts">
import { useEscapeRoomTimerStore } from '~/stores/escape-room-timer'

const props = defineProps<{
  progress: number
}>()

const selectedAnswer = ref<string | undefined>(undefined)
const { data } = useFetch(`/api/question${props.progress}`)
const { execute, error } = useFetch(`/api/question${props.progress}`, { immediate: false, watch: false, method: 'POST', body: computed(() => ({ answer: selectedAnswer.value })) })

const submit = async () => {
  if (selectedAnswer.value) await execute()
}

const escapeRoomTimerStore = useEscapeRoomTimerStore()

watch(error, (err) => {
  if (err) {
    escapeRoomTimerStore.togglePenalty()
    setTimeout(escapeRoomTimerStore.togglePenalty, 5000)
  }
})
</script>

<template>
  <h1 class="text-xl">
    Vraag {{ progress }}
  </h1>
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
          v-model="selectedAnswer"
          name="answer"
          type="radio"
          :value="option"
          class="hover:cursor-pointer"
        >
        <label
          :for="'option-' + option"
          class="hover:cursor-pointer"
        >{{ answer }}</label>
      </div>
    </div>
    <button
      class="w-fit disabled:cursor-not-allowed"
      type="button"
      :disabled="escapeRoomTimerStore.penalized"
      @click="submit"
    >
      Versturen
    </button>
  </div>
</template>

<style scoped>

</style>
