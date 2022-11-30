<template>
  <div>
    <hr />
    <h1>Iteration 5:</h1>
    <button @click="handleClick" class="non-active">Click me</button>
    <hr />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

// const active = ref(true);
const handleClick = (event) => {
  event.currentTarget.classList.toggle("non-active");
  event.currentTarget.classList.toggle("active");
};
</script>

<style>
.active {
  background-color: aquamarine;
}
.non-active {
  background: red;
}
</style>
