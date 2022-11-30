<template>
  <div>
    <hr />
    <h1>Iteration 2</h1>
    <h3>show Mathematical Operation:</h3>
    <h4>{{ mathOperation }}</h4>
    <hr />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const mathOperation = ref(2 + 2);
</script>
