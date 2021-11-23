import { createWebHistory, createRouter } from "vue-router";
import HomeViewComponent from "@/views/home-view/home-view-component.vue";
import MapViewComponent from "@/views/map-view/map-view-component.vue";

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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
