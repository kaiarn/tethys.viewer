import { Component, Vue } from "vue-facing-decorator";
import VsInput from "@/components/vs-input/vs-input.vue";
import { Suggestion } from "@/models/dataset";

@Component({
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
