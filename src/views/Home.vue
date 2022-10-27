<template>

    <div>
        <Movies :moviesPagination="movies" />
        <v-container>
            <v-row justify="center">
                <v-col cols="3">
                    <v-container class="max-width">
                        <template v-if="page != 1">
                            <router-link class="router-link" :to="{ name: 'home', query: { page: previusPage } }"
                                rel="prev">
                                <v-btn class="mx-2" color="purple" elevation="19" dark fab raised>
                                    <v-icon dark>
                                        mdi-chevron-left
                                    </v-icon>
                                </v-btn>
                            </router-link>
                            <template v-if="page < totalPages"> | </template>
                        </template>
                        <template v-if="page != 500">
                            <router-link class="router-link" :to="{ name: 'home', query: { page: nextPage } }"
                                rel="next">
                                <v-btn class="mx-2" color="purple" elevation="19" dark fab raised>
                                    <v-icon dark>
                                        mdi-chevron-right
                                    </v-icon>
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
    </div>

</template>




<script>
import api from '@/api'
import Movies from '@/components/Movies.vue';
import Navigation from '@/components/Navigation.vue';

export default {
    name: 'Home',
    components: { Movies, Navigation },

    data() {
        return {
            movies: [],
            totalPages: 500,
        }
    },

    created() {
        api.getPopularMovies(this.page)
            .then(movies => (this.movies = movies));

    },
    computed: {
        page() {
            return parseInt(this.$route.query.page) || 1
        },
        nextPage() {
            return this.page + 1
        },
        previusPage() {
            return this.page - 1
        },

    }
}

</script>

<style scoped>
.router-link {
    text-decoration: none;
}
</style>