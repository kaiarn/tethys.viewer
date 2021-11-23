import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/main-styles.scss";
import FontAwesomeIcon from "@/utilities/fontawesome";
import router from "./router/index";

createApp(App).use(router).component("fa", FontAwesomeIcon).mount("#app");
