<template>
    <div class="column" v-for="document in results" :key="document.id">
        <div class="card result-list-container">
            <div class="card-content row record-elem">
                <span class="label label-info" data-container="div" data-title="Publication date">
                    {{ convert(document.server_date_published) }}
                </span>
                <span class="label label-default ng-binding">{{ document.doctype }}</span>
                <span v-if="openAccessLicences.includes(document.licence)" class="label label-success titlecase">Open Access</span>

                <p v-if="document.identifier && document.identifier.length > 0">
                    <!-- <span>Author: {{ document.identifier.join(', ') }}</span> -->
                    <!-- <span v-for="(author,index) in document.author" :key="index">{{ author }}; </span> -->
                    <!-- <span>'https://doi.org/' + {{ document.identifier[0] }}</span> -->
                    <a target="_blank" v-bind:href="'https://doi.org/' + document.identifier[0]">
                        {{ "https://doi.org/" + document.identifier[0] }}
                    </a>
                </p>

                <h4>
                    <a
                        v-if="document.identifier && document.identifier.length > 0"
                        target="_self"
                        v-bind:href="'https://doi.' + getDomainWithoutSubdomain() + '/' + document.identifier[0]"
                        class="ng-binding"
                    >
                        {{ document.title_output }}
                    </a>
                    <a v-else target="_self" v-bind:href="'dataset/' + document.id" class="ng-binding">
                        {{ document.title_output }}
                    </a>
                </h4>

                <p v-if="document.author && document.author.length > 0">
                    <!-- <span>Author: {{ document.author.join(', ') }}</span> -->
                    <span v-for="(author, index) in document.author" :key="index">{{ author }}; </span>
                </p>

                <p class="clamped clamped-2">
                    <span class="text">
                        Abstract: {{ document.abstract_output }}
                        <span class="ellipsis">...</span>
                        <span class="fill"></span>
                    </span>
                </p>

                <p>
                    <span>Licence: {{ document.licence }}</span>
                </p>

                <span class="label label-keyword titlecase" v-for="(item, index) in document.subject" :key="index"> #{{ item }} </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import VsResults from "./vs-result";
export default VsResults;
</script>

<style scoped>
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
    /* margin-left: 10px; */
}
/* .record-elem .h4, record-elem h4 {
    font-size: 18px;
} */
.record-elem p a {
    color: #3ad29f;
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
    font-size: 16px;
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
    font-size: 16px;
    letter-spacing: 0.05em;
    margin-top: 8px;
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
