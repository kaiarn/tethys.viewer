import axios from "axios";
import { ComponentBase, Vue, Prop } from "vue-facing-decorator";
import testLogo from "@/assets/datacite/testLogo.vue";

const APIURL = "https://api.datacite.org";

@ComponentBase({
    name: "BaseWidget",
    components: {
        testLogo,
    },
})
export default class BaseWidget extends Vue {
    @Prop({
        type: Object,
        required: false,
        validator(value) {
            const keys = Object.keys(value);
            return ["citations", "views", "downloads"].some((r) => keys.includes(r));
        },
    })
    dataInput = {};

    @Prop({
        type: String,
        required: true,
        validator(value) {
            return value.match(/^10\.\d{4,5}\/[-._;()/:a-zA-Z0-9*~$=]+/);
        },
    })
    doi!: string;

    @Prop({
        type: String,
        required: true,
        validator(value) {
            return ["small", "medium", "datacite", "regular"].indexOf(value) > -1;
        },
    })
    display!: string;

    public views = "";
    public citations = "";
    public downloads = "";
    private datacite: string | number = "";
    private loading = false;
    private errored = false;

    get url() {
        return `${APIURL}/graphql`;
    }

    get link() {
        return `https://commons.datacite.org/doi.org/${this.doi}`;
    }
    // get dataInputApi() {
    //     return this.viewsDistribution;
    // }
    get alt() {
        return `${Number(this.views)} Views ${Number(this.downloads)} Downloads ${Number(this.citations)} Citations from DataCite`;
    }
    get tooltip() {
        let message = "";
        message += `${this.doi} `;
        message += this.datacite ? `${this.datacite} from DataCite ` : "";
        return message;
    }

    getMetrics() {
        if (this.isLocal() === false) {
            this.requestMetrics();
        } else {
            this.grabMetrics(this.dataInput);
        }
        return true;
    }

    public pluralize(value: number | string = 0, label: string) {
        if (value === 1) {
            return `${value.toLocaleString("en-us")} ${label}`;
        }
        return `${value.toLocaleString("en-us")} ${label}s`;
    }

    public formatNumbers(num: any) {
        if (num < 1e3) return num;
        if (num >= 1e3 && num < 1e6) return `${+(num / 1e3).toFixed(1)}K`;
        if (num >= 1e6 && num < 1e9) return `${+(num / 1e6).toFixed(1)}M`;
        if (num >= 1e9 && num < 1e12) return `${+(num / 1e9).toFixed(1)}B`;
        if (num >= 1e12) return `${+(num / 1e12).toFixed(1)}T`;
        return num;
    }

    private isLocal(): boolean {
        if (this.dataInput == null && typeof this.doi !== "undefined") {
            return false;
        }
        return true;
    }

    private grabMetrics(data: any) {
        this.views = (this.formatNumbers(data.views) as string) || "";
        this.downloads = (this.formatNumbers(data.downloads) as string) || "";
        this.citations = (this.formatNumbers(data.citations) as string) || "";
        this.datacite = this.formatNumbers(data.datacite) || "";
    }

    private requestMetrics() {
        axios({
            url: this.url,
            method: "post",
            data: {
                query: `
                {
                  counts: work(id: "${this.doi}") {
                      id
                      views: viewCount
                      downloads: downloadCount
                      citations: citationCount
                    }
                }
                `,
            },
        })
            .then((response) => {
                this.grabMetrics(response.data.data.counts);
            })
            .catch((error) => {
                console.log(error);
                this.errored = true;
            })
            .finally(() => {
                this.loading = false;
            });
    }
}
