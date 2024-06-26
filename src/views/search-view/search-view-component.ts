import { Component, Vue, Prop } from "vue-facing-decorator";
import VsInput from "@/components/vs-input/vs-input.vue";
import VsResult from "@/components/vs-result/vs-result.vue";
import FacetCategory from "@/components/face-category/facet-category.vue";
import ActiveFacetCategory from "@/components/active-facet-category/active-facet-category.vue";
import { SolrSettings } from "@/models/solr";
// import { DatasetService } from "@/services/dataset.service";
import DatasetService from "../../services/dataset.service";
import { Suggestion, Dataset, SearchType } from "@/models/dataset";
import { SolrResponse, FacetFields, FacetItem, FacetResults, FacetInstance } from "@/models/headers";
import { ActiveFilterCategories } from "@/models/solr";
import { SOLR_HOST, SOLR_CORE } from "@/constants";
import { IPagination } from "@/models/pagination";
import PaginationComponent from "@/components/PaginationComponent.vue";

@Component({
    name: "SearchViewComponent",
    components: {
        VsInput,
        VsResult,
        FacetCategory,
        ActiveFacetCategory,
        PaginationComponent,
    },
})
export default class SearchViewComponent extends Vue {
    @Prop()
    display!: string;

    @Prop()
    type!: string;

    results: Array<Dataset> = [];

    // facets: FacetFields = new FacetFields();
    facets: FacetResults = new FacetResults();
    searchTerm: string | Suggestion = "";
    // activeFilterCategories: Object = {};
    activeFilterCategories: ActiveFilterCategories = new ActiveFilterCategories(); // = new Array<ActiveFilterCategory>();
    pagination: IPagination = {
        total: 0,
        perPage: 10,
        currentPage: 1,
        // lastPage: 0,
        data: [],
    };
    loaded = false;
    numFound!: number;
    private solr: SolrSettings = {
        core: SOLR_CORE, //"rdr_data", // SOLR.core;
        host: SOLR_HOST, //"tethys.at",
        // core: "test_data", // SOLR.core;
        // host: "repository.geologie.ac.at",
    };
    // private rdrAPI!: DatasetService;
    private error = "";

    get stringSearchTerm(): string {
        if (typeof this.searchTerm === "string") {
            return this.searchTerm;
        } else if (this.searchTerm instanceof Suggestion) {
            return this.searchTerm.value + " (" + this.searchTerm.type + ")";
        } else {
            return "";
        }
    }

    hasSearchTerm(): boolean {
        if (typeof this.searchTerm === "string" && this.searchTerm !== "") {
            return true;
        } else if (this.searchTerm instanceof Suggestion && this.searchTerm.value !== "") {
            return true;
        } else {
            return false;
        }
    }
    // getKeyName(value: string) {
    //     return Object.entries(Suggestion).find(([key, val]) => val === value)?.[0];
    // }
    getEnumKeyByEnumValue<T extends { [index: string]: string }>(myEnum: T, enumValue: string): keyof T | null {
        const keys = Object.keys(myEnum).filter((x) => myEnum[x] == enumValue);
        return keys.length > 0 ? keys[0] : null;
        // return keys[0];
    }

    beforeMount(): void {
        // this.rdrAPI = new DatasetService();
        if (this.display != "" && this.type != undefined) {
            const enumKey: "Title" | "Author" | "Subject" | null = this.getEnumKeyByEnumValue(SearchType, this.type);
            if (enumKey) {
                const suggestion = new Suggestion(this.display, SearchType[enumKey]);
                this.onSearch(suggestion);
            } else {
                this.onSearch(this.display);
            }
        } else if (this.display != "" && this.type == undefined) {
            this.onSearch(this.display);
        } else {
            this.onSearch("");
        }
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
        DatasetService.facetedSearch(suggestion, this.activeFilterCategories, this.solr.core, this.solr.host, undefined).subscribe({
            next: (res: SolrResponse) => this.dataHandler(res),
            error: (error: string) => this.errorHandler(error),
        });
    }

