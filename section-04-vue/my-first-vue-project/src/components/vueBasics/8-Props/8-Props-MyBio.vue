<template>
  <div>
    <h1>Props My Bio</h1>
    <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>
    <h3>{{ birthPlace }}</h3>
    <h3>{{ currentLocation }}</h3>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

defineProps({
  name: {
    type: String,
    required: false,
    default: "Some Random Name",
  },
  age: {
    type: Number,
    default: 0,
  },
  birthPlace: {
    type: String,
  },
  currentLocation: {
    type: String,
    required: true,
    default: "Barcelona, España",
  },
});
</script>
