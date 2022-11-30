<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Iteration2 from "./components/Iteration2.vue";
import Iteration3 from "./components/Iteration3.vue";
import Iteration4 from "./components/Iteration4.vue";
import Iteration5 from "./components/Iteration5.vue";
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <HelloWorld msg="VUE LAB 02 Raphaela Prammer" />
      </div>
    </header>
    <nav>
      <NavBar />
    </nav>
    <main>
      <Iteration2 />
      <Iteration3 />
      <Iteration4 />
      <Iteration5 />
    </main>

    <footer>
      <Footer />
    </footer>
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
