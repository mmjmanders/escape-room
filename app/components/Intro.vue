<script setup lang="ts">
const escapeRoomProgressStore = useEscapeRoomProgressStore()
const escapeRoomTimerStore = useEscapeRoomTimerStore()

const start = () => {
  setInterval(() => {
    escapeRoomTimerStore.decrement()
  }, 1000)
  escapeRoomProgressStore.correctAnswer()
}

useHead({
  title: 'Escape Room | Intro',
})
</script>

<template>
  <h1 class="text-xl">
    Welkom, Jari!
  </h1>
  <div class="flex flex-col gap-4 text-2xl">
    <div>
      <p>De escape room bestaat uit 5 vragen over je lievelingsartiest JOB.</p>
      <p>Als je alle 5 de vragen goed hebt, krijg je een beloning.</p>
      <p class="text-lg mt-2">
        <span class="font-semibold">Let op:</span> als je een vraag fout hebt, moet je 5 seconden wachten om het opnieuw te proberen. De totale tijd is maximaal 10 minuten.
      </p>
    </div>
    <button
      class="btn btn-primary w-fit disabled:cursor-not-allowed"
      type="button"
      @click="start"
    >
      Start
    </button>
  </div>
</template>

<style scoped>

</style>
