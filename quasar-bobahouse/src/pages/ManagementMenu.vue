<template>

  <q-page style="font-family: Arial, Helvetica, sans-serif;">

    <div class="text-center">
      <h2>ManagementMenu</h2>
    </div>

    <div class="q-pa-md ">
      <q-card class="my-card">
        <q-card-section class="col-12 ">
          <div class="text-h6 ">Add more Menu Or Topping</div>
        </q-card-section>

        <q-tabs v-model="tab" class="text-teal">
          <q-tab label="Menu" name="Menu" />
          <q-tab label="Topping" name="Topping" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated class="setUp">

          <!-- Menu tab -->
          <q-tab-panel name="Menu">
            <q-btn color="white" text-color="black" icon="my_location" />
            <q-table grid title="Add Menu" :rows="rows" :columns="columns" row-key="name" :filter="filter" hide-header>

              <template v-slot:top-right>
                <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">

                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>

                </q-input>

              </template>
            </q-table>
          </q-tab-panel>

          <!-- Topping Tab -->
          <q-tab-panel name="Topping">
            <q-table grid title="Add Topping" :rows="rowsTopping" :columns="columnsTopping" row-key="name"
              :filter="filter" hide-header>
              <template v-slot:top-right>
                <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
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
    name: 'desc',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' }
]

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94
  },
]


const columnsTopping = [
  {
    name: 'desc',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' }
]

const rowsTopping = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94
  },
]


import { ref } from 'vue'

export default {

  name: "ManagementMenu",

  setup() {
    return {
      tab: ref('Menu'),
      filter: ref(''),
      columns,
      rows,
      columnsTopping,
      rowsTopping,
    }
  }

}
</script>

<style>
.setUp {
  background-color: #d6baff;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
