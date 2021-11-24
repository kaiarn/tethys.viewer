import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/main-styles.scss";
// import FontAwesomeIcon from "@/utilities/fontawesome";
import router from "./router/index";
import "@fortawesome/fontawesome-free/css/all.css";

createApp(App).use(router).mount("#app");
// .component("fa", FontAwesomeIcon)
