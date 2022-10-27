<template>
    <v-row class="ma-4">

        <v-col v-for="movie in movieFavorites" :key="movie.id" class="d-flex child-flex" cols="2">


            <v-card class="mx-auto" max-width="250">

                <router-link :to="`/movie/${movie.id}`">

                    <v-img :src="`https://www.themoviedb.org/t/p/w138_and_h175_face/${movie.poster_path}`">
                    </v-img>
                </router-link>

                <v-card-title>
                    {{movie.original_title}}
                </v-card-title>

                <v-card-actions>
                    <Button @custom-click="DeleteFavorite(movie.id)">
                        <span>Delete</span>
                    </Button>

                    <v-spacer></v-spacer>
                </v-card-actions>


            </v-card>
        </v-col>
    </v-row>

</template>


<script>
import Button from "@/components/Button.vue"


export default {
    components: { Button },

    data() {
        return {
            show: false,

            movieFavorites: []
        }
    },


    created() {
        this.movieFavorites = JSON.parse(localStorage.getItem('movies') || []);

    },


    methods: {
        DeleteFavorite(id) {
            this.movieFavorites = this.movieFavorites.filter(movie => movie.id !== id);
            localStorage.setItem('movies', JSON.stringify(this.movieFavorites))

        }

    }

}
</script> 