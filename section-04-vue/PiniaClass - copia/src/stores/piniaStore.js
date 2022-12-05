// We need to use the defineStore method in order to create a Pinia Store
import { defineStore } from "pinia";

// we save the defineStore in a variable and we export it directly on line 5
export const usePiniaStore = defineStore("tasks", {
  // State helps us store values that will be accessible everywhere in our application calling usePiniaStore(); (the name of our variable)
  state: () => ({
    brand: "Nike",
    price: 500,
    store: {
      location: "Paseo de Gracia",
      timetables: "De 10:00 a 21:00h",
    },
    students: [
      { name: "Santi", favLanguages: ["HTML"] },
      { name: "Krystel", favLanguages: ["HTML", "CSS"] },
      { name: "Aldo", favLanguages: ["HTML", "JS", "Java"] },
    ],
    showStudents: true,
  }),
  // Actions is an object that stores any method we want. Methods in actions can either change the variables stored in state or not, it's up to us. We wilñl usually use them to alter said variable or to make connections to our database.
  actions: {
    changeBrand(newBrand) {
      // In order to reference the variables stored in state we use "this" keyoword.
      return (this.brand = newBrand);
    },
    duplicatePrice() {
      return (this.price = this.price * 2);
    },
    toggleStudents() {
      this.showStudents = !this.showStudents;
    },
  },
});
