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
    <!-- Card Menu -->
    <div class="flex flex-start q-pa-md" id="layoutbeverage">
      <div class="q-pa-md row items-start q-gutter-md">
        <cardMenu />
      </div>
    </div>
  </q-page>
</template>

<script>
import cardMenu from "../components/cardMenu.vue";
export default {
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
