<template>
  <v-app>
    <Header :links="links" />

    <router-view :key="$route.fullPath"></router-view>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',

  components: {
    Header,

  },

  data() {
    return {
      links: [

        {
          title: 'Home',
          to: { name: 'home' }
        },

        {
          title: 'Favorites',
          to: { name: 'favorites' }
        },

      ]

    }

  },
};
</script>
