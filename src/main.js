import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import twitter from "vue-twitter";

Vue.use(twitter);

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "https://no-comment-resume-api.herokuapp.com" : "/";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
