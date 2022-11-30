<template>
  <div>
    <hr />
    <h1>Iteration 2</h1>
    <h3>Part 1: show Mathematical Operation :</h3>
    <h4>{{ 2 + 2 }}</h4>
    <h4>{{ mathOperation }}</h4>
    <h4>{{ number1 + number2 }}</h4>
    <h4>
      same thing with computed properties - v-model - template with inputs:
    </h4>
    <div>
      <input type="text" v-model="num1" /> <span>+</span>
      <input type="text" v-model="num2" /> <span>=</span>
      <span>{{ result }}</span>
    </div>
    <h3>Part 2: print a string:</h3>
    <h4>{{ textFunction() }}</h4>

    <hr />
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
//Part 1
const mathOperation = ref(2 + 8);
const number1 = ref(4);
const number2 = ref(5);
// with computed properties:
const num1 = ref("0");
const num2 = ref("0");
const result = computed(() => {
  return parseFloat(num1.value) + parseFloat(num2.value);
});
//Part 2
const textFunction = () => {
  return "Turnstile is for the children :) ";
};
</script>
