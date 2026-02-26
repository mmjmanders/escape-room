<script setup lang="ts">
import favicon from '~/assets/favicon.svg'
import appleTouchIcon from '~/assets/apple-touch-icon-180x180.png'

useHead({
  htmlAttrs: {
    lang: 'nl',
  },
  link: [
    { rel: 'icon', href: favicon, type: 'image/svg+xml' },
    { rel: 'apple-touch-icon', href: appleTouchIcon },
  ],
  meta: [
    { name: 'description', content: 'Quiz' },
  ],
})

const quizProgressStore = useQuizProgressStore()
const quizTimerStore = useQuizTimerStore()
</script>

<template>
  <NuxtPwaManifest />
  <header>
    <h1 class="text-4xl sm:text-5xl md:text-6xl font-black text-blue-900 tracking-tight">
      Escape Room
    </h1>
    <Timer :seconds-left="quizTimerStore.timer" />
  </header>
  <main>
    <Game :progress="quizProgressStore.progress" />
  </main>
</template>
