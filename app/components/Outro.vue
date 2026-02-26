<script setup lang="ts">
const quizProgressStore = useQuizProgressStore()

const reward = () => {
  quizProgressStore.correctAnswer()
}

const emit = defineEmits<{
  complete: []
}>()

onMounted(() => {
  emit('complete')
})

useHead({
  title: `Quiz | Gefeliciteerd!`,
})
</script>

<template>
  <div class="flex flex-col gap-8 text-center py-4">
    <div class="space-y-4">
      <div class="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-2">
        <Icon
          name="material-symbols:celebration-outline-rounded"
          size="48"
        />
      </div>
      <h2 class="text-4xl text-blue-800">
        Gefeliciteerd! 🎉
      </h2>
      <p class="text-2xl text-slate-600 leading-relaxed max-w-md mx-auto">
        GEWELDIG! Je hebt alle vragen goed beantwoord! Er ligt een beloning op je te wachten&hellip;
      </p>
    </div>

    <button
      class="btn btn-primary mx-auto text-xl px-12 py-4"
      type="button"
      @click="reward"
    >
      Claim beloning!
    </button>
  </div>
</template>

<style scoped>

</style>
