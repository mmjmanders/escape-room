<script setup lang="ts">
import job from '~/assets/job.jpg'

useHead({
  title: 'Quiz | Beloning',
})
</script>

<template>
  <div class="flex flex-col gap-8 text-center">
    <div class="space-y-4">
      <h2 class="text-4xl text-blue-800">
        Jouw Beloning! 🎁
      </h2>
      <div class="text-2xl text-slate-700 leading-relaxed max-w-lg mx-auto">
        <p>De beloning is&hellip;</p>
        <p class="font-black text-blue-600 my-4 text-3xl">
          2 kaartjes voor de show van JOB!
        </p>
        <p class="text-lg bg-blue-50 py-2 px-4 rounded-full inline-block font-semibold text-blue-800 border border-blue-100">
          Zondag 26 april • Tilburg
        </p>
      </div>
    </div>

    <div class="relative group mt-4">
      <div class="absolute -inset-1 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl blur-md opacity-25 group-hover:opacity-50 transition duration-1000" />
      <img
        :src="job"
        class="relative rounded-xl shadow-2xl w-full border-4 border-white"
        alt="JOB show"
      >
    </div>
  </div>
</template>

<style scoped>

</style>
