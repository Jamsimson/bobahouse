<template>
  <q-page class="justify-center q-pa-md" padding>
    <div class="text-h3">Your cast</div>
    <br />
    <q-card class="my-card">
      <q-card-section v-if="this.count != 0">
        <div class="row flex-center" align="center">
          <div class="col-3 text-h6">{{this.database.carts[0].menu_name}}{{this.database.carts[0].topping}}</div>
          <div class="col-2 text-h5">{{this.database.carts[0].size}}</div>
          <div class="col-2">
            <div class="row justify-center">
              <div class="col">
                <q-btn
                  round
                  color="black"
                  icon="remove"
                  @click="decreaseCount()"
                />
              </div>
              <div class="col text-h4">
                {{ this.count }}
              </div>
              <div class="col">
                <q-btn
                  round
                  color="black"
                  icon="add"
                  @click="increaseCount()"
                />
              </div>
            </div>
          </div>
          <div class="col-1">{{ menu_price }}</div>
          <div class="col-2">
            <q-btn round color="red" icon="delete" @click="cancelCount()" />
          </div>
        </div>
      </q-card-section>
    </q-card>
    <section class="justify-center q-pa-md text-right">
      <div class="text-h6 text-weight-bold">Total {{ totalPrice() }}</div>
      <div class="">
        <q-btn rounded color="accent" icon="check" label="Check out" @click="checkMethod()" />
      </div>
    </section>
  </q-page>
</template>

<script>
import { userCounterStore } from "../stores/database";
export default {
  name: "PaymentPage",
  data() {
    return {
      database:userCounterStore(),
      count: 1,
      menu_price: 0,
      menu_total: 190,
      new: 120,
      total: 0,
      carts:[]
    };
  },
  mounted(){
    this.count = this.database.carts[0].count;
    
  },
  methods: {
    increaseCount() {
      this.count++;
      this.menu_price += this.menu_total;
    },
    decreaseCount() {
      this.count--;
      this.menu_price -= this.menu_total;
    },
    cancelCount() {
      this.count = 0;
      this.menu_price = 0;
    },
    totalPrice() {
      this.total = this.menu_price;
      return this.total;
    },
    checkMethod(){
      alert("Total price" + this.total + "$")
    }
  },
};
</script>

<style>
.text-h4 {
  margin: auto;
  margin-left: 5%;
}
</style>
