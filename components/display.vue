<template>
  {{ injectedValue }}
</template>

<script setup>
const injectedValue = inject('test', "default")
</script>