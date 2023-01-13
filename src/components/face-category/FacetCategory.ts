import { FacetItem } from "@/models/headers";
// import { FilterItem } from "@/models/solr";
import { Component, Vue, Prop, Emit } from "vue-facing-decorator";
// import { Prop, Emit } from "vue-property-decorator";

@Component({
    name: "FacetCategory",
})
export default class FacetCategory extends Vue {
    ITEMS_PER_FILTER = 2;
    bar = "";
    collapsed = true;

    @Prop()
    facetItems!: Array<FacetItem>;

    // @Prop([String])
    @Prop({
        type: String,
    })
    filterName!: string;

    get alias(): string {
        return this.filterName == "datatype" ? "doctype" : this.filterName;
    }

    // get filterItems(): Array<FilterItem> {
    //     return this.data;
    // }

    get overflowing(): boolean {
        //ko.observable(self.filterItems().length - self.activeFilterItems().length > ITEMS_PER_FILTER);
        return this.facetItems.length > this.ITEMS_PER_FILTER;
    }

    get uncollapseLabelText(): string {
        if (this.collapsed == true) {
            // return myLabels.viewer.sidePanel.more; //"More results";
            return "more";
        } else {
            // return myLabels.viewer.sidePanel.collapse; //"Collapse";
            return "collapse";
        }
    }

    toggle(): void {
        if (this.collapsed == true) {
            this.collapsed = false;
        } else if (this.collapsed == false) {
            this.collapsed = true;
            //list.children("li:gt(4)").hide();
        }
    }

    @Emit("filter")
    activateItem(filterItem: FacetItem): FacetItem {
        filterItem.category = this.alias;
        filterItem.active = true;
        // this.$emit("filter", filterItem);
        return filterItem;
    }
}
