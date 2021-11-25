import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld/HelloWorld.vue";
import HomeViewComponent from "./views/home-view/home-view-component.vue";
import HelpViewComponent from "./views/map-view/help-view-component.vue";
import SearchViewComponent from "./views/search-view/search-view-component.vue";
import ServiceViewComponent from "./views/services-view/service-view-component.vue";
import OaiViewComponent from "./views/oai-view/oai-view-component.vue";
// import VsInput from "./components/vs-input/vs-input.vue";
// import VsResult from "./components/vs-result/vs-result.vue";
// import FacetCategory from "./components/face-category/facet-category.vue";
// import ActiveFacetCategory from "./components/active-facet-category/active-facet-category.vue";

// import { SolrSettings } from "@/models/solr";
// import { DatasetService } from "./services/dataset.service";
// import { Suggestion } from "./models/dataset";
// import { SolrResponse, FacetFields, FacetItem, FacetResults, FacetInstance } from "./models/headers";
// import { ActiveFilterCategories } from "@/models/solr";

@Options({
    components: {
        HelloWorld,
        HomeViewComponent,
        // VsInput,
        // VsResult,
        // FacetCategory,
        // ActiveFacetCategory,
        HelpViewComponent,
        SearchViewComponent,
        ServiceViewComponent,
        OaiViewComponent,
    },
})
export default class App extends Vue {
    mounted(): void {
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
            // Add a click event on each of them
            $navbarBurgers.forEach((el) => {
                el.addEventListener("click", () => {
                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle("is-active");
                    $target?.classList.toggle("is-active");
                });
            });
        }
    }
}
