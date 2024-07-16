<script setup>
defineProps({
  msg: String,
})
const aaa = () => {
  alert("啊啊啊啊啊啊");
}
</script>

<template>
  <button @click="aaa">{{ msg }}</button>
</template>

<style scoped>
</style>
