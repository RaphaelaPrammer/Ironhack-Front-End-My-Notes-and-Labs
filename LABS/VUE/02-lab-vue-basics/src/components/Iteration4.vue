<template>
  <div>
    <h1>Iteration 4</h1>
    <h2>These are the Albums and Songs of Turnstile:</h2>
    <div v-for="album in albums" :key="album">
      <h3>{{ album.name }}</h3>
      <h4>{{ album.releaseYear }}</h4>
      <h4>Titles:</h4>
      <ul>
        <li v-for="track in album.tracks" :key="track">
          {{ track }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const albums = reactive([
  {
    name: "Glow On",
    releaseYear: "2021",
    numberOfTracks: "",
    tracks: [
      "Mystery",
      "Don't Play",
      "Holiday",
      "Endless",
      "Alien Love Call",
      "Dance-Off",
      "T.L.C.",
      "Lonely Dezires",
    ],
  },
  {
    name: "Time and Space",
    releaseYear: "2018",
    numberOfTracks: "",
    tracks: [
      "Real Thing",
      "Big Smile",
      "Generator",
      "Bomb",
      "I Dont't Wanna Be Blind",
      "High Pressure",
      "....",
    ],
  },
  {
    name: "Nonstop Feeling",
    releaseYear: "2015",
    numberOfTracks: "",
    tracks: [
      "Gravity",
      "Drop",
      "Fazed Out",
      "Can't Deny it",
      "Bleach Temple",
      "Bad Wave",
      "Blue by You",
      "Out of Rage",
      "....",
    ],
  },
]);
</script>
