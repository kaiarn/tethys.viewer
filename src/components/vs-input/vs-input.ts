// import Vue from "vue";
// import { Component, Prop } from 'vue-property-decorator';
// import debounce from 'lodash/debounce';
// import { DatasetService } from "../../services/dataset.service";
import DatasetService from "../../services/dataset.service";
import { SolrSettings } from "@/models/solr";
// import { ref } from "vue";
import { Options, Vue } from "vue-class-component";
import { Prop, Emit } from "vue-property-decorator";
import { Dataset, Suggestion, SearchType } from "@/models/dataset";

@Options({
    name: "VsInput",
})
export default class VsInput extends Vue {
    // @Prop()
    // private title!: string;

    @Prop({ default: "Search" })
    readonly placeholder!: string;

    private display = "";
    private value!: Suggestion | string;
    private error = "";
    private results: Array<Dataset> = [];
    private loading = false;
    private selectedIndex = 0;
    private selectedDisplay = "";
    private solr: SolrSettings = {
        core: "rdr_data", // SOLR.core;
        host: "tethys.at",
    };
    // private rdrAPI!: DatasetService;
    itemRefs!: Array<any>;
    emits = ["filter"];

    setItemRef(el: any) {
        this.itemRefs.push(el);
    }

    beforeUpdate() {
        this.itemRefs = [];
    }

    mounted() {
        // this.rdrAPI = new DatasetService();
    }

    get showResults(): boolean {
        return this.results.length > 0;
    }

    get noResults(): boolean {
        return Array.isArray(this.results) && this.results.length === 0;
    }

    get isLoading(): boolean {
        return this.loading === true;
    }

    get hasError(): boolean {
        return this.error !== null;
    }

    get suggestions(): Suggestion[] {
        // const suggestion = {
        //     titles: new Array<string>(),
        //     authors: new Array<string>(),
        //     subjects: new Array<string>(),
        // };
        const suggestions = new Array<Suggestion>();

        this.results.forEach((dataset) => {
            // const del = dataset.title_output?.toLowerCase();
            if (dataset.title_output.toLowerCase().includes(this.display.toLowerCase())) {
                const title = dataset.title_output;
                // if (!suggestion["titles"].find((value) => value === title)) {
                //     suggestion.titles.push(title);
                // }
                const hasTitleSuggestion = suggestions.some((suggestion) => suggestion.value === title && suggestion.type == SearchType.Title);
                if (!hasTitleSuggestion) {
                    const suggestion = new Suggestion(title, SearchType.Title);
                    suggestions.push(suggestion);
                }
            }
            if (this.find(dataset.author, this.display.toLowerCase()) !== "") {
                const author = this.find(dataset.author, this.display.toLowerCase());

                const hasAuthorSuggestion = suggestions.some((suggestion) => suggestion.value === author && suggestion.type == SearchType.Author);
                if (!hasAuthorSuggestion) {
                    const suggestion = new Suggestion(author, SearchType.Author);
                    suggestions.push(suggestion);
                }
            }
            if (this.find(dataset.subject, this.display.toLowerCase()) != "") {
                const subject = this.find(dataset.subject, this.display.toLowerCase());
                const hasSubjectSuggestion = suggestions.some((suggestion) => suggestion.value === subject && suggestion.type == SearchType.Subject);
                if (!hasSubjectSuggestion) {
                    const suggestion = new Suggestion(subject, SearchType.Subject);
                    suggestions.push(suggestion);
                }
            }
        });

        return suggestions;
    }

    /**
     *  Clear all values, results and errors
     **/
    clear(): void {
        this.display = "";
        // this.value = null;
        this.results = [];
        this.error = "";
        // this.$emit("clear");
    }

    @Emit("search-change")
    search(): string {
        this.results = [];
        // this.$emit("search", this.display)
        this.value = this.display; //(obj["title_output"]) ? obj["title_output"] : obj.id
        return this.display;
    }

    searchChanged(): void {
        this.selectedIndex = 0;
        // Let's warn the parent that a change was made
        // this.$emit("input", this.display);
        if (this.display.length >= 2) {
            this.loading = true;
            this.resourceSearch();
        } else {
            this.results = [];
        }
    }

    private resourceSearch() {
        if (!this.display) {
            this.results = [];
            return;
        }
        this.loading = true;
        // this.setEventListener();
        this.request();
    }

    private request(): void {
        DatasetService.searchTerm(this.display, this.solr.core, this.solr.host).subscribe(
            (res: Dataset[]) => this.dataHandler(res),
            (error: any) => this.errorHandler(error),
            () => (this.loading = false),
        );
    }

    private dataHandler(datasets: Dataset[]): void {
        this.results = datasets;
        // this.$emit("search", this.display);
        // this.loading = false;
    }

    private errorHandler(err: any): void {
        this.error = err;
        // this.loading = false;
    }

    /**
     * Is this item selected?
     * @param {Object}
     * @return {Boolean}
     */
    isSelected(key: number): boolean {
        return key === this.selectedIndex;
    }

    onArrowDown(ev: any): void {
        ev.preventDefault();
        if (this.selectedIndex === null) {
            this.selectedIndex = 0;
            return;
        }
        this.selectedIndex = this.selectedIndex === this.suggestions.length - 1 ? 0 : this.selectedIndex + 1;
        this.fixScrolling();
    }

    private fixScrolling() {
        const currentElement = this.itemRefs[this.selectedIndex];
        currentElement.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
        });
    }

    onArrowUp(ev: any): void {
        ev.preventDefault();
        if (this.selectedIndex === null) {
            this.selectedIndex = this.suggestions.length - 1;
            return;
        }
        this.selectedIndex = this.selectedIndex === 0 ? this.suggestions.length - 1 : this.selectedIndex - 1;
        this.fixScrolling();
    }

    onEnter(): void {
        if (this.selectedIndex === null) {
            // this.$emit("nothingSelected", this.display);
            return;
        }
        this.select(this.suggestions[this.selectedIndex]);
        // this.$emit("enter", this.display);
    }

    @Emit("search-change")
    private select(obj: Suggestion): Suggestion {
        // if (!obj) {
        //     return;
        // }
        this.value = obj; //(obj["title_output"]) ? obj["title_output"] : obj.id
        this.display = obj.value; // this.formatDisplay(obj)
        // this.selectedDisplay = this.display;

        this.close();
        // this.$emit("update", this.value);
        return this.value;
    }

    private find(myarray: Array<string>, searchterm: string): string {
        for (let i = 0, len = myarray.length; i < len; i += 1) {
            if (typeof myarray[i] === "string" && myarray[i].toLowerCase().indexOf(searchterm) !== -1) {
                // print or whatever
                return myarray[i];
            }
        }
        return "";
    }

    /**
     *  Close the results list. If nothing was selected clear the search
     */
    close(): void {
        if (!this.value) {
            this.clear();
        }
        // if (this.selectedDisplay !== this.display && this.value) {
        //     this.display = this.selectedDisplay;
        // }
        this.results = [];
        this.error = "";
        //this.removeEventListener()
        // this.$emit("close");
    }
}
