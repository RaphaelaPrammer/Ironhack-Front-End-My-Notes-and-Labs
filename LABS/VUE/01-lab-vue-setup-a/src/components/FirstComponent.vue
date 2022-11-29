<template>
  <div>
    <h2>Text interpolation using v-text Directive</h2>
    <p v-text="someText"></p>
    <hr />

    <h2>Inserting a reactive Image with v-bind</h2>
    <img class="image" v-bind:src="someImage.image" :alt="someImage.altText" />
    <hr />

    <h2>Text interpolation using v-HTML Directive</h2>
    <div v-html="someText2"></div>
    <hr />

    <h2>Text interpolation using mustache syntax</h2>
    <div>{{ someText3 }}</div>
    <hr />

    <h2>Hello World Button</h2>
    <button @click="helloWorld">click me short version</button>
    <button v-on:click="helloWorld">click 2 long version</button>
    <hr />

    <h2>Router Links</h2>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

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

const someImage = reactive({
  image:
    "https://img.elo7.com.br/product/zoom/3E0B0FF/baby-look-the-stooges.jpg",
  altText: "stooges-pic",
});

// Hello World Button
const helloWorld = () => {
  alert("hello World");
  console.log("hello World");
};
</script>

<style scoped>
.image {
  width: 50%;
}
</style>
