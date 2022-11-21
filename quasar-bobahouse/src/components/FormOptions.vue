<template>
  <q-card class="form-section-1">
    <q-card-section class="q-pa-md">
      <div class="text-h5">Size</div>
      <div>
        <q-radio name="size" v-model="size" val="S" label="S" />
      </div>
      <div>
        <q-radio name="size" v-model="size" val="M" label="M" />
      </div>
      <div>
        <q-radio name="size" v-model="size" val="L" label="L" />
      </div>
    </q-card-section>
  </q-card>
  <br />
  <q-card class="form-section-2">
    <q-card-section class="q-pa-md">
      <div class="text-h5">Sugar Level</div>
      <div>
        <q-radio name="sugar" v-model="sugar" val="0%" label="0%" />
      </div>
      <div>
        <q-radio name="sugar" v-model="sugar" val="25%" label="25%" />
      </div>
      <div>
        <q-radio name="sugar" v-model="sugar" val="50%" label="50%" />
      </div>
      <div>
        <q-radio name="sugar" v-model="sugar" val="75%" label="75%" />
      </div>
      <div>
        <q-radio name="sugar" v-model="sugar" val="100%" label="100%" />
      </div>
      <div>
        <q-radio name="sugar" v-model="sugar" val="120%" label="120%" />
      </div>
    </q-card-section>
  </q-card>
  <br />
  <q-card class="form-section-3">
    <q-card-section class="q-pa-md">
      <div class="text-h5">Topping</div>
      <div>
        <q-radio
          name="sugar"
          v-model="topping"
          val="topping1"
          label="topping1"
        />
      </div>
      <div>
        <q-radio
          name="sugar"
          v-model="topping"
          val="topping2"
          label="topping2"
        />
      </div>
      <div>
        <q-radio
          name="sugar"
          v-model="topping"
          val="topping3"
          label="topping3"
        />
      </div>
    </q-card-section>
  </q-card>
  <br />
  <q-card class="form-section-4">
    <q-card-section class="q-pa-md">
      <div class="text-h5">Ice</div>
      <div>
        <q-radio name="ice" v-model="ice" val="ice1" label="ice1" />
      </div>
      <div>
        <q-radio name="ice" v-model="ice" val="ice2" label="ice2" />
      </div>
      <div>
        <q-radio name="ice" v-model="ice" val="ice3" label="ice3" />
      </div>
      <div>
        <q-radio name="ice" v-model="ice" val="ice4" label="ice4" />
      </div>
    </q-card-section>
  </q-card>
  <div>{{ size }} {{ sugar }} {{ topping }} {{ ice }}</div>
</template>

<script>
import { userCounterStore } from "../stores/database";
import { userFormStore } from "../stores/form";
export default {
  name: "FormOptions",

  data() {
    return {
      database:userCounterStore(),
      order: [],
      size: "",
      sugar: "",
      topping: "",
      ice: "",
    };
  },
  methods:{
    
  }
};
</script>

<style>
.form-section-1,
.form-section-2,
.form-section-3,
.form-section-4 {
  width: 500px;
}
</style>
