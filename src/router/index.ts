import { createWebHistory, createRouter } from "vue-router";
import HomeViewComponent from "@/views/home-view/home-view-component.vue";
import MapViewComponent from "@/views/map-view/map-view-component.vue";
import SearchViewComponent from "@/views/search-view/search-view-component";

const routes = [
    {
        path: "/test/",
        name: "Home",
        component: HomeViewComponent,
    },
    {
        path: "/test/map",
        name: "Map",
        component: MapViewComponent,
    },
    {
        path: "/test/search",
        name: "Search",
        component: SearchViewComponent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
