<template>
    <div class="column is-two-thirds-tablet is-half-desktop is-one-third-widescreen mx-auto">
        <div class="search-box mx-auto">
            <div class="field has-addons main-search-from-bg">
                <div class="control is-expanded">
                    <input id="search_query" class="input is-medium" type="text" name="q" autocomplete="off" v-model="display" />
                    <!-- <p>Message is: {{ display }}</p>  v-on:input="searchChanged"-->
                </div>

                <div class="control">
                    <button class="button input is-medium search-button-icon" @click="search()">
                        <i class="fas fa-search text-white"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import SimpleSearchComponent from "./simple-search-component";
export default SimpleSearchComponent;
</script>

<style lang="scss" scoped>
.main-search-from-bg {
    background-color: #fff;
    padding: 0.2em;
}

.banner .column {
    display: block;
    // flex-basis: 0;
    // flex-grow: 1;
    // flex-shrink: 1;
    /* padding: 0.75rem; */
    position: relative;
    padding: 0;
}

.banner .button {
    background-color: #33cccc;
    // border-color: #dbdbdb;
    border-width: 0;
    color: #363636;
    cursor: pointer;
    justify-content: center;
    padding-bottom: 0;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0;
    text-align: center;
    white-space: nowrap;
}

.search-box {
    background-image: url(./../../assets/site/img/white-pixel.png);
    background-repeat: repeat;
    padding: 1.8em;
    // width: 28em;
}

.control .input,
.control .input:focus,
.column .input.selected {
    // background-color: white;
    /* border-color: #dbdbdb; */
    // border: 0;
    // outline: none;
    border-radius: 4px;
    color: #363636;
}
input {
    border-width: 0;
    box-shadow: none;
}
</style>
