<script setup>
defineProps({
  msg: String,
})

</script>

<template>
  <h1>I am a custom component!</h1>
  <p>this message is parent {{ msg }}</p>
</template>

<style scoped>
</style>
