<template>
  <q-page style="font-family: Arial, Helvetica, sans-serif">
    <div class="text-center">
      <h2>ManagementMenu</h2>
    </div>

    <div class="q-pa-md">
      <q-card class="my-card">
        <q-card-section class="col-12">
          <div class="text-h6">Add more Menu Or Topping</div>
        </q-card-section>

        <q-tabs v-model="tab" class="text-teal">
          <q-tab label="Menu" name="Menu" />
          <q-tab label="Topping" name="Topping" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated class="setUp">
          <!-- Menu tab -->
          <q-tab-panel name="Menu">
            <q-table
              grid
              :rows="rows"
              :columns="columns"
              row-key="name"
              :filter="filter"
              hide-header
            >
              <template v-slot:top-left>
                <q-btn
                  color="white"
                  text-color="black"
                  label="Add Menu"
                  @click="card = true"
                />

                <!-- Dialog -->
                <q-dialog v-model="card">
                  <q-card class="my-card">
                    <q-uploader
                      color="pink-3"
                      flat
                      bordered
                      label="Add image"
                      style="max-width: 300px"
                    />

                    <q-card-section>
                      <div class="col text-h6 ellipsis">Add New Menu</div>

                      <div class="row no-wrap items-center">
                        <q-form
                          @submit="onSubmit"
                          @reset="onReset"
                          class="q-gutter-md col"
                        >
                          <q-input
                            filled
                            v-model="menuName"
                            label="Menu name *"
                            lazy-rules
                            :rules="[
                              (val) =>
                                (val && val.length > 0) ||
                                'Please Type Menu Name',
                            ]"
                          />
                          {{ menuName }}
                        </q-form>
                      </div>
                    </q-card-section>

                    <q-separator />

                    <q-card-actions align="right">
                      <q-btn v-close-popup flat color="pink-1" label="Cancel" />
                      <q-btn v-close-popup color="pink-11" label="Comfirm" />
                    </q-card-actions>
                  </q-card>
                </q-dialog>
              </template>
              <template v-slot:top-right>
                <q-input
                  borderless
                  dense
                  debounce="300"
                  v-model="filter"
                  placeholder="Search"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </template>
            </q-table>
          </q-tab-panel>

          <!-- Topping Tab -->
          <q-tab-panel name="Topping">
            <q-table
              grid
              title="Add Topping"
              :rows="rowsTopping"
              :columns="columnsTopping"
              row-key="name"
              :filter="filter"
              hide-header
            >
              <template v-slot:top-left>
                <q-btn
                  color="white"
                  text-color="black"
                  icon="my_location"
                  @click="addTopping"
                />
              </template>
              <template v-slot:top-right>
                <q-input
                  borderless
                  dense
                  debounce="300"
                  v-model="filter"
                  placeholder="Search"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </template>
            </q-table>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script>
const columns = [
  {
    name: "desc",
    required: true,
    label: "Dessert (100g serving)",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Calories",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  { name: "carbs", label: "Carbs (g)", field: "carbs" },
];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
  },
];

const columnsTopping = [
  {
    name: "desc",
    required: true,
    label: "Dessert (100g serving)",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Calories",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  { name: "carbs", label: "Carbs (g)", field: "carbs" },
];

const rowsTopping = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
  },
];

import { ref } from "vue";
import { useQuasar } from "quasar";

export default {
  name: "ManagementMenu",

  setup() {
    const $q = useQuasar();

    const menuName = ref(null);
    const accept = ref(false);
    return {
      tab: ref("Menu"),
      filter: ref(""),
      card: ref(false),
      file: ref(null),

      menuName,
      accept,

      columns,
      rows,
      columnsTopping,
      rowsTopping,

      onSubmit() {
        console.log(menuName);
      },
      onReset() {
        menuName.value = null;
      },
    };
  },
};
</script>

<style>
.setUp {
  background-color: #d6baff;

  font-family: Arial, Helvetica, sans-serif;
}
</style>
