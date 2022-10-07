import { defineStore } from "pinia";

export const useAddMenu = defineStore("counter", {
  state: () => ({
    menu: [],
    id: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    addNewMenu() {
      this.menu.push({
        item,
        id: this.id++,
        complete: false,
      });
    },
    toggleCompleted(itemID) {
      const newMenu = this.menu.find((object) => object.id == itemID);
      if (newMenu) newMenu.completed = !newMnenu.completed;
    },
  },
});
