<template>
  <q-page style="font-family: Arial, Helvetica, sans-serif">
    <div class="text-center">
      <h2>BOBA House Dashboard</h2>
    </div>
    <div class="q-pa-md row items-start q-gutter-md">
      <div class="col">
        <q-card dark bordered class="setUp my-card">
          <q-card-section class="text-dark">
            <div class="text-h6 text-center">Total Order:</div>
          </q-card-section>

          <q-separator color="grey-1" size="5px" inset />

          <q-card-section class="text-dark">
            <div class="text-subtitle1 text-center">{{ totalOrder }}</div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col">
        <q-card dark bordered class="setUp my-card">
          <q-card-section class="text-dark">
            <div class="text-h6 text-center">Pending:</div>
          </q-card-section>

          <q-separator color="grey-1" size="5px" inset />

          <q-card-section class="text-dark">
            <div class="text-subtitle1 text-center">{{ pending }}</div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col">
        <q-card dark bordered class="setUp my-card">
          <q-card-section class="text-dark">
            <div class="text-h6 text-center">Rejected:</div>
          </q-card-section>

          <q-separator color="grey-1" size="5px" inset />

          <q-card-section class="text-dark">
            <div class="text-subtitle1 text-center">{{ rejected }}</div>
          </q-card-section>
        </q-card>
      </div>

      <!-- Table  -->
      <div class="col-12">
        <q-card dark bordered class="setUp my-card">
          <q-card-section class="text-dark">
            <div class="text-h6">Order list</div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <div class="q-pa-md">
              <q-table :rows="rows" :columns="columns" row-key="name" />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
const columns = [
  {
    name: "orderName",
    required: true,
    label: "Order Name",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "customername",
    align: "center",
    label: "Customer Name",
    field: "customerName",
    sortable: true,
  },
  {
    name: "phonenumber",
    label: "Phone number",
    field: "phoneNumber",
    sortable: true,
  },
  { name: "size", align: "center", label: "Size", field: "size" },
  {
    name: "sugarlevel",
    align: "center",
    label: "Sugar Level",
    field: "sugarLevel",
  },
  { name: "topping", align: "center", label: "Topping", field: "topping" },
  { name: "icelevel", align: "center", label: "Ice Level", field: "iceLevel" },
  {
    name: "totalprice",
    align: "center",
    label: "Total Price",
    field: "totalprice",
  },
];

const rows = [
  {
    orderName: "Thai Tea",
    customerName: "Bu",
    phoneNumber: "0123456789",
    size: "16 ML",
    sugarLevel: "No sugar",
    topping: "GB, VB",
    iceLevel: "Hot",
    totalprice: "120",
  },
  {
    orderName: "Thai Tea",
    customerName: "Bu",
    phoneNumber: "0123456789",
    size: "16 ML",
    sugarLevel: "No sugar",
    topping: "GB, VB",
    iceLevel: "Hot",
    totalprice: "120",
  },
  {
    orderName: "Thai Tea",
    customerName: "Bu",
    phoneNumber: "0123456789",
    size: "16 ML",
    sugarLevel: "No sugar",
    topping: "GB, VB",
    iceLevel: "Hot",
    totalprice: "120",
  },
  {
    orderName: "Thai Tea",
    customerName: "Bu",
    phoneNumber: "0123456789",
    size: "16 ML",
    sugarLevel: "No sugar",
    topping: "GB, VB",
    iceLevel: "Hot",
    totalprice: "120",
  },
  {
    orderName: "Thai Tea",
    customerName: "Bu",
    phoneNumber: "0123456789",
    size: "16 ML",
    sugarLevel: "No sugar",
    topping: "GB, VB",
    iceLevel: "Hot",
    totalprice: "120",
  },
];

export default {
  name: "AdminDashboard",

  setup() {
    return {
      columns,
      rows,
      totalOrder: 100,
      pending: 6,
      rejected: 2,
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
