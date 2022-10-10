import { defineStore } from "pinia";

export const useAddMenu = defineStore("counter", {
  state: () => ({
    menus: [
      { id: 1, name: "Milk Tea", size: { S: 95, M: 115, L: 145 }, image: "" },
      { id: 2, name: "Thai Tea", size: { S: 90, M: 105, L: 135 } },
      { id: 3, name: "Green Tea", size: { S: 95, M: 115, L: 145 } },
    ],
    id: 0,
    count: 8,
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2,
  // },
  actions: {
    addNewMenu(name, num1, num2, num3) {
      this.menus.push({
        id: menus.length + 1,
        name: name,
        size: {
          S: num1,
          M: num2,
          L: num3,
        },
      });
    },
    // toggleCompleted(itemID) {
    //   const newMenu = this.menu.find((object) => object.id == itemID);
    //   if (newMenu) newMenu.completed = !newMnenu.completed;
    // },
  },
});
