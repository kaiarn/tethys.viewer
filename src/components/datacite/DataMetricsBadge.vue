<template>
    <div v-bind:title="'Metrics for DOI: ' + doi">
        <div v-if="doi">
            <!-- <div v-if="display == 'small'"> -->
            <SmallWidget v-bind:doi="doi" v-bind:display="display" v-bind:data-input="dataObject" />
            <!-- </div> -->
        </div>
        <a v-else>There is no DOI</a>
    </div>
</template>

<script lang="ts">
import SmallWidget from "./SmallWidget.vue";
// import MediumWidget from "./MediumWidget.vue";
// import DataCiteWidget from "./DataCiteWidget.vue";
// import RegularWidget from "./RegularWidget.vue";

import { Vue, Component, Prop } from "vue-facing-decorator";

@Component({
    name: "DataMetricsBadge",
    components: {
        // MediumWidget,
        SmallWidget,
        // DataCiteWidget,
        // RegularWidget,
    },
})
export default class DataMetricsBadge extends Vue {
    name = "DataMetricsBadge";
    funtional = true;

    @Prop({
        type: Object,
    })
    dataInput!: object;

    @Prop({
        type: String,
        default: "",
    })
    doi!: string;

    @Prop({
        type: String,
        required: false,
        validator(value) {
            return ["small", "medium", "datacite", "regular"].indexOf(value) > -1;
        },
        default: "small",
    })
    display!: string;

    get dataObject() {
        // if (typeof this.dataInput !== "undefined") {
        return this.dataInput;
        // }
        // return null;
    }
}
</script>

<style scoped></style>
