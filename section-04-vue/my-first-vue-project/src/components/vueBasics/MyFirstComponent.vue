<template>
  <div>
    <p>Mi nombre es Diego y me gusta mucho programar</p>

    <!-- Usando text interpolation aka syntax de bigotes! -->
    <h1>{{ diego }}</h1>
    <h1>
      Naci en {{ cityOfBirth }}, {{ truthyValue }} venezuela y tengo
      {{ age }} años. {{ nullValue }}
    </h1>
    <h1>{{ myInfo.age }} {{ myInfo.countryOfBirth }} Hola Santi</h1>
    <h1>{{ myInfo.countryOfBirth }}</h1>

    <div>
      <button @click="decreaseCounter">-</button>
      <h1>{{ diego }}</h1>
      <button @click="increaseCounter">+</button>
    </div>
    <hr />
    <hr />
    <h1><mark>Example My Bio</mark></h1>
    <h2>
      My Name is {{ myBio.firstName }} {{ myBio.lastName }}, my Birthday is the
      {{ myBio.dateOfBirth }} and my hobbies are {{ myBio.hobbies[0] }},
      {{ myBio.hobbies[1] }} and {{ myBio.hobbies[2] }}.
    </h2>

    <h2>
      My favorite food is {{ favFood }} and my favorite Movie is
      {{ favMovie }} and i have seen it {{ favMovieTimesSeen }} times.
    </h2>
  </div>
</template>

<!-- Aca adentro es donde colocaremos nuestro JS -->

<script setup>
// Si queremos trabajar con datos primitivos o no primitivos dentro de nuestro script con el composition API tenemos que activar nuestra reactividad. Esta reactividad por defecto se usan 2 tipos de metodos nativos al framework para poder trabajar de una manera reactiva.
// Un metodo se llama ref()
// Un metodo se llama rective()
// Pasos:
// Primero nos tenemos que importar estos metodos desde la libreria de vue :)
import { ref, reactive } from "vue";
//

// Vamos a decalrar variables que contengan el metodo dentro para poder trabajar correctamente datos que sean reactivos:)
const diego = 0;
// Primitive Data Types
const cityOfBirth = ref("valencia");
const age = ref(31);
const truthyValue = ref(false);
const nullValue = ref(null);
// Non Primitive Data Types
const myInfo = reactive({
  age: 31,
  cityOfBirth: "Valencia",
  countryOfBirth: "Venezuela",
  likesAlcohol: true,
});
const counter = reactive({
  count: 0,
  title: "My counter",
});
const increaseCounter = () => {
  diego++;
};
const decreaseCounter = () => {
  diego--;
};

//----------------------------------------------------
//EXAMPLE CLASS

const myBio = reactive({
  firstName: "Raphaela",
  lastName: "Prammer",
  dateOfBirth: "15.08.1988",
  hobbies: ["concerts", "music", "cooking"],
});

const favFood = ref("Pizza");
const favMovie = ref("Big Fish");
const favMovieTimesSeen = ref("x");
</script>

<style></style>
