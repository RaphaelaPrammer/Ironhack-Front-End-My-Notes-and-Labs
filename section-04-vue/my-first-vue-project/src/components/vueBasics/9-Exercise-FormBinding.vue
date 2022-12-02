<template>
  <div>
    <h1>PRIMAVERA IS COMING---THE FESTIVAL!</h1>
    <div id="primaveraForm">
      <form @submit.prevent="submitForm">
        <div id="user-input-formName-data">
          <label for="name">Enter Your Name</label>
          <input
            type="text"
            autocomplete="off"
            id="name"
            v-model="primaveraData.formName"
          />
        </div>
        <div id="user-input-formEmail-data">
          <label for="name">Enter Email</label>
          <input
            type="email"
            autocomplete="off"
            id="email"
            v-model="primaveraData.formEmail"
          />
        </div>
        <div id="user-input-artists-data">
          <label>Which Artists do you want to see?</label>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="depecheMode"
              value="depecheMode"
              v-model="primaveraData.artists"
            />
            <label for="depecheMode">Depeche Mode</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="kendrickLamar"
              value="kendrickLamar"
              v-model="primaveraData.artists"
            />
            <label for="kendrickLamar">Kendrick Lamar</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="turnstile"
              value="turnstile"
              v-model="primaveraData.artists"
            />
            <label for="turnstile">Turnstile</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="blur"
              value="blur"
              v-model="primaveraData.artists"
            />
            <label for="blur">Blur</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="ghost"
              value="ghost"
              v-model="primaveraData.artists"
            />
            <label for="ghost">Ghost</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="rosalia"
              value="rosalia"
              v-model="primaveraData.artists"
            />
            <label for="rosalia">Rosalia</label>
          </div>
        </div>
        <label>Do you?</label>
        <div id="user-input-consumeAlcohol-data">
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="consumeAlcohol"
              v-model="primaveraData.consumeAlcohol"
            />
            <label for="consumeAlcohol"> Consume Alcohol?</label>
          </div>
        </div>
        <div id="user-input-consumeDrugs-data">
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="consumeDrugs"
              v-model="primaveraData.consumeDrugs"
            />
            <label for="consumeDrugs"> Consume Drugs?</label>
          </div>
        </div>
        <div id="user-input-dressedBlack-data">
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="dressedBlack"
              v-model="primaveraData.dressedBlack"
            />
            <label for="dressedBlack"> Come dressed in Black?</label>
          </div>
        </div>
        <div id="user-input-groupBiggerThanTwo-data">
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="groupBiggerThanTwo"
              v-model="primaveraData.groupBiggerThanTwo"
            />
            <label for="groupBiggerThanTwo">
              Come in a Group bigger than 2?</label
            >
          </div>
        </div>
        <label>Are you?</label>
        <div id="user-input-ageAbove21-data">
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="ageAbove21"
              v-model="primaveraData.ageAbove21"
            />
            <label for="ageAbove21"> Above 21 years?</label>
          </div>
        </div>
        <div id="user-input-suggestions-data">
          <label for="suggestions">Any Suggestions?</label>
          <br /><textarea
            name="suggestions"
            id="suggestions"
            cols="30"
            rows="10"
            v-model.trim.lazy="primaveraData.suggestions"
          ></textarea>
        </div>
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const primaveraData = reactive({
  formName: "",
  formEmail: "",
  artists: [],
  consumeAlcohol: false,
  consumeDrugs: false,
  dressedBlack: false,
  ageAbove21: false,
  groupBiggerThanTwo: false,
  suggestions: "",
});

const submitForm = () => {
  //   console.log("Form Values", formValues);
  alert(`
        !!SUCCESS!!
        We succesfully received your Infos
        Name: ${primaveraData.formName}
        Email: ${primaveraData.formEmail}
        Artists: ${primaveraData.artists}
        Alcohol: ${primaveraData.consumeAlcohol ? "yes" : "no"}
        Drugs: ${primaveraData.consumeDrugs ? "yes" : "no"}
        Dressed Black: ${primaveraData.dressedBlack ? "yes" : "no"}
        Above 21: ${primaveraData.ageAbove21 ? "yes" : "no"}
        Group above 2pax: ${primaveraData.groupBiggerThanTwo ? "yes" : "no"}
        Suggestions: ${primaveraData.suggestions}
        `);
};
</script>
