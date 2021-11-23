import { Options, Vue } from "vue-class-component";
// import { Prop } from "vue-property-decorator";

@Options({
    name: "MapViewComponent",
})
export default class MapViewComponent extends Vue {
    results: Array<any> = [];
}
