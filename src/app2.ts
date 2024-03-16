import { Component, Vue, Watch } from "vue-facing-decorator";
// import { RouteLocation } from "vue-router";
import HomeViewComponent from "./views/home-view/home-view-component.vue";
import HelpViewComponent from "./views/help-view/help-view-component.vue";
import SearchViewComponent from "./views/search-view/search-view-component.vue";
import DatasetDetailComponent from "./views/dataset-detail.component/dataset-detail.component.vue";
import ServiceViewComponent from "./views/services-view/service-view-component.vue";
import OaiViewComponent from "./views/oai-view/oai-view-component.vue";
import ContactViewComponent from "./views/contact-view/contact-view-component.vue";
import SitelinkViewComponent from "./views/sitelink-view/sitelink-view-component.vue";
import ImprintViewComponent from "./views/imprint-view/imprint-view-component.vue";
import TermsViewComponent from "./views/terms-view/terms-view-component";
import { APP_URL, VUE_APP_PORTAL } from "./constants";
// import VsInput from "./components/vs-input/vs-input.vue";
// import VsResult from "./components/vs-result/vs-result.vue";
// import FacetCategory from "./components/face-category/facet-category.vue";
// import ActiveFacetCategory from "./components/active-facet-category/active-facet-category.vue";

// import { SolrSettings } from "@/models/solr";
// import { DatasetService } from "./services/dataset.service";
// import { Suggestion } from "./models/dataset";
// import { SolrResponse, FacetFields, FacetItem, FacetResults, FacetInstance } from "./models/headers";
// import { ActiveFilterCategories } from "@/models/solr";

// https://devsoniq.com/how-to-toggle-bulma-css-navbar-in-your-vue-js-project/
@Component({
    components: {
        // HelloWorld,
        HomeViewComponent,
        // VsInput,
        // VsResult,
        // FacetCategory,
        // ActiveFacetCategory,
        HelpViewComponent,
        SearchViewComponent,
        DatasetDetailComponent,
        ServiceViewComponent,
        OaiViewComponent,
        ContactViewComponent,
        SitelinkViewComponent,
        ImprintViewComponent,
        TermsViewComponent,
    },
})
export default class App2 extends Vue {
    public active = false;
    public portal = VUE_APP_PORTAL + "/login";
    public app_url = APP_URL;
    public search_url = APP_URL + "/search";
    public service_url = APP_URL + "/services";
    public help_url = APP_URL + "/help";
    public oai_url = APP_URL + "/oai";

    mounted(): void {
        // const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
        // // Check if there are any navbar burgers
        // if ($navbarBurgers.length > 0) {
        //     // Add a click event on each of them
        //     $navbarBurgers.forEach((elNavBurger) => {
        //         elNavBurger.addEventListener("click", () => {
        //             // Get the target from the "data-target" attribute
        //             const targetNavbar = elNavBurger.dataset.target;
        //             const $target = document.getElementById(targetNavbar);
        //             // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        //             elNavBurger.classList.toggle("is-active");
        //             $target?.classList.toggle("is-active");
        //         });
        //     });
        // }
    }

    public showMobilemenu(event: MouseEvent): void {
        // Don't follow the link
        event.preventDefault();
        this.active = !this.active;
    }

    @Watch("$route")
    protected oRouteChangedChanged(): void {
        //(to: RouteLocation, from: RouteLocation): void {
        // console.log("setting " + from.path + " to " + to.path);
        this.active = false;
    }
}
