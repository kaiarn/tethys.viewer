<template>
    <div class="small-container">
        <a v-bind:href="link">
            <div class="d-flex">
                <!-- <test-logo v-bind:class="'svglogo'" /> -->
                <div v-bind:class="['', '0', 0].includes(citations) == false ? activeClass : inactiveClass">Citations</div>
                <div class="p-2 counts" v-bind:title="pluralize(citations, 'Citation')">
                    {{ formatNumbers(["", "0", 0].includes(citations) == false ? citations : "&nbsp;&nbsp;") }}
                </div>
                <div class="p-2 span" />

                <div v-if="parseInt(views) + parseInt(downloads) > 0" class="d-flex">
                    <div v-bind:class="['', '0', 0].includes(views) == false ? activeClass : inactiveClass">Views</div>
                    <div class="p-2 counts" v-bind:title="pluralize(views, 'View')">
                        {{ formatNumbers(["", "0", 0].includes(views) == false ? views : "&nbsp;&nbsp;") }}
                    </div>
                    <div class="p-2 span" />

                    <div v-bind:class="['', '0', 0].includes(downloads) == false ? activeClass : inactiveClass">Downloads</div>
                    <div class="p-2 counts" v-bind:title="pluralize(downloads, 'Download')">
                        {{ formatNumbers(["", "0", 0].includes(downloads) == false ? downloads : "&nbsp;&nbsp;") }}
                    </div>
                    <div class="p-2 span" />
                </div>
            </div>
        </a>
    </div>
</template>

<script lang="ts">
import { Component } from "vue-facing-decorator";
import BaseWidget from "./BaseWidget.vue";
// import testLogo from "@/assets/datacite/testLogo.vue";

@Component({
    name: "SmallWidget",
})
export default class SmallWidget extends BaseWidget {
    public activeClass = "p-2 label";
    public inactiveClass = "p-2 label-empty";

    public mounted(): void {
        this.getMetrics();
    }
}
</script>

<style scoped>
div.label {
    background-color: rgba(0, 89, 173);
    display: table;
    width: 8%;
    color: white;
    font-size: 12px;
    border-style: solid;
    /* font-weight: bold; */
    border-color: rgba(0, 89, 173);
    border-width: thin;
    /* text-align: center; */
    height: 15px;
}

div.logo {
    min-width: 100px;
    padding: 0px 0px 0px 0px;
    height: 15px;
}

.svglogo {
    color: #455a64;
    fill: #455a64;
    display: table;
    width: 20%;
    min-width: 100px;
}

div.counts {
    background-color: white;
    display: table;
    /* font-size: 2.5vh; */
    font-size: 12px;
    width: 6%;
    border-style: solid;
    font-weight: bold;
    border-color: #78909c;
    border-width: thin;
    text-align: center;
    height: 15px;
}

div.span {
    background-color: white;
    display: table;
    font-size: 2.5vh;
    width: 2%;
}

.small-container {
    width: 100%;
    min-width: 400px;
    max-width: 400px;
    /* 
    max-height: 15px;
    padding-right: 15px;
    padding-left: 15px; */
    margin-right: auto;
    margin-left: auto;
    /* font-family: Arial, Helvetica, sans-serif; */
}

.d-flex {
    display: -ms-flexbox !important;
    display: flex !important;
}

.p-2 {
    padding: 0.1rem !important;
}

.label-empty {
    background-color: #78909c;
    display: table;
    width: 8%;
    color: white;
    /* font-size: 2.5vh; */
    font-size: 12px;
    border-style: solid;
    font-weight: bold;
    border-color: #78909c;
    border-width: thin;
    text-align: center;
    height: 15px;
}

.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
</style>
