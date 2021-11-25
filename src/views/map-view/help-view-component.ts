import { Options, Vue } from "vue-class-component";
// import { Prop } from "vue-property-decorator";

@Options({
    name: "HelpViewComponent",
})
export default class HelpViewComponent extends Vue {
    results: Array<any> = [];
}
