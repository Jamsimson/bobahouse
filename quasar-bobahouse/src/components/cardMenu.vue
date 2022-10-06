<template>
  <q-intersection
    v-for="index in menus"
    :key="index"
    transition="scale"
    class="card"
  >
    <q-card class="q-ma-sm">
      <!-- loop image -->
      <img v-bind:src="index.img" />

      <q-card-section>
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
        <div class="flex flex-center">
          <div class="colunm">
            <div class="closePosition">
              <q-btn
                flat
                round
                color="dark"
                icon="close"
                size="md"
                @click="dialog = false"
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
              class="q-mt-md flex-center"
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
        <!-- เพิ่มจำนวนเเก้ว + 1 - (add) -->
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import FormOptions from "../components/FormOptions.vue";
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
      numDialog: "",
      size: "",
      menus: [
        // id 1
        {
          id: 1,
          img: "https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1",
          menu_name: "Thai Tea",
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
          menu_name: "Milk Tea",
          catagory: "Tea",
          size: {
            S: 30,
            M: 45,
            L: 55,
          },
        },
        {
          id: 3,
          img: "https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1",
          menu_name: "Milk Tea boba",
          catagory: "Tea",
          size: {
            S: 30,
            M: 45,
            L: 55,
          },
        },
        // id 1
        {
          id: 4,
          img: "https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1",
          menu_name: "Thai Tea",
          catagory: "Tea",
          size: {
            S: 30,
            M: 45,
            L: 55,
          },
        },
        //  id 2
        {
          id: 5,
          img: "https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1",
          menu_name: "Milk Tea",
          catagory: "Tea",
          size: {
            S: 30,
            M: 45,
            L: 55,
          },
        },
        {
          id: 6,
          img: "https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1",
          menu_name: "Milk Tea boba",
          catagory: "Tea",
          size: {
            S: 30,
            M: 45,
            L: 55,
          },
        },
      ],
    };
  },
  methods: {
    addButton(id) {
      this.dialog = true;
      console.log(`dialog id:` + id);
      this.numDialog = this.menus[id];
    },
    close() {
      this.dialog = false;
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
}
.card {
  height: 290px;
  width: 290px;
}
</style>
