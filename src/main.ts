import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/main-styles.scss";
// import FontAwesomeIcon from "@/utilities/fontawesome";
import router from "./router/index";
import "@fortawesome/fontawesome-free/css/all.css";
import VueMatomo from "vue-matomo";

createApp(App)
    .use(VueMatomo, {
        host: "https://webstat.geologie.ac.at/",
        siteId: 8,
        trackerFileName: "matomo",
        // Enables automatically registering pageviews on the router
        router: router,
        // Enables link tracking on regular links. Note that this won't
        // work for routing links (ie. internal Vue router links)
        // Default: true
        enableLinkTracking: true,
        // Require consent before sending tracking information to matomo
        // Default: false
        requireConsent: false,
        // Whether to track the initial page view
        // Default: true
        trackInitialView: true,
        // Run Matomo without cookies
        // Default: false
        disableCookies: false,
        // Require consent before creating matomo session cookie
        // Default: false
        requireCookieConsent: false,
        // Enable the heartbeat timer (https://developer.matomo.org/guides/tracking-javascript-guide#accurately-measure-the-time-spent-on-each-page)
        // Default: false
        enableHeartBeatTimer: false,
        // Set the heartbeat timer interval
        // Default: 15
        heartBeatTimerInterval: 15,
        // Whether or not to log debug information
        // Default: false
        debug: false,
        userId: undefined,
        // Share the tracking cookie across subdomains (see https://developer.matomo.org/guides/tracking-javascript-guide#measuring-domains-andor-sub-domains)
        // Default: undefined, example '*.example.com'
        cookieDomain: undefined,
        // Tell Matomo the website domain so that clicks on these domains are not tracked as 'Outlinks'
        // Default: undefined, example: '*.example.com'
        domains: undefined,
        preInitActions: [],
    })
    .use(router)
    .mount("#app");
// .component("fa", FontAwesomeIcon)
