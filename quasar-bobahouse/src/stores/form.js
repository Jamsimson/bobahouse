import { defineStore } from "pinia";

export const userFormStore = defineStore({
  id: "form",
  state: () => ({
    amount: 0,
    options: {},
    cart: [],
  }),
  actions: {
    addOrder() {},
  },
});
