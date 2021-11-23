import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld/HelloWorld.vue";
import HomeViewComponent from "./views/home-view/home-view-component.vue";
import MapViewComponent from "./views/map-view/map-view-component.vue";
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
        MapViewComponent,
    },
})
export default class App extends Vue {}
