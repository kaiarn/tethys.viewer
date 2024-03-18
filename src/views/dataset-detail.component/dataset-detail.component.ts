import { Component, Vue, Prop } from "vue-facing-decorator";
import { DbDataset } from "@/models/dataset";
// import { Prop } from "vue-property-decorator";
import DatasetService from "../../services/dataset.service";
import { Subscription } from "rxjs";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import VsInput from "@/components/vs-input/vs-input.vue";
import { Suggestion } from "@/models/dataset";
import { VUE_API } from "@/constants";
// import DataMetricsBadge from "data-metrics-badge/dist/data-metrics-badge.js";
// import DataMetricsBadge from "@/components/datacite/DataMetricsBadge.vue";

@Component({
    name: "DatasetDetailComponent",
    components: {
        VsInput,
        // DataMetricsBadge,
    },
})
export default class DatasetDetailComponent extends Vue {
    @Prop()
    datasetId!: string;

    // @Prop()
    // identifier!: string;

    searchTerm: string | Suggestion = "";

    private subscriptions: Array<Subscription> = [];
    public dataset = {} as DbDataset;
    private error = "";
    public loaded = false;
    public openAccessLicences: Array<string> = ["CC-BY-4.0", "CC-BY-SA-4.0"];
    public portal = VUE_API + "/api/file/download/";

    public post = {
        views: 25,
        downloads: 1262,
        citations: 2424,
    };

    created(): void {
        dayjs.extend(advancedFormat);
        if (!this.datasetId.includes(".")) {
            // get datset by publish_id
            this.getDataset(Number(this.datasetId));
        } else {
            // get datset by doi_value
            this.getDatasetByIdentifier(this.datasetId);
        }
    }

    beforeUnmount(): void {
        //unsunscribe to ensure no memory leaks
        // this.subscription.unsubscribe();
        for (const subs of this.subscriptions) {
            subs.unsubscribe();
        }
    }

    onSearch(suggestion: Suggestion | string): void {
        const host = window.location.host;
        const parts = host.split(".");
        if (parts[0] === "doi") {
            let term;
            if (typeof suggestion === "string") {
                term = suggestion;
                window.open("https://tethys.at/search/" + term, "_self");
            } else if (suggestion instanceof Suggestion) {
                term = suggestion.value;
                const type = suggestion.type;
                window.open("https://tethys.at/search/" + term + "/" + type, "_self");
            }
        } else {
            let term;
            if (typeof suggestion === "string") {
                term = suggestion;
                this.$router.push({ name: "Search", params: { display: term } });
            } else if (suggestion instanceof Suggestion) {
                term = suggestion.value;
                this.$router.push({ name: "Search", params: { display: term, type: suggestion.type } });
            }
        }

        // this.searchTerm = suggestion;
        // this.$router.push({ name: "Search", params: { display: term, suggestion instanceof Suggestion ? ty} });
    }

    private getDataset(id: number): void {
        const newSub = DatasetService.getDataset(id).subscribe({
            next: (res: DbDataset) => {
                this.dataset = res;
                this.loaded = true;
            },
            error: (error: string) => this.errorHandler(error),
        });

        this.subscriptions.push(newSub);
    }

    private getDatasetByIdentifier(id: string): void {
        const newSub = DatasetService.getDatasetByDoi(id).subscribe({
            next: (res: DbDataset) => {
                this.dataset = res;
                this.loaded = true;
            },
            error: (error: string) => this.errorHandler(error),
        });

        this.subscriptions.push(newSub);
    }

    private errorHandler(err: string): void {
        this.error = err;
        // this.loading = false;
    }

    public goBack(): void {
        // go back by one record, the same as history.back()
        // router.go(-1);
        this.$router.go(-1);
    }

    public getExtension(filename: string): string {
        return filename.substring(filename.lastIndexOf(".") + 1, filename.length) || filename;
    }

    public formatSize(file_size: number): string {
        let size = file_size;
        const unit = ["Byte", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
        let i;
        for (i = 0; size >= 1024 && i < unit.length - 1; i++) {
            size = size / 1024;
        }
        // return Math.round((size * precision) / precision) + " " + unit[i];
        return Math.round((size + Number.EPSILON) * 100) / 100 + " " + unit[i];
    }

    public getPublishedDate(date: string): string {
        // return moment(date).format("ddd, MMMM Do, YYYY h:mm a");
        return dayjs(date).format("ddd, MMMM Do, YYYY h:mm a");
    }

    public getHumanDate(date: string): string {
        // return moment(date).format("DD.MM.YYYY HH:mm");
        return dayjs(date).format("DD.MM.YYYY HH:mm");
    }

    public getYear(date: string): string {
        return dayjs(date).format("YYYY");
        // return moment(date).format("YYYY");
    }

    public getCitation(): string {
        let citation = this.dataset.authors
            .map((u) => {
                let name = u.last_name;
                if (u.first_name) {
                    name += ", " + u.first_name?.substring(0, 1).toUpperCase() + ".";
                }
                return name;
                // u.last_name + ", " + u.first_name?.substring(0, 1).toUpperCase() + "."
            })
            .join(", ");
        citation += " (" + dayjs(this.dataset.server_date_published).format("YYYY") + "): ";
        citation += this.dataset.MainTitle?.value;
        citation += "." + this.dataset.creating_corporation + ", ";
        citation += this.dataset.publisher_name;
        citation += ", Wien";
        return citation;
    }
}
