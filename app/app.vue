<script setup lang="ts">
import favicon from '~/assets/favicon.svg'

useHead({
  link: [{
    rel: 'icon', type: 'image/svg+xml', href: favicon,
  }],
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
