<template>
    <div id="page_style" class="rows site-content page__style page__description" autocomplete="off">
        <div class="container-fluid banner mz-5">
            <vs-input v-bind:propDisplay="searchTerm" v-bind:placeholder="'Enter your search term...'" @search-change="onSearch"></vs-input>
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
                <div v-if="hasSearchTerm()" class="resultheader">
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
                    <div v-for="(facetItems, key, index) in facets" v-bind:key="index" name="external_card" style="margin-bottom: 0px">
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
                <div v-if="activeFilterCategories && Object.keys(activeFilterCategories).length > 0" class="column">
                    <span v-for="(values, key, index) in activeFilterCategories" v-bind:key="index" class="active-filter-items">
                        <active-facet-category
                            v-bind:filterItems="values"
                            v-bind:categoryName="key"
                            @clear-facet-category="onClearFacetCategory"
                        ></active-facet-category>
                    </span>
                </div>
                <div class="results">
                    <PaginationComponent class="mb-5" v-bind:data="pagination" @menu-click="onMenuClick"></PaginationComponent>
                    <!-- Results section -->
                    <vs-result v-bind:datasets="results"></vs-result>
                    <PaginationComponent class="mt-5" v-bind:data="pagination" @menu-click="onMenuClick"></PaginationComponent>
                </div>
            </div>

            <!-- <PaginationComponent v-bind:data="pagination"></PaginationComponent> -->
        </div>

        <div class="container-fluid" style="padding-top: 3.8em">
            <div class="columns is-mobile partner-logos">
                <div class="column col-sm text-center">
                    <a target="_blank" href="https://www.re3data.org/repository/r3d100013400"
                        ><img src="@/assets/site/img/re3-data-logo-mono.jpg" alt="re3 data logo"
                    /></a>
                </div>
                <div class="column col-sm text-center">
                    <a target="_blank" href="http://www.geosphere.at/">
                        <img src="@/assets/site/img/geosphere-austria-logo.jpg" alt="logo geosphere austria" />
                        <!-- <img src="@/assets/site/img/gbaLogoRGB_web.png" alt="GeoSphere Austria logo" /> -->
                    </a>
                </div>
                <div class="column col-sm text-center">
                    <a target="_blank" href="https://www.base-search.net/Search/Results?q=coll:fttethysrdr&refid=dctablede">
                        <img src="@/assets/site/img/base-logo.gif" alt="logo base" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import SearchViewComponent from "./search-view-component";
export default SearchViewComponent;
// import tailwind ss
import "@/index.css";
</script>

<style scoped></style>
