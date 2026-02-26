<script setup lang="ts">
const emit = defineEmits<{
  start: []
}>()

useHead({
  title: 'Quiz | Intro',
})
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="space-y-4">
      <h2 class="text-3xl text-blue-800">
        Welkom, Jari! 👋
      </h2>
      <div class="flex flex-col gap-4 text-xl text-slate-600 leading-relaxed">
        <p>Klaar voor een uitdaging? De quiz bestaat uit <strong>5 vragen</strong> over je lievelingsartiest <span class="text-blue-600 font-bold">JOB</span>.</p>
        <p>Als je alle vragen binnen de tijd goed beantwoordt, staat er een speciale beloning op je te wachten!</p>
      </div>
    </div>

    <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 items-start">
      <Icon
        name="material-symbols:warning-outline-rounded"
        class="text-amber-600 shrink-0 mt-1"
        size="24"
      />
      <div class="text-sm text-amber-800">
        <span class="font-bold block mb-1">Let op:</span>
        <p>Bij een fout antwoord moet je 5 seconden wachten. Je hebt in totaal maximaal 5 minuten voor de hele quiz.</p>
      </div>
    </div>

    <button
      class="btn btn-primary w-full sm:w-auto text-xl py-4"
      type="button"
      @click="emit('start')"
    >
      Start de Quiz!
    </button>
  </div>
</template>

<style scoped>

</style>
