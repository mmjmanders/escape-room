<script setup lang="ts">
const props = defineProps<{ secondsLeft: number }>()

const minutes = computed(() => String(Math.floor(props.secondsLeft / 60)).padStart(2, '0'))
const seconds = computed(() => String(props.secondsLeft % 60).padStart(2, '0'))
</script>

<template>
  <div class="absolute right-8 flex gap-1 items-center sm:text-2xl md:text-3xl">
    <Icon name="material-symbols:timer-outline-rounded" />
    <span class="font-mono">{{ minutes }}:{{ seconds }}</span>
  </div>
</template>

<style scoped>

</style>
