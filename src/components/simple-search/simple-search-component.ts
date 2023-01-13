import { Component, Vue } from "vue-facing-decorator";

@Component({
    name: "SimpleSearchComponent",
})
export default class SimpleSearchComponent extends Vue {
    public display = "";

    search(): void {
        this.$router.push({ name: "Search", params: { display: this.display } });
    }
}
