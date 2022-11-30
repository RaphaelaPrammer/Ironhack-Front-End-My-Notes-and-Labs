<template>
  <div>
    <hr />
    <h1>Iteration 5:</h1>
    <!-- Option 1-->
    <h2>Method 1:</h2>
    <button @click="handleClick" class="non-active">Click me</button>

    <!-- Option 2-->
    <h2>Method 2:</h2>
    <div class="container" :class="colorBoolean ? 'is-green' : 'is-orange'">
      <h3>Toggle between 2 colors with tenary operator</h3>
      <button @click="changeColorFunction">Click to Toggle</button>
    </div>
    <!-- Option 3-->
    <h2>Method 3 random color:</h2>
    <div class="container" :style="{ background: color }">
      <h3>Toggle random</h3>
      <button @click="color = getRandomColor()">Random Color</button>
    </div>
    <!-- Option 4-->
    <h2>Method 4:</h2>
    <div class="container" :class="myBooleanValue && 'myBooleanBackground'">
      <h3>Change color depending on</h3>
      <button @click="clickMe">Click to change color</button>
    </div>
    <hr />
    <!-- EXERCISE CLASS  -->
    <h2>Exercise Class</h2>
    <div class="container" :class="boolean4 ? 'pink' : 'slate'">
      <h3>change the color of this container with a button</h3>
      <button @click="changeColor">Change the color here</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
//Option 1:
const handleClick = (event) => {
  event.currentTarget.classList.toggle("non-active");
  event.currentTarget.classList.toggle("active");
};

// Option 2
const colorBoolean = ref(true);
const changeColorFunction = () => {
  colorBoolean.value = !colorBoolean.value;
  console.log(colorBoolean.value);
};

// Option 3
let color = ref("orange");
const getRandomColor = () => {
  const hexLetters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexLetters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Option 4:
const myBooleanValue = ref(true);
const clickMe = () => {
  myBooleanValue.value = !myBooleanValue.value;
};

// Exercise Class

const boolean4 = ref(true);
const changeColor = () => {
  boolean4.value = !boolean4.value;
};
</script>

<style>
.active {
  background-color: aquamarine;
}
.non-active {
  background: red;
}

.container {
  display: flex;
  flex-direction: column;
  margin: 2rem;
}
/* option 2  */
.is-green {
  background: green;
}
.is-orange {
  background: orange;
}

/* option 4  */
.myBooleanBackground {
  background: purple;
}

/*exercise class  */
.pink {
  background: pink;
}
.slate {
  background: slateblue;
}
</style>
