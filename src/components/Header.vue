<template>
    <v-card>
        <v-toolbar color="grey lighten-5" center-active>
            <v-toolbar-title>MOVIE APP</v-toolbar-title>

            <template v-slot:extension>
                <v-tabs slider-color="#9c27b0" v-model="tabs" centered>
                    <v-tab class="tab" v-for="n in links" :key="n">
                        <router-link :to="n.to" class="link white--text route">
                            <h3>{{ n.title }}
                            </h3>
                        </router-link>
                    </v-tab>
                </v-tabs>
            </template>
        </v-toolbar>
    </v-card>
</template>



<script>

export default {
    name: 'Header',


    props: {
        links: {
            type: Array,
            default: () => [],
        }
    }
};
</script>






<style scoped>
.link {
    text-decoration: none;
}



.tab {
    width: 10%;
    /* height: 40px; */
    position: relative;
    overflow: hidden;
}

.route {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
}

h3 {
    color: #9c27b0;
    font-weight: 900;
    letter-spacing: 2px;
    /* font-family: ; */
}
</style> 