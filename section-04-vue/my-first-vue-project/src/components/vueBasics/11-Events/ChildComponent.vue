<template>
  <button @click="$emit('patata')">Emit</button>
  <button @click="$emit('patata2')">Emit2</button>
</template>

<script setup>
const emit = defineEmits(["patata", "patata2"]);
</script>
