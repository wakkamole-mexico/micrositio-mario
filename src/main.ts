import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import router from "@/router";
import VueFb from "./plugins/vue-fb";
Vue.use(VueFb, {
  appId: "666690474250789",
  autoLogAppEvents: true,
  xfbml: true,
  version: "v8.0"
});
Vue.config.productionTip = false;
new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
