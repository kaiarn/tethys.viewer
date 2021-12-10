import { Options, Vue } from "vue-class-component";
// import DatasetService from "../../services/dataset.service";
import { DbDataset } from "@/models/dataset";
import { Prop } from "vue-property-decorator";
import DatasetService from "../../services/dataset.service";
import { Subscription } from "rxjs";

@Options({
    name: "DatasetDetailComponent",
    // selector: "dataset-detail",
})
export default class DatasetDetailComponent extends Vue {
    @Prop()
    datasetId!: number;

    private subscriptions: Array<Subscription> = [];
    private dataset = {};
    private error = "";

    beforeMount(): void {
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
        const newSub = DatasetService.getDataset(this.datasetId).subscribe(
            (res: DbDataset) => {
                this.dataset = res;
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
}
