import { Component, Vue, Prop, Emit } from "vue-facing-decorator";
// import { Prop, Emit } from "vue-property-decorator";

@Component({
    name: "ActiveFacetCategory",
})
export default class ActiveFacetCategory extends Vue {
    bar = "";

    @Prop({
        type: Array<string>,
    })
    filterItems!: string[];

    @Prop({
        type: String,
        required: true,
    })
    categoryName!: string;

    // @Prop([String])
    // alias;

    get alias(): string {
        return this.categoryName == "doctype" ? "datatype" : this.categoryName;
    }

    // get filterItems(): Array<string> {
    //     return this.data;
    // }

    // get uncollapseLabelText() : string {
    //     if (this.collapsed == true) {
    //         // return myLabels.viewer.sidePanel.more; //"More results";
    //         return "More results";
    //     }
    //     else {
    //         // return myLabels.viewer.sidePanel.collapse; //"Collapse";
    //         return "Collapse";
    //     }
    // }

    // toggle = function (): void {
    //     if (this.collapsed == true) {
    //         this.collapsed = false;
    //     }
    //     else if (this.collapsed == false) {
    //         this.collapsed = true;
    //         //list.children("li:gt(4)").hide();
    //     }
    // }

    @Emit("clear-facet-category")
    deactivateFacetCategory(): string {
        // filterItem.Category = this.alias;
        // filterItem.Active = true;
        // this.$emit("clearFacetCategory", this.categoryName, this.alias);
        return this.categoryName;
    }
}
