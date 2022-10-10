<template>
  <q-page class="q-pa-md flex flex-center">
    <q-page-container>
      <div class="flex flex-center">
        <div class="column flex-center">
          <div class="col text-h2">Welcome to BOBA HOUSE</div>
          <div class="col text-h4">Bond of lifetime</div>
          <br />
          <div>
            <q-btn
              outline
              rounded
              class=""
              color="white"
              text-color="black"
              label="Let's Order"
              @click="$router.push('/form')"
            />
          </div>
        </div>
      </div>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  name: "WelcomePage",
  methods: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Alkalami&display=swap");
.text-h4 {
  color: white;

  font-family: "Secular One", sans-serif;
}
</style>
