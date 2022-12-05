<script setup>
// import HelloWorld from "./components/HelloWorld.vue";
// import MyFirstComponentVue from "./components/vueBasics/MyFirstComponent.vue";
// import TextDirective from "./components/vueBasics/2-TextDirective.vue";
// import HTMLDirective from "./components/vueBasics/3-htmlDirective.vue";
// import AttributeBinding from "./components/vueBasics/4-attribute-binding.vue";
// import ConditionalRendering from "./components/vueBasics/5-ConditionalRendering.vue";
// import IterateingElements from "./components/vueBasics/6-IteratingElements.vue";
// import Slots from "./components/vueBasics/7-slots/slots-example.vue";
// import SlotsExercise from "./components/vueBasics/slots-exercise/Slot-ex.vue";
// import PropsMyBio from "./components/vueBasics/8-Props/8-Props-MyBio.vue";
// import PropsExampleBio2 from "./components/vueBasics/8-Props/8-Props-Bio-2.vue";
// import BandCard from "./components/vueBasics/8-Props/bandCardComps/BandCard.vue";
import ComputedProperties from "./components/vueBasics/8-ComputedProperties.vue";
import TwoWayBinding from "./components/vueBasics/9-TwoWayBinding.vue";
import ExerciseFormBinding from "./components/vueBasics/9-Exercise-FormBinding.vue";
import Watchers from "./components/vueBasics/10-Watchers.vue";
import ExerciseWatchers from "./components/vueBasics/10-ExerciseWatcher.vue";
import Events from "./components/vueBasics/11-Events/11-Events.vue";
import EventsExample1 from "./components/vueBasics/11-Events/ParentComponent.vue";
import EventsExample2 from "./components/vueBasics/11-Events/A-General.vue";

// const bands = ref([
//   {
//     bandInfo: {
//       name: "The Doors",
//       image:
//         "https://ballesterockmusicdotcom.files.wordpress.com/2016/04/the-doors-logo.jpeg?w=640",
//       genre: "Rock n Roll",
//     },
//     popularSong: "L.A Woman",
//     popularSongInfo:
//       "L.A. Woman is the sixth studio album by the American rock band the Doors, released on April 19, 1971, by Elektra Records. It is the last to feature lead singer Jim Morrison during his lifetime due to his death three months after the album's release, though he would posthumously appear on the 1978 album An American Prayer. Even more so than its predecessors, the album is heavily influenced by blues. It was recorded without record producer Paul A. Rothchild after he fell out with the group over the perceived lack of quality of their studio performances. Subsequently, the band co-produced the album with longtime sound engineer Bruce Botnick.",
//   },
//   {
//     bandInfo: {
//       name: "Led Zeppelin",
//       image: "http://cdn-7.famouslogos.us/images/led-zeppelin-logo.jpg",
//       genre: "Rock n Roll",
//     },
//     popularSong: "Whole Lotta love",
//     popularSongInfo:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsa, consequuntur provident blanditiis facere, aliquid, est nemo repellendus et laudantium tempora iste. Aperiam, ab quasi fugiat dignissimos incidunt quae maxime!",
//   },
// ]);
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
      <!-- <Slots />
      <hr>
      <SlotsExercise />
      <hr> -->
      <!-- <PropsMyBio /> -->
      <!-- <PropsExampleBio2 name="Raphaela" age="34" />
      <hr />
      <BandCard
        class="card-band"
        v-for="(band, index) in bands"
        :key="index"
        :bandInfo="band.bandInfo"
        :bandSong="band.popularSong"
        :bandSongInfo="band.popularSongInfo"
      /> -->
      <!-- <ComputedProperties />
      <hr> -->
      <!-- <TwoWayBinding /> -->
      <!-- <hr />
      <ExerciseFormBinding />
      <hr /> -->
      <!-- <Watchers />
      <hr /> -->
      <!-- <ExerciseWatchers />
      <hr /> -->
      <Events />
      <hr />
      <EventsExample1 />
      <hr />
      <EventsExample2 />
      <hr />
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
