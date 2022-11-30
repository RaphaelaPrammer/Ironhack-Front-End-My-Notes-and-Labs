<template>
  <div>
    <hr />
    <h1>Iteration 3</h1>
    <h3>
      show the text below only if a boolean data inside a variable is true.
    </h3>
    <h3>Option 1: with v-if and v-else</h3>
    <h4 v-if="show">Yey, I am visible!</h4>
    <h4 v-else>Nothing to see here!</h4>
    <!-- with v-show  -->
    <h3>Option2: with v-show</h3>
    <h4 v-show="show">
      I will be displayed when the the variable "show" of the JS is true, if it
      is false, i will not be displayed, but still be visible in the DOM of the
      HTML. This method only adds the style display:none to the tag!! Easy
      Peasy!
    </h4>

    <hr />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const show = ref(true);
</script>

<style scoped></style>
