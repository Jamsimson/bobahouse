<template>
  <q-page padding>
    <div class="flex flex-center q-mt-md">
      <div class="text-h3">MENU BOBA HOUSE</div>
    </div>
    <br />
    <!-- Search Button -->
    <div class="flex flex-center">
      <q-input
        rounded
        outlined
        color="dark"
        v-model="text"
        label="Search"
        class="buttonsearch"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <!-- Catagory dropdown-->
    <div class="flex flex-center">
      <q-select
        borderless
        color="dark"
        v-model="model"
        :options="options"
        label="Catagory"
        class="buttoncatagory"
      />
    </div>
    <!-- Add menu  -->
    <!-- <div class="flex flex-center">
      <q-btn color="red" icon="add" label="Add" @click="addMenu = true" />
      <q-btn
        color="primary"
        icon="add"
        label="remove"
        @click="removeMenu = true"
      /> -->
    <!-- Add Menu -->
    <!-- <q-dialog v-model="addMenu" persistent>
        <q-card>
          <q-card-section class="colunm items-center">
            <q-input v-model="menu_name" type="text" label="Menu name" />
            <q-input v-model="catagory" type="text" label="Catagory" />
            <q-input v-model="size_s" type="text" label="Price S" />
            <q-input v-model="size_m" type="text" label="Price M" />
            <q-input v-model="size_l" type="text" label="Price L" />
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="red" v-close-popup />
            <q-btn
              flat
              label="Submit"
              color="red"
              v-close-popup
              @click="addMenuFunction()"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div> -->
    <!-- Delete Menu -->
    <q-dialog v-model="removeMenu" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-input v-model="id_menu" type="number" label="Id Menu" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn
            flat
            label="Remove"
            color="primary"
            v-close-popup
            @click="removeMenuFunction(id_menu)"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- Card Menu -->
    <div class="q-pa-md" id="layoutbeverage">
      <div class="q-pa-md row col-3 grid-container">
        <cardMenu />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import cardMenu from "../components/cardMenu.vue";
import { userCounterStore } from "../stores/database";
export default {
  setup() {
    return {
      addMenu: ref(false),
      removeMenu: ref(false),
    };
  },
  name: "MenuPage",

  components: {
    cardMenu,
  },
  data() {
    return {
      database: userCounterStore(),
      id: "",
      img: "",
      menu_name: "",
      catagory: "",
      size_s: 0,
      size_m: 0,
      size_l: 0,
    };
  },
  methods: {
    resetForm() {
      (this.menu_name = ""),
        (this.catagory = ""),
        (this.size_s = 0),
        (this.size_m = 0),
        (this.size_l = 0);
    },
    addMenuFunction() {
      this.database.menus.push({
        id: this.database.menus.length + 1,
        img: "https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1",
        menu_name: this.menu_name,
        catagory: this.catagory,
        size: {
          S: this.size_s,
          M: this.size_m,
          L: this.size_l,
        },
      });
      console.log(`New menu:`, this.database.menus);
      this.resetForm();
    },
    // removeMenuFunction(id) {
    //   this.database.menus.(id - 1);
    //   console.log(`successful`, id);

    //   this.resetForm();
    // },
  },
};
</script>

<style>
.buttonsearch {
  width: 65%;
}
.buttoncatagory {
  width: 10%;
  margin-left: 0%;
  margin-right: 55%;
}
.my-card {
  border-radius: 4%;
  width: 100%;
  max-width: 300px;
}
#layoutbeverage {
  margin: auto;
  margin-left: 6%;
  margin-right: 0%;
}
</style>
