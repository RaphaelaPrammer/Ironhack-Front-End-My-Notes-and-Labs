<template>
  <h1>{{ name }}</h1>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: false,
    default: "Random First Name",
  },
});
</script>
