import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  actions: {
    addOneToCount() {
      return (this.count += 1);
    },
    reduceOneFromCount() {
      return (this.count -= 1);
    },
  },
});
