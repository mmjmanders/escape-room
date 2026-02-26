<script setup lang="ts">
const props = defineProps<{
  progress: number
}>()

const selectedAnswer = ref<string | undefined>(undefined)
const showWrongAnswerMessage = ref<boolean>(false)
const { data } = useFetch(`/api/question${props.progress}`)
const { execute, error, status } = useFetch(`/api/question${props.progress}`, {
  immediate: false,
  watch: false,
  method: 'POST',
  body: computed(() => ({ answer: selectedAnswer.value })),
})

const submit = async () => {
  if (selectedAnswer.value) await execute()
}

const quizTimerStore = useQuizTimerStore()
const quizProgressStore = useQuizProgressStore()

watch(error, (err) => {
  if (err && err.status === 406) {
    showWrongAnswerMessage.value = true
    quizTimerStore.togglePenalty()
    setTimeout(() => {
      quizTimerStore.togglePenalty()
      showWrongAnswerMessage.value = false
    }, 5000)
  }
}, { immediate: false })

watch(status, (res) => {
  if (res === 'success') {
    quizProgressStore.correctAnswer()
  }
}, { immediate: false })

watch(() => props.progress, () => {
  selectedAnswer.value = undefined
})

useHead({
  title: `Quiz | Vraag ${props.progress}`,
})
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex items-center justify-between border-b border-blue-100 pb-4 mb-2">
      <h2 class="text-2xl text-blue-800">
        Vraag {{ progress }}
      </h2>
      <span class="text-sm font-bold bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
        {{ progress }} / 5
      </span>
    </div>

    <div class="text-2xl font-medium text-slate-700 leading-relaxed">
      <div v-html="data?.question" />
    </div>

    <form
      novalidate
      class="flex flex-col gap-6"
      @submit.prevent="submit"
    >
      <div
        v-if="data?.type === 'choice'"
        class="flex flex-col gap-3"
      >
        <label
          v-for="(answer, option) in data?.options"
          :key="option"
          class="radio-option group"
        >
          <input
            :id="'option-' + option"
            v-model="selectedAnswer"
            name="answer"
            type="radio"
            :value="option"
            class="w-5 h-5 accent-blue-600 cursor-pointer"
          >
          <span class="text-xl group-hover:text-blue-800 transition-colors">{{ answer }}</span>
        </label>
      </div>
      <div
        v-else-if="data?.type === 'open'"
        class="flex flex-col gap-2"
      >
        <input
          v-model="selectedAnswer"
          class="input w-full text-xl"
          name="answer"
          type="text"
          placeholder="Jouw antwoord&hellip;"
          autocomplete="off"
        >
      </div>

      <div class="flex flex-col gap-4 mt-2">
        <button
          class="btn btn-primary w-full sm:w-auto"
          type="submit"
          :disabled="!quizTimerStore.canSubmit || !selectedAnswer"
        >
          Antwoord controleren
        </button>

        <Transition name="shake">
          <div
            v-if="showWrongAnswerMessage"
            class="wrong-answer"
          >
            <Icon
              name="material-symbols:error-outline-rounded"
              size="24"
            />
            <span>Fout antwoord! Wacht 5 seconden&hellip;</span>
          </div>
        </Transition>

        <div
          v-if="quizTimerStore.isExpired"
          class="wrong-answer"
        >
          <Icon
            name="material-symbols:timer-off-outline-rounded"
            size="24"
          />
          <span>Tijd is op! Probeer het opnieuw.</span>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.shake-enter-active {
  animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
}
</style>
