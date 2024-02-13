<script setup lang="ts">
const props = defineProps<{ isAccordionOpen: boolean }>();
</script>

<template>
  <svg v-if="props.isAccordionOpen" width="20" height="20" viewBox="0 0 100 100">
    <path d="M50 10 L90 90 L10 90 Z" fill="black" />
  </svg>

  <svg v-else width="20" height="20" viewBox="0 0 100 100">
    <path d="M50 90 L90 10 L10 10 Z" fill="black" />
  </svg>

</template>

<style>
svg {
  path {
    fill: rgb(61, 153, 212) !important;
  }
}
</style>