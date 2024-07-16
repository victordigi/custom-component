<script setup>
import { ref } from 'Vue'
defineProps({
  msg: String,
})
const switcher = ref(true)
const handleChange = () => {
  switcher.value = !switcher.value;
}
</script>

<template>
  <p>{{ msg }}</p>
  <button @click="handleChange">{{ switcher }}</button>
</template>

<style scoped>
</style>
