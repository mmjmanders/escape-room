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
    <h1 class="text-2xl sm:text-4xl md:text-5xl lg:text-8xl">
      Quiz
    </h1>
    <Timer :seconds-left="quizTimerStore.timer" />
  </header>
  <main>
    <Game :progress="quizProgressStore.progress" />
  </main>
</template>
