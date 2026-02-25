<script setup lang="ts">
import job from '~/assets/job.jpg'

useHead({
  title: 'Quiz | Beloning',
})
</script>

<template>
  <h1 class="text-xl">
    Gefeliciteerd!
  </h1>
  <div class="flex flex-col gap-4 text-2xl">
    <div>De beloning is&hellip; 2 kaartjes voor de show van JOB! Deze show is in de meivakantie op zondag 26 april in Tilburg.</div>
    <div>
      <img
        :src="job"
        width="100%"
        alt="job"
      >
    </div>
  </div>
</template>

<style scoped>

</style>
