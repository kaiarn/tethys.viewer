import { createWebHistory, createRouter } from "vue-router";
import HomeViewComponent from "@/views/home-view/home-view-component.vue";
import HelpViewComponent from "@/views/map-view/help-view-component.vue";
import SearchViewComponent from "@/views/search-view/search-view-component";
import ServiceViewComponent from "@/views/services-view/service-view-component.vue";
import OaiViewComponent from "@/views/oai-view/oai-view-component.vue";
import ContactViewComponent from "@/views/contact-view/contact-view-component.vue";
import SitelinkViewComponent from "@/views/sitelink-view/sitelink-view-component.vue";
import ImprintViewComponent from "@/views/imprint-view/imprint-view-component.vue";
import TermsViewComponent from "@/views/terms-view/terms-view-component.vue";

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
    {
        path: "/sitelinks",
        name: "Sitelinks",
        component: SitelinkViewComponent,
    },
    {
        path: "/imprint",
        name: "Imprint",
        component: ImprintViewComponent,
    },
    {
        path: "/terms-and-conditions",
        name: "Terms",
        component: TermsViewComponent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
