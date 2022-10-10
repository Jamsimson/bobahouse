<template>
  <q-page class="q-pa-md" padding>
    <div class="q-pa-md">
      <div class="text-h4">Your cart</div>
    </div>
  </q-page>
</template>

<script>
import { userCounterStore } from "../stores/database";
export default {
  name: "PaymentPage",
  data() {
    return {
      database: userCounterStore(),
    };
  },
};
</script>

<style>
.text-h4 {
  margin: auto;
  margin-left: 5%;
}
</style>
