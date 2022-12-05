<template>
    <p>{{brand}}</p>
</template>
  
<script setup>
import { ref } from 'vue';
import { usePiniaStore } from '../stores/piniaStore'; 

const piniaStore = usePiniaStore();

const brand = ref(piniaStore.brand);

</script>

<style>

</style>