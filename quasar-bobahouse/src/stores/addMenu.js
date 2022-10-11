import { defineStore } from "pinia";

export const userCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
    users: [
      {
        id: 1,
        username: "Minisong",
        phonenumber: "023-651-4895",
      },
    ],
    carts: [],
    menus: [
      {
        id: 1,
        img: "https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1",
        menu_name: "Thai Tea 1",
        catagory: "Tea",
        size: {
          S: 30,
          M: 45,
          L: 55,
        },
      },
      //  id 2
      {
        id: 2,
        img: "https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1",
        menu_name: "Milk Tea 2",
        catagory: "Tea",
        size: {
          S: 30,
          M: 45,
          L: 55,
        },
      },
      //  id 3
      {
        id: 3,
        img: "https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1",
        menu_name: "Milk Tea 3",
        catagory: "Tea",
        size: {
          S: 30,
          M: 45,
          L: 55,
        },
      },
      //  id 4
      {
        id: 4,
        img: "https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1",
        menu_name: "Milk Tea 4",
        catagory: "Tea",
        size: {
          S: 30,
          M: 45,
          L: 55,
        },
      },
      //  id 5
      {
        id: 5,
        img: "https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1",
        menu_name: "Milk Tea 5",
        catagory: "Tea",
        size: {
          S: 30,
          M: 45,
          L: 55,
        },
      },
      //  id 6
      {
        id: 6,
        img: "https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1",
        menu_name: "Milk Tea 6",
        catagory: "Tea",
        size: {
          S: 30,
          M: 45,
          L: 55,
        },
      },
    ],
  }),
  actions: {
    increaseCount() {
      this.count++;
    },
    decreaseCount() {
      if (this.count === 0) {
        this.count = 0;
      } else {
        this.count--;
      }
    },
    resetCount() {
      this.count = 0;
    },
    increaseMenu() {
      this.menus.push({ id: this.menus.length + 1 });
    },
    addMenu() {},
  },
});
