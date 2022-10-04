<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="setNavbar">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> BOBA House Management </q-toolbar-title>

        <div>Admin Manager</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="setEssentials">
      <q-list>
        <q-item-label header>
          <q-avatar rounded style="fixed-center">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>

        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Dashboard ",
    caption: "",
    icon: "school",
    link: "/admindash",
  },
  {
    title: "Management Menu",
    caption: "",
    icon: "code",
    link: "managemenu",
  },
  {
    title: "Trasaction",
    caption: "",
    icon: "money",
    link: "tranboard",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style>
.setEssentials {
  background-color: #ffff;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

.setNavbar {
  background-color: #d6baff;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}
</style>
