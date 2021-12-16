import { Options, Vue } from "vue-class-component";

@Options({
    name: "HomeViewComponent",
})
export default class HomeViewComponent extends Vue {
    public display = "";

    search(): void {
        this.$router.push({ name: "Search", params: { display: this.display } });
    }
}
