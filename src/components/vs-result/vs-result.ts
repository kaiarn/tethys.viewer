import { Dataset } from "@/models/dataset";
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Options({
    name: "VsResult",
})
export default class VsResult extends Vue {
    public openAccessLicences: Array<string> = ["CC-BY-4.0", "CC-BY-SA-4.0"];

    @Prop()
    private datasets!: Array<Dataset>;

    public get results(): Array<Dataset> {
        return this.datasets;
    }

    public getDomainWithoutSubdomain(): string {
        const urlParts = new URL(window.location.href).hostname.split(".");

        return urlParts
            .slice(0)
            .slice(-(urlParts.length === 4 ? 3 : 2))
            .join(".");
    }

    private convert(unixtimestamp: number): string {
        // Unixtimestamp
        // var unixtimestamp = document.getElementById('timestamp').value;
        // Months array
        const months_arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        // Convert timestamp to milliseconds
        const date = new Date(unixtimestamp * 1000);
        // Year
        const year = date.getFullYear();
        // Month
        const month = months_arr[date.getMonth()];
        // Day
        const day = date.getDate();
        // Hours
        const hours = date.getHours();
        // Minutes
        const minutes = "0" + date.getMinutes();
        // Seconds
        const seconds = "0" + date.getSeconds();
        // Display date time in MM-dd-yyyy h:m:s format
        const convdataTime = month + "-" + day + "-" + year + " " + hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
        // document.getElementById('datetime').innerHTML = convdataTime;
        return convdataTime;
    }
}
