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

    public getExtension(filename: string): string {
        return filename.substring(filename.lastIndexOf(".") + 1, filename.length) || filename;
    }

    public formatSize(file_size: number, precision = 1) {
        let size = file_size;
        const unit = ["Byte", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
        let i;
        for (i = 0; size >= 1024 && i < unit.length - 1; i++) {
            size = size / 1024;
        }
        // return Math.round((size * precision) / precision) + " " + unit[i];
        return Math.round((size + Number.EPSILON) * 100) / 100 + " " + unit[i];
    }

    public getHumanDate(date: string): string {
        return moment(date).format("DD.MM.YYYY HH:mm");
        // return moment(date).format("MMM Do YYYY");
    }

    public getYear(date: string) {
        return moment(date).format("YYYY");
    }
}
