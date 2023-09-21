<template>
  <div>
    <h1>Hello Vue!</h1>
    <button @click="incremment">Vue count {{ count }}</button>
  </div>
</template>

<script setup>
  import { ref } from "vue"

  let count = ref(1)

  function incremment() {
    count.value++
  }
</script>
