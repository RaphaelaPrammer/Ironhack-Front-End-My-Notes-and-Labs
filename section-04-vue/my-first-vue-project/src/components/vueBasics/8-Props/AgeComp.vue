<template>
  <h1>{{ age }}</h1>
</template>

<script setup>
defineProps({
  age: {
    type: Number,
    required: false,
    default: "0",
  },
});
</script>
