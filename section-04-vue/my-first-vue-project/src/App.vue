<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import MyFirstComponentVue from "./components/vueBasics/MyFirstComponent.vue";
import TextDirective from "./components/vueBasics/2-TextDirective.vue";
import HTMLDirective from "./components/vueBasics/3-htmlDirective.vue";
import AttributeBinding from "./components/vueBasics/4-attribute-binding.vue";
import ConditionalRendering from "./components/vueBasics/5-ConditionalRendering.vue";
import IterateingElements from "./components/vueBasics/7-IteratingElements.vue";
import SlotsExercise from "./components/vueBasics/slots-exercise/Slot-ex.vue";
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <HelloWorld msg="VUE BASICS" />
      </div>
    </header>

    <main>
      <!-- <MyFirstComponentVue />
      <hr />
      <TextDirective />
      <hr />
      <HTMLDirective />
      <hr />
      <AttributeBinding /> -->
      <!-- <hr />
      <ConditionalRendering />
      <hr /> -->
      <!-- <IterateingElements />
      <hr> -->
      <SlotsExercise />
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
