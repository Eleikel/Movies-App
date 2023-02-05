<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="4">
          <v-card>
            <v-img
              :src="`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`"
              alt=""
            />
          </v-card>
        </v-col>
        <v-col cols="12" sm="8">
          <h1 class="grey--text text-darken-3 mt-5">{{ movie.title }}</h1>
          <v-row>
            <v-col cols="12" sm="2" lg="2">
              <v-rating
                :value="movie.vote_average / 2"
                color="amber"
                dense
                half-increments
                readonly
                size="16"
              >
              </v-rating>
            </v-col>
            <v-col cols="12" sm="3">
              <span class="gray--text ml-n7">
                {{ (movie.vote_average * 10).toFixed(1) }}% |
                {{ movie.release_date }}
              </span>
            </v-col>
            <v-col cols="12" sm="7">
              <div class="subtitle-2 grey--text ml-n16">
                <span
                  v-for="(genre, index) in movie.genres"
                  :key="index"
                  class="ml-1"
                >
                  {{ genre.name }}
                  <span v-if="movie.genres.length - 1 != index">,</span>
                </span>
              </div>
            </v-col>
          </v-row>
          <p class="mt-5 grey--text text--darken-3 subheader">
            {{ this.movie.overview }}
          </p>
          <div class="mt-5">
            <h2 class="mt-5 grey--text text--darken-3">Featured Cast</h2>
            <div class="mt-5">
              <div class="" v-for="(crew, index) in crew" :key="index">
                <h4 v-if="crew.name.length != 5">{{ crew.name }}</h4>
              </div>
            </div>
          </div>
          <div class="mt-3">
            <v-btn tile color="error" @click="PlayMovie(movie.homepage)">
              <v-icon left>mdi-play</v-icon>Play
            </v-btn>

            <template v-if="show">
              <v-btn
                tile
                color=" error"
                class="ml-2"
                @click="AddToFavorite(movie)"
              >
                <v-icon left>mdi-heart</v-icon>Favorite
              </v-btn>
            </template>
            <template v-else>
              <v-btn
                tile
                dark
                color="purple"
                class="ml-6"
                @click="goToFavorites(movie.id)"
              >
                <v-icon left>mdi-checkbox-marked-circle </v-icon>Added to
                favorite
              </v-btn>
            </template>
          </div>
        </v-col>
      </v-row>
      <v-divider class="mt-2"></v-divider>
      <v-divider class="mt-2"> </v-divider>

      <h1 class="mt-5 grey--text text--darken-3 text-md-center">
        Featured Cast
      </h1>

      <v-lazy
        v-model="isActive"
        :options="{
          threshold: 0.9,
        }"
        min-height="200"
        transition="fade-transition"
      >
        <v-row class="ma-4">
          <v-col v-for="n in crew" :key="n" class="d-flex child-flex" cols="3">
            <template>
              <v-card class="mx-auto" max-width="230">
                <v-img
                  :src="`https://www.themoviedb.org/t/p/w138_and_h175_face/${n.profile_path}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n}`"
                  aspect-ratio="1"
                  height="270px"
                  class="grey lighten-2"
                ></v-img>
                <v-card-title>
                  {{ n.name }}
                </v-card-title>

                <v-card-subtitle>
                  Character: {{ n.character }}
                </v-card-subtitle>
              </v-card>
            </template>
          </v-col>
        </v-row>
      </v-lazy>
    </v-container>
  </div>
</template>

/* TODO> Buscar Tabs en vuetify
<script>
import Icon from "@/components/Icon.vue";
import api from "@/api";

export default {
  name: "Movie",
  components: { Icon },

  data() {
    return {
      isActive: true,

      favoriteMovies: [],
      show: true,
      movie: {
        crew: [],
      },
    };
  },

  created() {
    this.getMovieDetails();

    this.favoriteMovies = JSON.parse(localStorage.getItem("movies") || []);
    this.IsFavorite(this.movie);
    // console.log("movie ===", this.movie);
  },
  mounted() {},

  computed: {},

  methods: {
    getMovieDetails() {
      const id = this.$route.params.id;
      console.error("Error: ");

      //Hacer multiple Fetch al api
      Promise.all([api.getPopularMovie(id), api.getCast(id)]).then(
        ([movie, crew]) => {
          this.movie = movie;
          this.movie.crew = crew;
          console.log("movie =", this.movie);
        }
      );
    },

    PlayMovie(url) {
      // /* TODO Reproducir peli en nueva pesta;a /*
      window.location.href = url;
    },

    //TODO : ARREGLAR QUER TODOS LOS FAVORITOS NO TENGAN BOTON PARA A:ADIR A FAVORITES
    IsFavorite(movie) {
      this.favoriteMovies.filter((fav) => {
        parseInt(fav.id) == parseInt(this.$route.params.id)
          ? (this.show = false)
          : "",
          console.log("idddddd ", fav.id),
          console.log("movie id ", movie);
        console.log("show =", this.show);
      });
    },

    AddToFavorite(movie) {
      this.favoriteMovies.push({
        id: movie.id,
        original_title: movie.title,
        poster_path: movie.poster_path,
        overview: movie.overview,
      }),
        localStorage.setItem("movies", JSON.stringify(this.favoriteMovies)); //poner value
      console.log(this.favoriteMovies);
    },

    goToFavorites(id) {
      this.$router.push({ name: "favorites" });
    },
  },

  computed: {
    crew() {
      return this.movie.crew.slice(0, 8);
    },
  },
};
</script>
