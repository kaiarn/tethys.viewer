<template>
    <div class="content column is-half is-offset-one-quarter" style="margin-top: 30px; padding-bottom: 0; margin-bottom: 0px">
        <div class="field has-addons">
            <div class="control is-expanded">
                <input
                    id="search_query"
                    class="input is-medium"
                    type="text"
                    name="q"
                    autocomplete="off"
                    v-model="display"
                    v-on:input="searchChanged"
                    v-bind:title="title"
                    v-bind:placeholder="placeholder"
                    v-on:keydown.down="onArrowDown"
                    v-on:keydown.up="onArrowUp"
                    v-on:keydown.enter="onEnter"
                    @keydown.tab="close"
                    v-on:focus="focus"
                />
                <!-- <p>Message is: {{ display }}</p> -->
            </div>

            <div class="control">
                <button class="button input is-medium search-button-icon" @click="search()">
                    <img src="../../assets/fa/search.svg" style="height: 22px; width: 22px" />
                </button>
            </div>
        </div>
    </div>
    <div class="autocomplete-column is-half is-offset-one-quarter">
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
</template>

<script lang="ts">
import VsInput from "./vs-input";
export default VsInput;
</script>

<style>
.autocomplete-column {
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: 0 0.75rem 0.75rem 0.75rem;
    position: relative;
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
