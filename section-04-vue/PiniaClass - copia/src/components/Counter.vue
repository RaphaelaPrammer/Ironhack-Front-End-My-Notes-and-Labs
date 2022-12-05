<template>
  <div>
    <p>{{ counterStore.count }}</p>
    <button @click="counterStore.addOneToCount">Add 1</button>
    <button @click="counterStore.reduceOneFromCount">Reduce 1</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "../stores/counter";

const counterStore = useCounterStore();
</script>
