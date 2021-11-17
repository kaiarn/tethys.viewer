import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld/HelloWorld.vue";
import VsInput from "./components/vs-input/vs-input.vue";
import VsResult from "./components/vs-result/vs-result.vue";
import FacetCategory from "./components/face-category/facet-category.vue";
import { SolrSettings } from "@/models/solr";
import { DatasetService } from "./services/dataset.service";
import { Suggestion } from "./models/dataset";
import { SolrResponse, FacetFields, FacetItem, FacetResults } from "./models/headers";
import { ActiveFilterCategories } from "@/models/solr";

@Options({
    components: {
        HelloWorld,
        VsInput,
        VsResult,
        FacetCategory,
    },
})
export default class App extends Vue {
    results: Array<any> = [];

    // facets: FacetFields = new FacetFields();
    facets: FacetResults = new FacetResults();
    searchTerm!: string | Suggestion;
    // activeFilterCategories: Object = {};
    activeFilterCategories: ActiveFilterCategories = new ActiveFilterCategories(); // = new Array<ActiveFilterCategory>();
    pagination: any = {
        total: 0,
        per_page: 2,
        current_page: 0,
        // last_page: 0,
        data: [],
    };
    loaded = false;
    numFound!: number;
    private solr: SolrSettings = {
        core: "rdr_data", // SOLR.core;
        host: "tethys.at",
    };
    private rdrAPI!: DatasetService;
    private error = "";

    mounted() {
        this.rdrAPI = new DatasetService();
    }

    // onSearch(term: string): void {
    onSearch(suggestion: Suggestion | string): void {
        // let queryOperator;
        // if (typeof suggestion === "string") {
        //     suggestion = suggestion + "*";
        //     queryOperator = "or";
        // } else if (suggestion instanceof Suggestion) {
        //     // term = suggestion.value;
        //     queryOperator = "and";
        // }

        // if (term) {
        //     term = term.trim();
        // } else {
        //     term = "*%3A*";
        // }

        this.activeFilterCategories = new ActiveFilterCategories();
        this.facets = new FacetResults();

        // this.facets = {};
        this.searchTerm = suggestion;
        this.rdrAPI.facetedSearch(suggestion, this.activeFilterCategories, this.solr.core, this.solr.host, undefined).subscribe(
            (res: SolrResponse) => this.dataHandler(res),
            (error: any) => this.errorHandler(error),
        );
    }

    private dataHandler(res: SolrResponse, filterItem?: FacetItem): void {
        // this.results = datasets;
        this.results = res.response.docs;
        this.numFound = res.response.numFound;

        // pagination
        this.pagination["total"] = res.response.numFound;
        this.pagination["per_page"] = res.responseHeader.params.rows;
        this.pagination["current_page"] = 1;
        this.pagination["data"] = res.response.docs;

        // facets
        // const facet_fields = res.facet_counts.facet_fields;
        // for (const prop in facet_fields) {
        //     const facetCategory: FacetCategory<any> = facet_fields[prop];
        //     const facetValues = facetCategory.key.values.map((facet_value: any, i: number) => {
        //         if (i % 2 === 0 && typeof facet_value == "string") {
        //             //var rObj = { value: facet, count: facet_fields[prop][i + 1] };
        //             // FiletrItem with value and count
        //             const rObj = new FilterItem(facet_value, facetCategory.key.values[i + 1]);
        //             return rObj;
        //         }
        //     });
        //     .filter(function (el: FilterItem) {
        //         return el != null && el.count > 0;
        //     });
        //     //this.facets.push({ filterName: prop, values: facetValues });
        //     this.facets[prop] = facetValues;
        // }

        const facet_fields: FacetFields = res.facets;
        let prop: keyof typeof facet_fields;
        for (prop in facet_fields) {
            const facetCategory = facet_fields[prop];
            if (facetCategory.buckets) {
                const facetItems: Array<FacetItem> = facetCategory.buckets;

                let facetValues = facetItems.map((facetItem, index) => {
                    let rObj: FacetItem;
                    if (filterItem?.val == facetItem.val) {
                        rObj = filterItem;
                    } else if (this.facets[prop]?.some((e) => e.val === facetItem.val)) {
                        // console.log(facetValue + " is included")
                        const indexOfFacetValue = this.facets[prop].findIndex((i) => i.val === facetItem.val);
                        // console.log(indexOfFacetValue);
                        rObj = this.facets[prop][indexOfFacetValue];
                        rObj.count = facetItem.count;
                        // rObj = new FacetItem(val, count);
                    } else {
                        rObj = new FacetItem(facetItem.val, facetItem.count);
                    }
                    return rObj;
                });

                facetValues = facetValues.filter(function (el) {
                    return el != null && el.count > 0;
                });
                // this.facets[prop] = facetCategory;
                this.facets[prop] = facetValues;
            }
        }
    }

    private errorHandler(err: any): void {
        this.error = err;
        // this.loading = false;
    }

    onFilter(facetItem: FacetItem): void {
        // console.log(facetItem.val);
        // if (!this.activeFilterCategories.hasOwnProperty(facetItem.category)) {
        if (!Object.prototype.hasOwnProperty.call(this.activeFilterCategories, facetItem.category)) {
            this.activeFilterCategories[facetItem.category] = new Array<string>();
        }
        // if (!this.activeFilterCategories[facetItem.category].some((e) => e === facetItem.val)) {
        if (!this.activeFilterCategories[facetItem.category].some((e) => e === facetItem.val)) {
            this.activeFilterCategories[facetItem.category].push(facetItem.val);

            this.rdrAPI.facetedSearch(this.searchTerm, this.activeFilterCategories, this.solr.core, this.solr.host, undefined).subscribe(
                (res: SolrResponse) => this.dataHandler(res, facetItem),
                (error: any) => this.errorHandler(error),
            );
            // alert(this.activeFilterCategories[filter.Category]);
            // var res = await rdrApi.search(this.searchTerm, this.activeFilterCategories, this.solrCore, this.solrHost);
            // this.results = res.response.docs;
            // this.numFound = res.response.numFound;

            // // pagination
            // this.pagination['total'] = res.response.numFound;
            // this.pagination['per_page'] = res.responseHeader.params.rows;
            // this.pagination['current_page'] = 1;
            // this.pagination['data'] = res.response.docs;

            // var facet_fields = res.facet_counts.facet_fields;
            // for (var prop in facet_fields) {
            //   var facetValues = facet_fields[prop].map((facetValue, i) => {
            //     if (i % 2 === 0) {
            //       // var rObj = { value: facetValue, count: facet_fields[prop][i + 1] };
            //       var rObj;
            //       if (filter.value == facetValue) {
            //         rObj = filter;
            //       } else if (this.facets[prop].some(e => e.value === facetValue)) {
            //         // console.log(facetValue + " is included")
            //         var indexOfFacetValue = this.facets[prop].findIndex(i => i.value === facetValue);
            //         // console.log(indexOfFacetValue);
            //         rObj = this.facets[prop][indexOfFacetValue];
            //         rObj.count = facet_fields[prop][i + 1];
            //       } else {
            //         rObj = new FilterItem(facetValue, facet_fields[prop][i + 1]);
            //       }
            //       return rObj;
            //     }
            //   }).filter(function (el) {
            //     return el != null && el.count > 0;
            //   });
            //   // this.facets.push({ filterName: prop, values: facetValues });
            //   this.facets[prop] = facetValues;
        }
    }
}
