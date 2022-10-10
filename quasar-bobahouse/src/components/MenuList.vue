<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <!-- <q-card-section class="col-12 flex flex-center">
        <div class="text-h6">Add more Menu Or Topping</div>
      </q-card-section> -->

      <q-tabs v-model="tab" class="text-red-4">
        <q-tab label="Menu" name="menu" />
        <q-tab label="Topping" name="topping" />
      </q-tabs>

      <q-separator />

      <div class="q-pa-md setUp">
        <q-tab-panels v-model="tab" animated class="setUp">
          <q-tab-panel name="menu">
            <q-card-section class="flex flex-center">
              <!-- Sample -->
              <div class="q-pa-md q-gutter-sm">
                <q-btn
                  label="Add Menu"
                  color="white"
                  text-color="dark"
                  @click="addMenu = true"
                />
              </div>
            </q-card-section>
            <!-- Add menu -->
            <q-card-section>
              <q-dialog v-model="addMenu">
                <q-card class="my-card" style="width: 400px">
                  <q-img src="MilkTea.png" />

                  <q-card-section>
                    <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                    >
                      <q-input
                        filled
                        type="text"
                        v-model="menuName"
                        label="Add New Menu Name"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) || 'Please type Menu Name',
                        ]"
                      />

                      <q-input
                        filled
                        type="text"
                        v-model="price"
                        label="Add Price"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) || 'Please give price',
                        ]"
                      />

                      <div>
                        <q-btn label="Submit" type="submit" color="primary" />
                        <q-btn
                          label="Reset"
                          type="reset"
                          color="primary"
                          flat
                          class="q-ml-sm"
                        />
                      </div>
                    </q-form>
                  </q-card-section>
                </q-card>
              </q-dialog>
            </q-card-section>

            <q-table
              grid
              grid-header
              hide-header
              title="All Menu"
              :rows="rows"
              :columns="columns"
              row-key="name"
              :filter="filter"
              v-model:selected="selected"
              selection="single"
            >
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

              <template v-slot:item="props">
                <div
                  class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
                  :style="props.selected ? 'transform: scale(0.95);' : ''"
                >
                  <q-card :class="props.selected ? 'bg-grey-2' : ''">
                    <q-card-section>
                      <q-checkbox
                        dense
                        v-model="props.selected"
                        :label="props.row.name"
                      />
                    </q-card-section>
                    <q-separator />
                    <q-list dense>
                      <q-item
                        v-for="col in props.cols.filter(
                          (col) => col.name !== 'menuName'
                        )"
                        :key="col.name"
                      >
                        <q-item-section>
                          <q-item-label>{{ col.label }}</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                          <q-item-label caption>{{ col.value }}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-card>
                </div>
              </template>
            </q-table>
          </q-tab-panel>

          <q-tab-panel name="topping">
            With so much content to display at once, and often so little screen
            real-estate, Cards have fast become the design pattern of choice for
            many companies, including the likes of Google and Twitter.
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { useAddMenu } from "src/stores/addMenu";

export default {
  name: "menuList",
  setup() {
    const database = useAddMenu();
    const menuName = ref(null);
    const price = ref(null);
    submitNewMenu: ref(false);

    const columns = [
      {
        name: "menuName",
        required: true,
        label: "Name",
        align: "left",
        field: (row) => rows,
        sortable: true,
      },
      {
        name: "price",
        align: "center",
        label: "Price (Bath)",
        field: "price",
        sortable: true,
      },
      { name: "size", label: "Size", field: "size", sortable: true },
    ];

    const rows = [
      {
        name: "Thai Tea",
        price: "95,115,145",
        size: "S,M,L,",
      },
      {
        name: "Milk Tea",
        price: "95,115,145",
        size: "S,M,L,",
      },
      {
        name: "Tarn Q Milk Tea",
        price: "95,115,145",
        size: "S,M,L,",
      },
      {
        name: "Assan Black Tea",
        price: "95,115,145",
        size: "S,M,L,",
      },
      {
        name: "Jasmine Green Tea",
        price: "95,115,145",
        size: "S,M,L,",
      },
      {
        name: "Golden Oolong Tea",
        price: "95,115,145",
        size: "S,M,L,",
      },
    ];

    return {
      tab: ref("menu"),
      filter: ref(""),
      selected: ref([]),
      addMenu: ref(false),

      columns,
      rows,
      menuName,
      price,
      database,

      onSubmit() {
        submitNewMenu: ref(true);
      },
      onReset() {},
    };
  },
};
</script>

<style></style>
