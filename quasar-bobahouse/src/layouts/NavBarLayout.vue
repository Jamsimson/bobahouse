<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-white text-dark">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <!-- left side of nav bar -->
        <q-toolbar-title>
          <q-avatar>
            <img src="MilkTea-2.png" />
          </q-avatar>
          BOBA HOUSE
        </q-toolbar-title>
        <div>@Minsong</div>
      </q-toolbar>
    </q-header>
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <div></div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
    name:'NavBarLayout',
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
q-drawer{
  background-color: #d6baff;
}
</style>
