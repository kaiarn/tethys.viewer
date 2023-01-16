<template>
    <div v-for="document in results" v-bind:key="document.id">
        <div class="card result-list-container">
            <div class="card-content record-elem">
                <p v-if="document.identifier && document.identifier.length > 0">
                    <!-- <span>Author: {{ document.identifier.join(', ') }}</span> -->
                    <!-- <span v-for="(author,index) in document.author" :key="index">{{ author }}; </span> -->
                    <!-- <span>'https://doi.org/' + {{ document.identifier[0] }}</span> -->
                    <a target="_blank" v-bind:href="'https://doi.org/' + document.identifier[0]"> {{ "https://doi.org/" + document.identifier[0] + " &#10148;" }} </a>&nbsp;
                    <span v-if="document.author && document.author.length > 0" class="disabled">{{ document.author[0] }}</span>
                </p>

                <!-- <span class="label label-info" data-container="div" data-title="Publication date">
                    {{ convert(document.server_date_published) }}
                </span>
                <span class="label label-default ng-binding">{{ document.doctype }}</span>
                <span v-if="openAccessLicences.includes(document.licence)" class="label label-success titlecase">Open Access</span> -->

                <h4>
                    <!-- <a
                        v-if="document.identifier && document.identifier.length > 0"
                        target="_self"
                        v-bind:href="'https://doi.' + getDomainWithoutSubdomain() + '/' + document.identifier[0]"
                        class="ng-binding"
                    >
                        {{ document.title_output }}
                    </a> -->
                    <!-- <a target="_self" v-bind:href="'dataset/' + document.id" class="ng-binding">
                        {{ document.title_output }}
                    </a> -->
                    <router-link class="ng-binding" v-bind:to="{ name: 'dataset', params: { datasetId: document.id } }">{{ document.title_output }}</router-link>
                </h4>

                <!-- <p v-if="document.author && document.author.length > 0">
                    <span>Author: {{ document.author.join(', ') }}</span>
                    <span v-for="(author, index) in document.author" :key="index">{{ author }}; </span>
                </p> -->

                <p class="clamped clamped-2">
                    <span class="disabled" data-container="div" data-title="Publication date">
                        {{ convert(document.server_date_published) + ":&nbsp;" }}
                    </span>
                    <span class="text">
                        {{ document.abstract_output }}
                        <span class="ellipsis">...</span>
                        <span class="fill"></span>
                    </span>
                </p>

                <p>
                    <span class="label"><i class="fas fa-file"></i> {{ document.doctype }}</span>
                    <!-- <span>Licence: {{ document.licence }}</span> -->
                    <span v-if="openAccessLicences.includes(document.licence)" class="label titlecase"><i class="fas fa-lock-open"></i> Open Access</span>
                </p>

                <!-- <span class="label label-keyword titlecase" v-for="(item, index) in document.subject" :key="index"> #{{ item }} </span> -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import VsResults from "./vs-result";
export default VsResults;
</script>

<style lang="scss" scoped>
.card {
    border-radius: 0;
    /* rempve box-shadow */
    box-shadow: none;
}

/* overflow for abstracts */
.clamped {
    line-height: 1.5;
    overflow: hidden;
    position: relative;
}
.clamped-2 {
    /* Clamp to 2 lines, ie line-height x 2: */
    max-height: 4.5em;
}
.ellipsis {
    background: #fff;
    bottom: 0;
    position: absolute;
    right: 0;
}
.fill {
    background: #fff;
    height: 100%;
    position: absolute;
    width: 100%;
}

/* zenodo */
.label-success {
    background-color: #5cb85c;
}
.label-default {
    background-color: #777;
}
.label-info {
    background-color: #6aa3d5;
}
.label-keyword {
    background-color: #7e7e7e;
}
.label {
    display: inline-block;
    padding: 0.2em 0.12em 0.3em;
    font-size: 75%;
    color: #fff;
    border-radius: 0.25em;
    margin-right: 1.25em;
    text-transform: uppercase;
    font-weight: normal;
}
/* .record-elem .h4, record-elem h4 {
    font-size: 18px;
} */

.record-elem p a {
    color: #33cccc;
    font-size: 14px;
}
/* .record-elem h4 a {
    color: #000;
} */

.record-elem h4 a {
    cursor: pointer;
    color: #000;
    text-decoration: none;
    font-weight: bold;
    /* margin-left: 10px; */
    // font-size: 16px;
}
.record-elem h4 a:hover {
    color: #777;
    text-decoration: none;
}
/* .search-detail a:hover {
    color: rgb(0, 128, 0);
} */
.record-elem .h4,
.record-elem h4 {
    // font-size: 16px;
    letter-spacing: 0.05em;
    // margin-top: 8px;
}
.record-detail h1,
.record-detail p,
.record-elem h4,
.record-elem p,
.well {
    word-wrap: break-word;
}
.record-elem p span {
    color: #000;
    font-size: 14px;
}
.record-elem p span.disabled {
    color: #7e7e7e;
    // color: lightgray;
    pointer-events: none;
}
.record-elem p span i {
    color: #336699;
}

.post {
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;

    box-sizing: border-box;
    margin-bottom: 10px;
    margin-top: 15px;
}
/* .record-elem {
    border-top: 1px solid rgb(238, 238, 238);
} */
</style>
