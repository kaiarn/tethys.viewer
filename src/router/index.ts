import { createWebHistory, createRouter } from "vue-router";
import HomeViewComponent from "@/views/home-view/home-view-component.vue";
import HelpViewComponent from "@/views/map-view/help-view-component.vue";
import SearchViewComponent from "@/views/search-view/search-view-component";
import ServiceViewComponent from "@/views/services-view/service-view-component.vue";
import OaiViewComponent from "@/views/oai-view/oai-view-component.vue";

const routes = [
    {
        path: "/test/",
        name: "Home",
        component: HomeViewComponent,
    },
    {
        path: "/test/help",
        name: "Help",
        component: HelpViewComponent,
    },
    {
        path: "/test/search",
        name: "Search",
        component: SearchViewComponent,
    },
    {
        path: "/test/services",
        name: "Services",
        component: ServiceViewComponent,
    },
    {
        path: "/test/oai",
        name: "Oai",
        component: OaiViewComponent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
