<template>
  <div>
    <!-- Loader -->
    <v-row justify="center mt-6">
      <v-col cols="3">
        <grid-loader :loading="isLoading" :color="'#9c27b0'" :size="95" />
      </v-col>
    </v-row>

    <!-- Show Movies -->
    <template v-if="!isLoading">
      <Movies :movies="movies" />
      <v-container>
        <v-row justify="center">
          <v-col cols="3">
            <v-container class="max-width">
              <template v-if="page != 1">
                <router-link
                  class="router-link"
                  :to="{ name: 'home', query: { page: previusPage } }"
                  rel="prev"
                >
                  <v-btn
                    class="mx-2"
                    color="purple"
                    elevation="19"
                    dark
                    fab
                    raised
                  >
                    <v-icon dark> mdi-chevron-left </v-icon>
                  </v-btn>
                </router-link>
                <template v-if="page < totalPages"> | </template>
              </template>
              <template v-if="page != 500">
                <router-link
                  class="router-link"
                  :to="{ name: 'home', query: { page: nextPage } }"
                  rel="next"
                >
                  <v-btn
                    class="mx-2"
                    color="purple"
                    elevation="19"
                    dark
                    fab
                    raised
                  >
                    <v-icon dark> mdi-chevron-right </v-icon>
                  </v-btn>
                </router-link>
              </template>

              <div>
                <p class="mt-5">Page {{ page }} / {{ totalPages }}</p>
              </div>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </div>
</template>

<script>
import api from "@/api";
import Movies from "@/components/Movies.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  name: "Home",
  components: { Movies, Navigation },

  data() {
    return {
      movies: [],
      totalPages: 500,
      isLoading: false,
    };
  },

  created() {
    this.isLoading = true;
    setTimeout(() => {
      api
        .getPopularMovies(this.page)
        .then((movies) => (this.movies = movies))
        .finally((this.isLoading = false));
    }, 600);
    a;
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    nextPage() {
      return this.page + 1;
    },
    previusPage() {
      return this.page - 1;
    },
  },

  methods: {},
};
</script>

<style scoped>
.router-link {
  text-decoration: none;
}
</style>
