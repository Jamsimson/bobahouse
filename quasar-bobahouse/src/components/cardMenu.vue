<template>
  <q-intersection
    v-for="index in database.menus"
    :key="index"
    transition="scale"
    class="card"
  >
    <q-card class="q-ma-md">
      <!-- loop image -->
      <img v-bind:src="index.img" />

      <q-card-section class="colunm">
        <div class="text-h6">{{ index.menu_name }}</div>
        <div class="text-subtitle2">Catagory:{{ index.catagory }}</div>
      </q-card-section>
      <q-card-section>
        <q-card-actions align="right">
          <q-btn
            flat
            round
            color="red"
            icon="add"
            @click="addButton(index.id - 1)"
          />
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-intersection>

  <!-- Dialog beverage's menu-->
  <q-dialog v-model="dialog" persistent>
    <q-card class="my-card bg-white q-pa-md">
      <!-- Section Beverage name and image -->
      <q-card-section>
        <div>
          <div class="colum flex flex-center">
            <div class="closePosition">
              <q-btn
                flat
                round
                color="dark"
                icon="close"
                size="md"
                @click="close()"
              />
            </div>
            <br />
            <!-- Beverage's name -->
            <div class="text-h4">{{ numDialog.menu_name }}</div>
            <!-- Beverage's image -->
            <img
              v-bind:src="numDialog.img"
              alt="image menu"
              :ratio="1"
              class="q-mt-md"
              style="width: 450px"
            />
          </div>
        </div>
      </q-card-section>
      <!-- Section Form  -->
      <q-card-section>
        <FormOptions />
      </q-card-section>
      <q-card-section class="q-pa-md"> </q-card-section>
      <q-card-section>
        <!-- เพิ่มจำนวนเเก้ว + 1 - (add)  col col-sm-2 -->
        <div class="row">
          <div class="col col-sm-2 amount">
            <q-btn
              round
              color="black"
              icon="add"
              @click="database.increaseCount"
            />
          </div>
          <div class="col col-sm-2 amount">
            <div class="text-h3">{{ database.count }}</div>
          </div>
          <div class="col col-sm-2 amount">
            <q-btn
              round
              color="black"
              icon="remove"
              @click="database.decreaseCount"
            />
          </div>
          <div class="col col-sm-6">
            <q-btn
              unelevated
              rounded
              class="addToCart"
              label="Add to Cart"
              style="width: 250px"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import FormOptions from "../components/FormOptions.vue";
import { userCounterStore } from "../stores/database";

export default {
  setup() {
    return {
      dialog: ref(false),
    };
  },
  name: "cardMenu",
  components: {
    FormOptions,
  },
  data() {
    return {
      database: userCounterStore(),
      numDialog: "",
      num: 0,
      size: "",
    };
  },
  methods: {
    addButton(id) {
      this.dialog = true;
      console.log(`dialog id:` + id);
      this.numDialog = this.database.menus[id];
    },
    close() {
      this.dialog = false;
      this.database.resetCount();
      this.numDialog = "";
    },
  },
};
</script>

<style>
.closePosition {
  margin: auto;
  margin-left: 94%;
  margin-right: 0%;
  padding-bottom: 0%;
}
.card {
  margin-right: 1%;
  margin-left: 1%;
  margin-top: 3%;
  margin-bottom: 5%;
  height: 290px;
  width: 290px;
}
.my-card {
  width: 100%;
  max-width: 350px;
}
.addToCart {
  background-color: #d6baff;
}
</style>
