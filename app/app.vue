<script setup lang="ts">
import favicon from '~/assets/favicon.svg'
import appleTouchIcon from '~/assets/apple-touch-icon-180x180.png'

useHead({
  link: [
    { rel: 'icon', href: favicon, type: 'image/svg+xml' },
    { rel: 'apple-touch-icon', href: appleTouchIcon },
  ],
})
</script>

<template>
  <NuxtPwaManifest />
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
