<template>
    <div>
        <!-- <div class="content column is-half is-offset-one-quarter" style="margin-top: 30px; padding-bottom: 0; margin-bottom: 0px"> -->
        <div class="column is-two-thirds-tablet is-half-desktop is-one-third-widescreen mx-auto">
            <div class="search-box mx-auto">
                <div class="field has-addons main-search-from-bg">
                    <div class="control is-expanded">
                        <input
                            v-on:input="searchChanged"
                            id="search_query"
                            class="input is-medium"
                            type="text"
                            name="q"
                            autocomplete="off"
                            v-model="display"
                            v-bind:placeholder="placeholder"
                            v-on:keydown.down="onArrowDown"
                            v-on:keydown.up="onArrowUp"
                            v-on:keydown.enter="onEnter"
                            @keydown.tab="close"
                            v-on:focus="focus"
                        />
                        <!-- <p>Message is: {{ display }}</p>  v-on:input="searchChanged"-->
                    </div>

                    <div class="control">
                        <button class="button input is-medium search-button-icon" @click="search()">
                            <!-- <img src="../../assets/fa/search.svg" style="height: 22px; width: 22px" /> -->
                            <i class="fas fa-search text-white"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="column is-half is-offset-one-quarter"> -->
        <div class="column is-two-thirds-tablet is-half-desktop is-one-third-widescreen mx-auto">
            <ul class="autocomplete-results pure-u-23-24" v-show="showResults">
                <li class="loading" v-if="isLoading">Loading results...</li>

                <li
                    v-else
                    v-for="(result, i) in suggestions"
                    :key="i"
                    class="autocomplete-result-item"
                    :class="{ 'is-active': isSelected(i) }"
                    @click.prevent="select(result)"
                    :ref="setItemRef"
                >
                    <div class="small-label">
                        <label>{{ result.value }} ({{ result.type }})</label>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import VsInput from "./vs-input";
export default VsInput;
</script>

<style lang="scss" scoped>
// .columns:not(:last-child) {
//     margin-bottom: calc(1.5rem - 0.75rem);
//     display: flex;
// }

.main-search-from-bg {
    background-color: #fff;
    padding: 0.2em;
}

.column {
    display: block;
    // flex-basis: 0;
    // flex-grow: 1;
    // flex-shrink: 1;
    /* padding: 0.75rem; */
    position: relative;
    padding: 0;
}

.button {
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

.autocomplete-results {
    padding: 0;
    margin: 0;
    margin-left: 0em;
    border: 1px solid #eeeeee;
    list-style-type: none;
    z-index: 1000;
    position: absolute;
    max-height: 200px;
    overflow-y: auto;
    overflow: hidden;
    background: white;
    width: 100%;
    border: 1px solid #ccc;
    border-top: 0;
    color: black;
}

.autocomplete-result-item {
    list-style: none;
    text-align: left;
    /* padding: 7px 10px; */
    cursor: pointer;
}

.autocomplete-result-item.is-active {
    background: rgba(0, 180, 255, 0.15);
}

.autocomplete-result-item:hover {
    background: rgba(0, 180, 255, 0.075);
}
</style>
