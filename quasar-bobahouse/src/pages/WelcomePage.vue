<template>
  <q-page class="q-pa-md flex flex-center" >
    <q-page-container>
        <div class="flex flex-center">
      <div class="column flex-center">
        <div class="col text-h2">Welcome to BOBA HOUSE</div>
        <div class="col text-h4">Bond of lifetime</div>
        <br />
        <div class="button">
            <q-btn outline rounded class="" color="white" text-color="black" label="Let's Order" @click="$router.push('/form')" />
        </div>
      </div>
    </div>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  name: "WelcomePage",
  methods:{

  },
};
</script>

<style>
.text-h4 {
  color: white;
}
</style>
