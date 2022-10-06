<template>
  <q-page class="flex flex-center">
    <q-card class="my-card bg-white q-pa-md">
      <div class="flex flex-center">
        <img
          src="MilkTea-2.png"
          alt="logo boba house"
          :ratio="1"
          class="q-mt-md flex-center"
          style="width: 150px; border-radius: 4px"
        />
      </div>
      <q-card-section>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <div>
            <q-input
              filled
              color="dark"
              v-model="username"
              label="Name"
              :dense="dense"
            /><br />
            <q-input
              filled
              color="dark"
              v-model="phonenumber"
              label="Phone number"
              :dense="dense"
            />
          </div>
          <div class="button">
            <q-btn label="Submit" type="submit" color="dark" />
            <q-btn
              label="Reset"
              type="reset"
              color="grey-9"
              flat
              class="q-ml-sm"
              @click="onReset()"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "UserFillForm",
  data() {
    return {
      username: null,
      phonenumber: null,
    };
  },
  methods: {
    onReset() {
      (this.username = null), (this.phonenumber = null);
    },
    onsubmit() {},
  },
};
</script>

<style>
.my-card {
  width: 100%;
  max-width: 350px;
}
.button {
  margin-right: 0%;
  margin-left: 40%;
}
</style>
