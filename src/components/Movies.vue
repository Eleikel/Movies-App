<template>
    <v-container>
        <div class="mt-5 mb-5">

            <v-text-field v-model="filter" append-icon="mdi-microphone" class="mx-4" flat hide-details label="Search"
                prepend-inner-icon="mdi-magnify" solo-inverted></v-text-field>
        </div>

        <v-row class="mb-6">

            <v-col v-for="movie in filterMovies" class="d-flex child-flex" cols="3" :key="movie.id">

                <v-spacer></v-spacer>
                <!-- v-for="movie in movies" :key="movie" -->

                <v-card class="mx-auto " max-width="230">
                    <template slot="progress">
                        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                    </template>

                    <v-hover>
                        <router-link :to="`/movie/${movie.id}`">
                            <v-card>
                                <v-img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`"
                                    alt="" />
                            </v-card>
                        </router-link>
                    </v-hover>





                    <div class="mt-5">
                        <v-row>
                            <v-progress-circular class="ml-5" :rotate="-90" :size="40" :width="3"
                                :value="movie.vote_average * 10" color="purple">
                                {{ parseInt(movie.vote_average * 10) }} <span class="porcentage">%</span>
                            </v-progress-circular>
                            <div class="grey--text ms-2 mt-2">
                                Released:
                                {{ movie.release_date }}
                            </div>

                        </v-row>
                    </div>



                    <v-card-title class="text-h6"> {{ movie.original_title }} </v-card-title>
                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <!-- <v-rating :value="6.5" color="amber" dense half-increments readonly size="14">
                                </v-rating> -->
                        </v-row>



                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <!-- <router-link :to="{name: 'movie', params : {id: movie.id}}"> -->
                    <v-card-actions>

                        <Button @custom-click="goToMovieDetail(movie.id)">
                            <span>Ver Descripcion</span>
                        </Button>
                    </v-card-actions>
                    <!-- </router-link> -->

                </v-card>


            </v-col>
        </v-row>


        <!-- <Navigation :moviesPagination="movies"></Navigation> -->
    </v-container>
</template>




/* TODOS : Consumir el API
<script>
import Button from "@/components/Button.vue"
import Navigation from "@/components/Navigation.vue"

export default {
    components: { Button, Navigation },

    data: () => ({
        filter: ''
    }),

    props: {
        movies: {
            type: Array,
            default: () => [],
        },

        moviesPagination: {
            type: Array,
            default: () => [],

        }
    },

    computed: {
        // VoteAverage() {
        //     return movies.map((movie) =>
        //         movie.vote_average = movie.vote_average * 10)
        // },

        filterMovies() {
            return this.moviesPagination.filter(movie =>
                movie.original_title.toLowerCase().includes(this.filter.toLocaleLowerCase()))
        },


    },

    methods: {
        goToMovieDetail(id) {
            this.$router.push({ name: 'movie', params: { id } });
        },

    }

}
</script> 


<style scoped>
.porcentage {
    font-size: 12px;
    font-weight: 900;
}
</style>