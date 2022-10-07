<template>
  <q-page style="font-family: Arial, Helvetica, sans-serif">
    <div class="text-center">
      <h2>ManagementMenu</h2>
    </div>

    <div>
      <MenuList />
    </div>
  </q-page>
</template>

<script>
import MenuList from "../components/MenuList.vue";

export default {
  name: "ManagementMenu",
  components: { MenuList },
};
</script>

<style>
.setUp {
  background-color: #d6baff;

  font-family: Arial, Helvetica, sans-serif;
}
</style>
