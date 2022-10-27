<template>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`" max-width="300">
                </v-img>

                <v-card-title primary-title>
                    <div>
                        <div class="headline">{{movie.original_title }}</div>
                        <span class="grey--text">{{movie.popularity}}</span>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn flat>Share</v-btn>
                    <v-btn flat color="purple">Explore</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="show = !show">
                        <v-span v-if="!show">
                            <Icon>
                                <v-icon dark>
                                    mdi-plus
                                </v-icon>
                            </Icon>
                            <!-- <ButtonShow /> -->
                        </v-span>
                        <v-span v-else>
                            <Icon>
                                <v-icon dark>
                                    mdi-minus
                                </v-icon>
                            </Icon>
                        </v-span>
                    </v-btn>


                </v-card-actions>

                <v-slide-y-transition>
                    <v-card-text v-show="show">
                        {{movie.overview}}
                    </v-card-text>
                </v-slide-y-transition>
            </v-card>
        </v-flex>
    </v-layout>
</template>













<v-col v-for="n in crew" :key="n" class="d-flex child-flex" cols="4">
    <v-img :src="`https://www.themoviedb.org/t/p/w138_and_h175_face/${n.profile_path}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n}`" aspect-ratio="1" class="grey lighten-2">
        <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
        </template>
    </v-img>
</v-col>











//nav
<template>
    <div>
        <v-app-bar dense elevation="14" flat outlined rounded shaped>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Page title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-menu left bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
    </div>
</template>