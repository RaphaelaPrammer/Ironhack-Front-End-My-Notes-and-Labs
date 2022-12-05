<template>
  <h1>{{sentence}}</h1>
  <h1>Brand in store is {{piniaStore.brand}}</h1>
</template>

<script setup>
import { ref } from 'vue';
import { usePiniaStore } from '../stores/piniaStore';

const piniaStore = usePiniaStore();

const sentence = ref(`Brand in store is ${piniaStore.brand}`);

</script>

<style>

</style>