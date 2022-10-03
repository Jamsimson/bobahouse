<template>
  <q-page style="font-family: Arial, Helvetica, sans-serif;" >

    <div class="text-center" >
      <h2>Transaction</h2>
    </div>

    <div class="q-pa-md row items-start q-gutter-md">

      <div class="col-12">
        <q-card dark bordered class="setUp my-card">
          <q-card-section class="text-dark" >
            <div class="text-h6 ">Transaction Daily</div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <div class="q-pa-md">
              <q-table
                :rows="rows"
                :columns="columns"
                row-key="name"
              />
            </div>
          </q-card-section>
        </q-card>

      </div>
    </div>




  </q-page>
</template>

<script>

const columns = [
  { name: 'status', align: 'center', label: 'Status', field: 'status' },
  {
    name: 'name',
    required: true,
    label: 'Order Name',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  
  { name: 'customername', align: 'center', label: 'Customer Name', field: 'customerName', sortable: true },
  { name: 'phonenumber', label: 'Phone number', field: 'phoneNumber', sortable: true },
  { name: 'size',align: 'center', label: 'Size', field: 'size' },
  { name: 'sugarlevel', align: 'center', label: 'Sugar Level', field: 'sugarLevel' },
  { name: 'topping', align: 'center', label: 'Topping', field: 'topping' },
  { name: 'icelevel', align: 'center', label: 'Ice Level', field: 'iceLevel' },
 
  
]

const rows = [
  {
    status:'P',
    name: 'Thai Tea',
    customerName: 'Bu',
    phoneNumber: '0123456789',
    size: '16 ML',
    sugarLevel: 'No sugar',
    topping: 'GB, VB',
    iceLevel: 'Hot',
    
  },
  {
    status:'S',
    name: 'Thai Tea',
    customerName: 'Bu',
    phoneNumber: '0123456789',
    size: '16 ML',
    sugarLevel: 'No sugar',
    topping: 'GB, VB',
    iceLevel: 'Hot',
    
  },
  {
    status:'R',
    name: 'Thai Tea',
    customerName: 'Bu',
    phoneNumber: '0123456789',
    size: '16 ML',
    sugarLevel: 'No sugar',
    topping: 'GB, VB',
    iceLevel: 'Hot',
    
  },
  {
    status:'S',
    name: 'Thai Tea',
    customerName: 'Bu',
    phoneNumber: '0123456789',
    size: '16 ML',
    sugarLevel: 'No sugar',
    topping: 'GB, VB',
    iceLevel: 'Hot',
    
  },
  {
    status:'P',
    name: 'Thai Tea',
    customerName: 'Bu',
    phoneNumber: '0123456789',
    size: '16 ML',
    sugarLevel: 'No sugar',
    topping: 'GB, VB',
    iceLevel: 'Hot',
    
  },
  
]
export default {

  name: "TrasactionBoard",

  setup(){
    return{
      columns,
      rows,
      
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
