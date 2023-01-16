import { Subscription } from "rxjs";
import { Component, Vue } from "vue-facing-decorator";
import DatasetService from "../../services/dataset.service";
import { DbDataset } from "@/models/dataset";

@Component({
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

    beforeMount(): void {
        // this.rdrAPI = new DatasetService();
        this.getYears();
    }

    getYears(): void {
        const newSubs: Subscription = DatasetService.getYears().subscribe({
            next: (res: string[]) => this.dataHandler(res),
            error: (error: string) => this.errorHandler(error),
            complete: () => newSubs.unsubscribe(),
        });
        // this.subscriptions.push(newSubs);
    }

    beforeUnmount(): void {
        //unsunscribe to ensure no memory leaks
        // this.subscription.unsubscribe();
        for (const subs of this.subscriptions) {
            subs.unsubscribe();
        }
    }

    select(year: string): void {
        this.selected = year;
        const newSubs: Subscription = DatasetService.getDocuments(year).subscribe({
            next: (res: Array<DbDataset>) => {
                this.datasets = res;
            },
            error: (error: string) => this.errorHandler(error),
            complete: () => newSubs.unsubscribe(),
        });
        // this.subscriptions.push(newSubs);
    }

    private dataHandler(res: string[]): void {
        // this.results = datasets;
        this.years = res;
    }

    private errorHandler(err: string): void {
        this.error = err;
        // this.loading = false;
    }

    toDayDateTimeString(UNIX_timestamp: number): string {
        const a = new Date(UNIX_timestamp * 1000);
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const year = a.getFullYear();
        const month = months[a.getMonth()];
        const date = a.getDate();
        const hour = a.getHours();
        const min = a.getMinutes();
        const sec = a.getSeconds();
        const time = date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
        return time;
    }
}
