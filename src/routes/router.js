import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Movie from "@/components/Movie";
import Favorite from "@/views/Favorite";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/movie/:id",
      name: "movie",
      component: Movie,
    },
    {
      path: "/favorites",
      name: "favorites",
      component: Favorite,
    },
  ],
});
