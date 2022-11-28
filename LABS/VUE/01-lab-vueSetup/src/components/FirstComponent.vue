<template>
  <div>
    <h1>01 Lab VUE SETUP</h1>
    <h2>Text interpolation using v-text Directive</h2>

    <p v-text="someText"></p>

    <h2>Text interpolation using v-HTML Directive</h2>

    <div v-html="someText2"></div>

    <h2>Text interpolation using mustache syntax</h2>

    <div>Text Interpolation with mustache: {{ someText3 }}</div>

    <hr />
    <hr />
    <button @click="helloWorld">click me</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

let someText = ref(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iusto sit iure amet architecto corporis nemo consequatur, delectus molestiae inventore? Totam doloribus itaque rem neque tempore distinctio? Est, eum quibusdam?"
);

let someText2 = ref(`
<div>
    <h3>Some text 2</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium praesentium sapiente, similique facere fugit inventore laudantium animi iste explicabo obcaecati, iusto dolorem nesciunt assumenda ipsam voluptates esse reiciendis maiores. Non.</p>
</div>
`);

let someText3 = ref("This ist some Text 3 and inserted with mustache syntax");

const helloWorld = () => {
  alert("hello World");
  console.log("hello World");
};
</script>

<style scoped></style>
