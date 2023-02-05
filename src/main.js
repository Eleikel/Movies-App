import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "@/routes/router";
import { VueSpinners } from '@saeris/vue-spinners'

Vue.use(VueSpinners)

Vue.config.productionTip = false;

new Vue({

  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
