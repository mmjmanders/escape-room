<script setup lang="ts">
import favicon from '~/assets/favicon.svg'
import appleTouchIcon from '~/assets/apple-touch-icon-180x180.png'

useHead({
  title: 'Escape Room',
  htmlAttrs: {
    lang: 'nl',
  },
  link: [
    { rel: 'icon', href: favicon, type: 'image/svg+xml' },
    { rel: 'apple-touch-icon', href: appleTouchIcon },
  ],
  meta: [
    { name: 'description', content: 'Escape Room' },
  ],
})

const escapeRoomProgressStore = useEscapeRoomProgressStore()
</script>

<template>
  <NuxtPwaManifest />
  <main>
    <Game :progress="escapeRoomProgressStore.progress" />
  </main>
</template>
