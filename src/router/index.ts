import { createWebHistory, createRouter } from "vue-router";
import HomeViewComponent from "@/views/home-view/home-view-component.vue";
import HelpViewComponent from "@/views/map-view/help-view-component.vue";
import SearchViewComponent from "@/views/search-view/search-view-component";
import ServiceViewComponent from "@/views/services-view/service-view-component.vue";
import OaiViewComponent from "@/views/oai-view/oai-view-component.vue";
import ContactViewComponent from "@/views/contact-view/contact-view-component.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeViewComponent,
    },
    {
        path: "/help",
        name: "Help",
        component: HelpViewComponent,
    },
    {
        path: "/search",
        name: "Search",
        component: SearchViewComponent,
    },
    {
        path: "/services",
        name: "Services",
        component: ServiceViewComponent,
    },
    {
        path: "/oai",
        name: "Oai",
        component: OaiViewComponent,
    },
    {
        path: "/contact",
        name: "Contact",
        component: ContactViewComponent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
