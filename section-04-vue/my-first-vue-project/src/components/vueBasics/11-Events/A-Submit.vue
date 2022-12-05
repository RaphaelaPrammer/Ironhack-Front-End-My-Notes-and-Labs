<template>
  <div>
    <button @click="$emit('changeMe')">ChangeMyName!</button>
  </div>
</template>
<script setup>
const emit = defineEmits("changeMe");

// const changeMe = () => {
//   emit("changeMe");
// };
</script>
