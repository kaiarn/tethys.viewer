import { Options, Vue } from "vue-class-component";
import VsInput from "@/components/vs-input/vs-input.vue";
import { Suggestion } from "@/models/dataset";

@Options({
    name: "HomeViewComponent",
    components: {
        VsInput,
    },
})
export default class HomeViewComponent extends Vue {
    public display = "";

    onSearch(suggestion: Suggestion | string): void {
        let term;
        if (typeof suggestion === "string") {
            term = suggestion;
            this.$router.push({ name: "Search", params: { display: term } });
        } else if (suggestion instanceof Suggestion) {
            term = suggestion.value;
            this.$router.push({ name: "Search", params: { display: term, type: suggestion.type } });
        }
    }

    search(): void {
        this.$router.push({ name: "Search", params: { display: this.display } });
    }
}
