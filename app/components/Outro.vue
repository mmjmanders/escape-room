<script setup lang="ts">
const escapeRoomProgressStore = useQuizProgressStore()

const reward = () => {
  escapeRoomProgressStore.correctAnswer()
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
  <h1 class="text-xl">
    Gefeliciteerd!
  </h1>
  <div class="flex flex-col gap-4 text-2xl">
    <div>
      <p>YES! Je hebt alle vragen goed beantwoord! Er ligt een beloning op je te wachten&hellip;</p>
    </div>
    <button
      class="btn btn-primary"
      type="button"
      @click="reward"
    >
      Claim beloning!
    </button>
  </div>
</template>

<style scoped>

</style>
