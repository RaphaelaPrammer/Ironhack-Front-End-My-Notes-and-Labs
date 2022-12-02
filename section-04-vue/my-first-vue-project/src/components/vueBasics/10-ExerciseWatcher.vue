<template>
  <div>
    <h1>Class Exercise</h1>
    <p>{{ question }}</p>
    <p>Answer:</p>
    <input v-model="answer" type="text" maxlength="3" />
    <p v-if="jsonResponse">{{ jsonResponse }}</p>
    <img v-if="jsonImage" v-bind:src="jsonImage" alt="some gif" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import jsonAnswers from "./10-Watcher.json";
// Ejercicio de watchers
// Crea un componente que haga lo siguiente:
// 1- Te pregunte si te gusta la pizza inyectando la pregunta en un HTML.
// 2- De la respuesta en función a un JSON que debes crear
// 3- El JSON será un archivo local que conteste "Yey, te gusta la pizza" si dices que sí, "Que raro eres" si dices que no y "contéstame bien" si contestas cualquier otra cosa.
// 4- Junto a la contestación, debe aparecer una imagen divertida

//EJEMPLO DEL JSON
// [
//   {
//     "answer": "no",
//     "image": "https://t3.ftcdn.net/jpg/03/36/81/88/360_F_336818845_1tvrNYhwr19LfGiC4BDAeCJzm0mVHH48.jpg"
// }
// ]
const question = ref("Do you like Pizza?");
const answer = ref("");
const jsonResponse = ref("");
const jsonImage = ref("");

watch(answer, async (newAnswer, oldAnswer) => {
  if (answer.value.toLocaleLowerCase() === "yes") {
    jsonResponse.value = jsonAnswers[1].answer + "cool";
    jsonImage.value = jsonAnswers[1].image;
  } else if (answer.value.toLocaleLowerCase() === "no") {
    jsonResponse.value = jsonAnswers[0].answer + "What, who doesnt like pizza?";
    jsonImage.value = jsonAnswers[0].image;
  } else {
    jsonResponse.value = "Give me a correct answer";
    jsonImage.value = jsonAnswers[2].image;
  }
});
</script>
