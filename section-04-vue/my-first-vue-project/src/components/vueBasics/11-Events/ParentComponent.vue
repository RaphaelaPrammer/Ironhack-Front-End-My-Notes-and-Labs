<template>
  <div>
    <h1>Whatever</h1>
    <Child @patata="kartoffel" @patata2="cacao" />
  </div>
</template>

<script setup>
import Child from "./ChildComponent.vue";

const kartoffel = () => {
  alert("kartoffel alert - Emit realizado con exito");
};
const cacao = () => {
  alert("cacao");
};
</script>
