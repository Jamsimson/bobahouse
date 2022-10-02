<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="setNavbar">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          BOBA House Dashboard
        </q-toolbar-title>

        <div>Admin Manager</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="setNavbar"
    >
      <q-list>
        <q-item-label
          header
        >
          LogoBOBA House
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Dashboard ',
    caption: 'quasar.dev',
    icon: 'school',
    link: ''
  },
  {
    title: 'Management Menu',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: ''
  },
  {
    title: 'Management Menu',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: ''
  },
  {
    title: 'Trasaction',
    caption: 'forum.quasar.dev',
    icon: 'money',
    link: ''
  },

]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style>

  fornt {
    background-color: #d6baff;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }

  .setNavbar {
    background-color: #d6baff;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }
</style>
