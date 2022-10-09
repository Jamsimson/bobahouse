<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-card-section class="col-12">
        <div class="text-h6">Add more Menu Or Topping</div>
      </q-card-section>

      <q-tabs v-model="tab" class="text-teal">
        <q-tab label="Menu" name="menu" />
        <q-tab label="Topping" name="topping" />
      </q-tabs>

      <q-separator />

      <div class="q-pa-md">
        <q-tab-panels v-model="tab" animated class="setUp">
          <q-tab-panel name="menu">

            <q-card-section class="flex flex-center">
              <q-btn
              color="white"
              text-color="black"
              label="Add Menu"
              @click="popUpDialog"
            />
            </q-card-section>
            
            
            <!-- <q-table
              grid
              v-ripple
              v-for="newMenu in store.menu"
              :key="newMenu.id"
              :rows="newMenu.item"
              :columns="columns"
              :filter="filter"
              hide-header
            >
            </q-table> -->
            <!-- <q-dialog
              v-model="popUpDialog"
              @submit.prevent="onSubmit"
              @reset="onReset"
            >
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
                        type="text"
                        :label="$t('inputLabel')"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) || 'Please Type Menu Name',
                        ]"
                      />
                    </q-form>
                  </div>
                </q-card-section>

                <q-separator />

                <q-card-actions align="right">
                  <q-btn
                    v-close-popup
                    flat
                    color="pink-1"
                    type="reset"
                    :label="$t('resrBtn')"
                  />
                  <q-btn
                    v-close-popup
                    color="pink-11"
                    :label="$t('addBtn')"
                    type="submit"
                  />
                </q-card-actions>
              </q-card>
            </q-dialog> -->
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
import { useQuasar } from 'quasar' ;
export default {
  name: "menuList",
  setup() {
    const $q = useQuasar()


  function popUpDialog (){
    $q.dialog({
       title: 'Add New Menu',
       prompt:[
       {
        model: '',
        type:'text',
        
       },
       {
        model: '',
        type:'text',
        
       },
       ],
       
       cancle: true,
       persistent: true,
    })
  }

    

    return {
      tab: ref("menu"),
      popUpDialog

      
    };
  },
};
</script>

<style></style>
