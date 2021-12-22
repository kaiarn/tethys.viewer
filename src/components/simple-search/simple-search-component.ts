import { Options, Vue } from "vue-class-component";

@Options({
    name: "SimpleSearchComponent",
})
export default class SimpleSearchComponent extends Vue {
    public display = "";

    search(): void {
        this.$router.push({ name: "Search", params: { display: this.display } });
    }
}
