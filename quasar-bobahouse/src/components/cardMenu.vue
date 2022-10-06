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
          <q-btn flat round color="red" icon="add" @click="confirm = true" />
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-intersection>

  <!-- Dialog -->
  <q-dialog v-model="confirm" persistent>
    <q-card class="my-card bg-white q-pa-md">
      <div class="flex flex-center">
        <div class="closePosition">
          <q-btn
            flat
            round
            color="dark"
            icon="close"
            size="md"
            @click="confirm = false"
          />
        </div>
        <img
          src="MilkTea-2.png"
          alt="logo boba house"
          :ratio="1"
          class="q-mt-md flex-center"
          style="width: 150px; border-radius: 4px"
        />
      </div>
      <q-card-section>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <div>
            <q-input
              filled
              color="dark"
              v-model="username"
              label="Name"
              :dense="dense"
            /><br />
            <q-input
              filled
              color="dark"
              v-model="phonenumber"
              label="Phone number"
              :dense="dense"
            />
          </div>
          <div class="button">
            <q-btn label="Submit" type="submit" color="dark" />
            <q-btn
              label="Reset"
              type="reset"
              color="grey-9"
              flat
              class="q-ml-sm"
              @click="onReset()"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      confirm: ref(false),
    };
  },
  name: "cardMenu",
  data() {
    return {
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
      ],
    };
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