    private dataHandler(res: SolrResponse, filterItem?: FacetItem): void {
        // this.results = datasets;
        this.results = res.response.docs;
        this.numFound = res.response.numFound;

        // pagination
        this.pagination["total"] = res.response.numFound;
        this.pagination["perPage"] = res.responseHeader.params.rows as number;
        // this.pagination["currentPage"] = 1;
        this.pagination["data"] = res.response.docs;
        this.pagination.lastPage = Math.ceil(this.pagination.total / this.pagination.perPage);

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

                let facetValues = facetItems.map((facetItem) => {
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

    private errorHandler(err: string): void {
        this.error = err;
        // this.loading = false;
    }

    onMenuClick(page: number) {
        // const test = page;
        // console.log(test);
        this.pagination.currentPage = page;
        const start = page * this.pagination.perPage - this.pagination.perPage;

        DatasetService.facetedSearch(this.searchTerm, this.activeFilterCategories, this.solr.core, this.solr.host, start.toString()).subscribe(
            (res: SolrResponse) => this.dataHandler(res),
            (error: string) => this.errorHandler(error),
        );
    }

    onFilter(facetItem: FacetItem): void {
        this.pagination.currentPage = 1;
        // console.log(facetItem.val);
        // if (!this.activeFilterCategories.hasOwnProperty(facetItem.category)) {
        if (!Object.prototype.hasOwnProperty.call(this.activeFilterCategories, facetItem.category)) {
            this.activeFilterCategories[facetItem.category] = new Array<string>();
        }
        // if (!this.activeFilterCategories[facetItem.category].some((e) => e === facetItem.val)) {
        if (!this.activeFilterCategories[facetItem.category].some((e) => e === facetItem.val)) {
            this.activeFilterCategories[facetItem.category].push(facetItem.val);

            DatasetService.facetedSearch(this.searchTerm, this.activeFilterCategories, this.solr.core, this.solr.host, undefined).subscribe(
                (res: SolrResponse) => this.dataHandler(res, facetItem),
                (error: string) => this.errorHandler(error),
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

    onClearFacetCategory(categoryName: string): void {
        // alert(categoryName);
        delete this.activeFilterCategories[categoryName];

        DatasetService.facetedSearch(this.searchTerm, this.activeFilterCategories, this.solr.core, this.solr.host, undefined).subscribe({
            next: (res: SolrResponse) => {
                this.results = res.response.docs;
                this.numFound = res.response.numFound;

                // pagination
                this.pagination["total"] = res.response.numFound;
                this.pagination["perPage"] = res.responseHeader.params.rows as number;
                this.pagination["currentPage"] = 1;
                this.pagination["data"] = res.response.docs;

                const facet_fields: FacetFields = res.facets;
                let prop: keyof typeof facet_fields;
                for (prop in facet_fields) {
                    const facetCategory: FacetInstance = facet_fields[prop];
                    if (facetCategory.buckets) {
                        const facetItems: Array<FacetItem> = facetCategory.buckets;

                        const facetValues = facetItems.map((facetItem) => {
                            let rObj: FacetItem;
                            if (this.facets[prop]?.some((e) => e.val === facetItem.val)) {
                                // console.log(facetValue + " is included")
                                const indexOfFacetValue = this.facets[prop].findIndex((i) => i.val === facetItem.val);
                                // console.log(indexOfFacetValue);
                                rObj = this.facets[prop][indexOfFacetValue];
                                rObj.count = facetItem.count;
                                // rObj = new FacetItem(val, count);
                                //if facet ccategory is reactivated category, deactivate all filter items
                                if (prop == categoryName) {
                                    rObj.active = false;
                                }
                            } else {
                                rObj = new FacetItem(facetItem.val, facetItem.count);
                            }
                            return rObj;
                        });
                        this.facets[prop] = facetValues;
                    }
                }
            },
            error: (error: string) => this.errorHandler(error),
            complete: () => console.log("clear facet category completed"),
        });
    }

    // onPaging(page: number): void {}
}
