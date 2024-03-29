import { createWebHistory, createRouter, Router } from "vue-router";
import HomeViewComponent from "@/views/home-view/home-view-component.vue";
import HelpViewComponent from "@/views/help-view/help-view-component.vue";
// import MapViewComponent from "@/views/map-view/map-view.component.vue";
import SearchViewComponent from "@/views/search-view/search-view-component";
import ServiceViewComponent from "@/views/services-view/service-view-component.vue";
import OaiViewComponent from "@/views/oai-view/oai-view-component.vue";
import ContactViewComponent from "@/views/contact-view/contact-view-component.vue";
import SitelinkViewComponent from "@/views/sitelink-view/sitelink-view-component.vue";
import ImprintViewComponent from "@/views/imprint-view/imprint-view-component.vue";
import TermsViewComponent from "@/views/terms-view/terms-view-component.vue";
import DatasetDetailComponent from "@/views/dataset-detail.component/dataset-detail.component.vue";

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
    // {
    //     path: "/map",
    //     name: "Map",
    //     component: MapViewComponent,
    // },
    {
        path: "/search/:display?/:type?",
        name: "Search",
        component: SearchViewComponent,
        props: true,
    },
    {
        path: "/dataset/:datasetId",
        name: "dataset",
        component: DatasetDetailComponent,
        props: true,
    },
    // {
    //     path: "/10.24341/tethys.:datasetId",
    //     name: "dataset2",
    //     component: DatasetDetailComponent,
    //     props: true,
    // },
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

const index: Router = createRouter({
    history: createWebHistory(),
    routes,
    // scrollBehavior(to, from, savedPosition) {
    scrollBehavior() {
        // return desired position
        document.getElementById("app")?.scrollIntoView();
    },
});

export default index;
