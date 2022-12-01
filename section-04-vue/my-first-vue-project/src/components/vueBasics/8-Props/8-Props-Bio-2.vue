<template>
  <div>
    <NameComp :name="name" />
    <AgeComp :age="age" />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import NameComp from "./NameComp.vue";
import AgeComp from "./AgeComp.vue";

defineProps({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  birthPlace: {
    type: String,
  },
  currentLocation: {
    type: String,
  },
});
</script>
