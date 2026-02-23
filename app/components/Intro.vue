<script setup lang="ts">
const escapeRoomProgressStore = useEscapeRoomProgressStore()

const start = () => {
  escapeRoomProgressStore.correctAnswer()
}
</script>

<template>
  <h1 class="text-xl">
    Speluitleg
  </h1>
  <div class="flex flex-col gap-4 text-2xl">
    <div>
      <p>De escape room bestaat uit 5 vragen over je lievelingsartiest JOB.</p>
      <p>Als je alle 5 de vragen goed hebt, krijg je een beloning.</p>
      <p>Let op: als je een vraag fout hebt, moet je 5 seconden wachten om het opnieuw te proberen. De totale tijd is maximaal 10 minuten.</p>
    </div>
    <button
      class="w-fit disabled:cursor-not-allowed"
      type="button"
      @click="start"
    >
      Start
    </button>
  </div>
</template>

<style scoped>

</style>
