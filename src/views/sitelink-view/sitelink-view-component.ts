import { Observable, Subscription } from "rxjs";
import { Options, Vue } from "vue-class-component";
import DatasetService from "../../services/dataset.service";
import { DbDataset } from "@/models/dataset";

@Options({
    name: "SitelinkViewComponent",
})
export default class SitelinkViewComponent extends Vue {
    public years: string[] = [];
    public selected = "";
    private error = "";
    // private subscription!: Subscription;
    private subscriptions: Array<Subscription> = [];
    public datasets: Array<DbDataset> = [];

    // constructor() {
    //     super();
    //     // this.rdrAPI = new DatasetService();
    // }

    beforeMount() {
        // this.rdrAPI = new DatasetService();
        this.getYears();
    }

    getYears() {
        const newSubs: Subscription = DatasetService.getYears().subscribe(
            (res: string[]) => this.dataHandler(res),
            (error: any) => this.errorHandler(error),
            () => newSubs.unsubscribe(),
        );
        // this.subscriptions.push(newSubs);
    }

    beforeUnmount() {
        //unsunscribe to ensure no memory leaks
        // this.subscription.unsubscribe();
        for (const subs of this.subscriptions) {
            subs.unsubscribe();
        }
    }

    select(year: string) {
        this.selected = year;
        const newSubs = DatasetService.getDocuments(year).subscribe(
            (res: Array<DbDataset>) => {
                this.datasets = res;
            },
            (error: any) => this.errorHandler(error),
        );
        this.subscriptions.push(newSubs);
    }

    private dataHandler(res: string[]): void {
        // this.results = datasets;
        this.years = res;
    }

    private errorHandler(err: any): void {
        this.error = err;
        // this.loading = false;
    }
}
