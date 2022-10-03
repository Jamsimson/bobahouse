<template>

  <q-page style="font-family: Arial, Helvetica, sans-serif;" >

    <div class="text-center" >
      <h2>ManagementMenu</h2>
    </div>

    <div class="q-pa-md ">
      <q-card class="my-card ">
        <q-card-section class="col-12" >
          <div class="text-h6 ">Our  Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
  
        <q-tabs v-model="tab" class="text-teal">
          <q-tab label="Tab one" name="one" />
          <q-tab label="Tab two" name="two" />
        </q-tabs>
  
        <q-separator />
  
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="one">
            The QCard component is a great way to display important pieces of grouped content.
          </q-tab-panel>
  
          <q-tab-panel name="two">
            With so much content to display at once, and often so little screen real-estate,
            Cards have fast become the design pattern of choice for many companies, including
            the likes of Google and Twitter.
            
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>



  </q-page>


</template>

<script>

import { ref } from 'vue'

export default {

  name: "ManagementMenu",

  setup () {
    return {
      tab: ref('one')
    }
  }

}
</script>

<style>
  
  .setUp {
    background-color: #d6baff;
    font-family: Arial, Helvetica, sans-serif;
  }
    

  .my-card{
    width: 2000px;
    max-width: 2000px;
  }
    

</style>
