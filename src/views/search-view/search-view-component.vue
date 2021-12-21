<template>
    <div id="page_style" class="rows site-content page__style page__description" autocomplete="off">
        <div class="container-fluid banner mz-5">
            <vs-input v-on:search-change="onSearch" v-bind:propDisplay="searchTerm" v-bind:placeholder="'Enter your search term...'"></vs-input>
        </div>
        <div class="column is-half is-offset-one-quarter" style="padding-top: 0; margin-top: 0">
            <!-- <div class="tabs is-centered">
                <ul id="id-results-tabs">
                    <li class="search_tab is-active">
                        <a target="_self">Web</a>
                    </li>
                    <li class="search_tab">
                        <a target="_self">Images</a>
                    </li>
                    <li class="search_tab">
                        <a target="_self">Videos</a>
                    </li>
                    <li class="search_tab">
                        <a target="_self">Homepages</a>
                    </li>
                    <li class="search_tab">
                        <a target="_self">Food</a>
                    </li>
                    <li class="search_tab">
                        <a target="_self">Books</a>
                    </li>
                </ul>
            </div> -->
            <div v-if="results.length > 0" class="result-list-info">
                <div class="resultheader" v-if="hasSearchTerm()">
                    Your search term {{ "'" + stringSearchTerm + "'" }} yielded <strong>{{ numFound }}</strong> results:
                </div>
            </div>
            <div v-else-if="results.length == 0">
                <div class="resultheader">
                    Your search yielded
                    <strong> 0</strong> results:
                </div>
            </div>

            <!-- <div id="id-pro-sign-in" class="notification" style="">
                    <button
                        class="delete"
                        onclick="dismissProNotification();"
                    ></button>
                    It appears that you're not signed in. You'll need to
                    <a href="/pro" target="_self">signup for Pro</a> or become a
                    <a
                        href="https://coil.com/?ref=InfinitySearch2229"
                        target="_self"
                        >Coil member</a
                    >
                    to access our results.
                </div> -->
        </div>

        <div class="columns">
            <div id="id-side-bar" class="column is-4 sidebar_column" style="padding-top: 1.2rem; padding-right: 1.5rem; padding-left: 1.5rem">
                <div id="externals" class="">
                    <div v-for="(facetItems, key, index) in facets" :key="index" name="external_card" style="margin-bottom: 0px">
                        <facet-category v-bind:facetItems="facetItems" v-bind:filterName="key" @filter="onFilter"></facet-category>
                    </div>
                    <!-- <div class="card" name="external_card" style="margin-bottom: 0px">
                        <header class="card-header">
                            <p class="card-header-title" style="font-weight: normal; padding-right: 5px">
                                <a
                                    id="https://en.wikipedia.org/w/index.php?search="
                                    href="https://en.wikipedia.org/w/index.php?search=test"
                                    name="external_link_0"
                                    style="display: block"
                                    rel="noreferrer noopener"
                                    target="_self"
                                >
                                    <img src="/static/images/favicons/wikipedia.ico" name="external_icon_0'" class="external-icon" />
                                    <span hidden="" class="external-text" name="external_text_0" style="font-size: 0.95rem; display: inline"> Wikipedia Results </span>
                                </a>
                            </p>
                        </header>
                    </div>
                    <div class="card" name="external_card" style="margin-bottom: 0px">
                        <header class="card-header">
                            <p class="card-header-title" style="font-weight: normal; padding-right: 5px">
                                <a
                                    id="https://duckduckgo.com/?q="
                                    href="https://duckduckgo.com/?q=test"
                                    name="external_link_1"
                                    style="display: block"
                                    rel="noreferrer noopener"
                                    target="_self"
                                >
                                    <img src="/static/images/favicons/duckduckgo.ico" name="external_icon_1'" class="external-icon" />
                                    <span hidden="" class="external-text" name="external_text_1" style="font-size: 0.95rem; display: inline"> DuckDuckGo Results </span>
                                </a>
                            </p>
                            <span
                                class="clickableIcon"
                                onclick="removeExternalClickable(this)"
                                style="cursor: pointer; display: block; margin: auto; margin-right: 6px; min-width: 0.5em"
                            >
                                <img
                                    class="handle fa-ellipsis-v"
                                    src="/static/images/fa/ellipsis-v.svg"
                                    style="cursor: pointer; display: block; margin: auto; margin-right: 12px; min-width: 0.5em; width: 16px; height: 16px"
                                />
                            </span>
                        </header>
                    </div> -->
                </div>
            </div>

            <div class="col col-8 column is-8 results_column" style="padding-top: 1.2rem; padding-right: 1rem; padding-left: 1rem">
                <div class="column" v-if="activeFilterCategories && Object.keys(activeFilterCategories).length > 0">
                    <span class="active-filter-items" v-for="(values, key, index) in activeFilterCategories" :key="index">
                        <active-facet-category v-bind:filterItems="values" :categoryName="key" @clearFacetCategory="onClearFacetCategory"></active-facet-category>
                    </span>
                </div>
                <div class="results">
                    <!-- Results section -->
                    <vs-result v-bind:datasets="results"></vs-result>
                </div>
            </div>
        </div>

        <div class="container-fluid" style="padding-top: 3.8em">
            <div class="columns is-mobile partner-logos">
                <div class="column col-sm text-center">
                    <img src="@/assets/site/img/re3-data-logo-mono.jpg" alt="re3 data logo" />
                </div>
                <div class="column col-sm text-center mobile-space">
                    <img src="@/assets/site/img/geosphere-austria-logo.jpg" class="pb-3" alt="logo geosphere austria" />
                </div>
                <div class="column col-sm text-center">
                    <img src="@/assets/site/img/placeholder-logo.jpg" alt="logo placeholder" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import SearchViewComponent from "./search-view-component";
export default SearchViewComponent;
</script>

<style scoped></style>
