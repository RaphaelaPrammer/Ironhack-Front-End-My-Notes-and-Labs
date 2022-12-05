<template>
  <p>{{ brand }}</p>
  <p>Price: {{ piniaStore.price }}</p>
  <button @click="piniaStore.duplicatePrice()">Duplicate price</button>

  <button @click="piniaStore.toggleStudents">Show students</button>
  <div v-if="piniaStore.showStudents">
    <h2>Looping an array in Store:</h2>
    <ul>
      <li v-for="(student, index) in piniaStore.students" :key="index">
        <p>{{ student.name }}</p>
        <p>{{ student.name }}'s favorite programming languages:</p>
        <ol>
          <li v-for="(language, index) in student.favLanguages" :key="index">
            {{ language }}
          </li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
// We import the usePiniaStore defined in our store
import { usePiniaStore } from "../stores/piniaStore";
// We store it inside a variable in order to improve readablity.
const piniaStore = usePiniaStore();
const brand = ref(piniaStore.brand);
piniaStore.changeBrand("adidas");
brand.value = piniaStore.brand;
</script>

<style></style>
