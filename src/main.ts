import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; // @ts-ignore
import Unicon from "vue-unicons";
import {
  uniUsersAlt,
  uniMapMarkerAlt,
  uniFlipHAlt,
  uniGithub,
  uniGlobe,
  uniCoronavirus,
  // @ts-ignore
} from "vue-unicons/dist/icons";
import "./index.css";

Unicon.add([
  uniUsersAlt,
  uniMapMarkerAlt,
  uniFlipHAlt,
  uniGithub,
  uniGlobe,
  uniCoronavirus,
]);

createApp(App)
  .use(store)
  .use(router)
  .use(Unicon, {
    fill: "#2c3e50",
    height: 20,
    width: 20,
  })
  .mount("#app");
