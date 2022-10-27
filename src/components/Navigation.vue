<template>
    <div class="text-center">
        <v-container>
            <v-row justify="center">
                <v-col cols="8">
                    <v-container class="max-width">
                        <v-pagination v-model="page" class="my-4" :length="15"></v-pagination>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>

export default {
    name: 'Navigation',
    data() {
        return {
            page: 1,
        }
    },

    created() {
        // pagination() {
        api.getPopularMovies(this.page)
            .then(movies => (this.movies = movies));

        console.log(this.page)
        // }
    },
    methods: {

    }

};
</script>






 