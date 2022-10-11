<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <!-- <q-card-section class="col-12 flex flex-center">
        <div class="text-h6">Add more Menu Or Topping</div>
      </q-card-section> -->

      <q-tabs v-model="tab" class="text-red-4">
        <q-tab label="Menu" name="menu" />
        <q-tab label="Add On" name="addOn" />
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
                <q-btn
                  color="white"
                  label="remove"
                  text-color="dark"
                  @click="removeMenu = true"
                />
              </div>
            </q-card-section>
            <!-- Add menu -->
            <q-card-section
              v-for="index in database.menus"
              :key="index"
              class="q-pa-md row items-start q-gutter-md flex flex-center"
            >
              <q-card-section>
                <q-dialog v-model="addMenu">
                  <q-card class="my-card" style="width: 400px">
                    <q-card-section>
                      <q-card-section class="colunm items-center">
                        <q-input
                          v-model="menu_name"
                          type="text"
                          label="Menu name"
                        />
                        <q-input
                          v-model="catagory"
                          type="text"
                          label="Catagory"
                        />
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
                    </q-card-section>
                  </q-card>
                </q-dialog>
              </q-card-section>

              <q-card-section class="col-4">
                <q-img v-bind:src="index.img" />
                <div class="text-h6">{{ index.menu_name }}</div>
                <div class="text-subtitle2">Catagory:{{ index.catagory }}</div>
                <div class="text-subtitle2">Size S :{{ index.size.S }}</div>
                <div class="text-subtitle2">Size M :{{ index.size.M }}</div>
                <div class="text-subtitle2">Size L :{{ index.size.L }}</div>
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
            </q-card-section>
            <q-card-section>
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
            </q-card-section>
          </q-tab-panel>

          <q-tab-panel name="addOn">
            <q-card-section class="flex flex-center">
              <!-- Sample -->
              <div class="q-pa-md q-gutter-sm">
                <q-btn
                  label="Add"
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
                        v-model="topic"
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
              :rows="rowsAddOn"
              :columns="columnsAddOn"
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
                          (col) => col.name !== 'topic'
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
        </q-tab-panels>
      </div>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { userCounterStore } from "src/stores/addMenu";

export default {
  name: "menuList",
  setup() {
    const menuName = ref(null);
    const topic = ref(null);
    const price = ref(null);
    submitNewMenu: ref(false);

    return {
      tab: ref("menu"),
      filter: ref(""),
      selected: ref([]),
      addMenu: ref(false),
      removeMenu: ref(false),
      id: ref(null),
      img: ref(null),
      menu_name: ref(null),
      catagory: ref(null),
      size_s: ref(null),
      size_m: ref(null),
      size_l: ref(null),

      menuName,
      price,
      database: userCounterStore(),
      topic,
      onSubmit(id) {
        submitNewMenu: ref(true);
      },
      onReset() {},

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
      removeMenuFunction(id) {
        this.database.menus.splice(id - 1);
        this.resetForm;
      },
    };
  },
};
</script>

<style></style>
