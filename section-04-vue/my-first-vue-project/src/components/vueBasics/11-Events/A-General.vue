<template>
  <div>
    <h1>{{ name }}</h1>
    <!-- <Input /> -->
    <input v-model="name" type="text" />
    <Submit @changeMe="changeName" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Input from "./A-Input.vue";
import Submit from "./A-Submit.vue";
let name = ref("");
const changeName = (name) => {
  //   nombre = name.value;
  alert(`hello ${name.value}`);
};
</script>
