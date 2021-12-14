import { Options, Vue } from "vue-class-component";
import { DbDataset } from "@/models/dataset";
import { Prop } from "vue-property-decorator";
import DatasetService from "../../services/dataset.service";
import { Subscription } from "rxjs";
import moment from "moment";

@Options({
    name: "DatasetDetailComponent",
    // selector: "dataset-detail",
})
export default class DatasetDetailComponent extends Vue {
    @Prop()
    datasetId!: number;

    private subscriptions: Array<Subscription> = [];
    public dataset = {} as DbDataset;
    private error = "";
    public loaded = false;
    public openAccessLicences: Array<string> = ["CC-BY-4.0", "CC-BY-SA-4.0"];

    created(): void {
        this.getDataset(this.datasetId);
    }

    beforeUnmount(): void {
        //unsunscribe to ensure no memory leaks
        // this.subscription.unsubscribe();
        for (const subs of this.subscriptions) {
            subs.unsubscribe();
        }
    }

    private getDataset(id: number): void {
        const newSub = DatasetService.getDataset(id).subscribe(
            (res: DbDataset) => {
                this.dataset = res;
                this.loaded = true;
            },
            (error: string) => this.errorHandler(error),
        );
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

    public getHumanDate(date: string): string {
        return moment(date).format("DD.MM.YYYY HH:mm");
        // return moment(date).format("MMM Do YYYY");
    }

    public getYear(date: string) {
        return moment(date).format("YYYY");
    }
}
