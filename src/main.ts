import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/main-styles.scss";
import FontAwesomeIcon from "@/utilities/fontawesome";

createApp(App).component("fa", FontAwesomeIcon).mount("#app");
