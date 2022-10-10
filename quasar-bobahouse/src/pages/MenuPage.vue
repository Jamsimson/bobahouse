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
    <div class="flex flex-center">
      <q-btn color="red" icon="add" label="Add" @click="addMenu = true" />

      <q-dialog v-model="addMenu" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar
              icon="signal_wifi_off"
              color="primary"
              text-color="white"
            />
            <span class="q-ml-sm"
              >You are currently not connected to any network.</span
            >
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
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
export default {
  setup() {
    return {
      addMenu: ref(false),
    };
  },
  name: "MenuPage",
  components: {
    cardMenu,
  },
  data() {
    return {};
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
