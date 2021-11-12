<template>
    <!-- <HelloWorld msg="Welcome to Your Vue.js plus TypeScript App" /> -->
    <div id="page_style" class="site-content page__style page__description" autocomplete="off">
        <!-- <div class="content column is-half is-offset-6" style="text-align: right">        
        <a class="button" href="/default" target="_self"><img class="icon-spacing" src="/static/images/fa/firefox.svg"
            style="width: 16px; height: 16px;"><img class="icon-spacing" src="/static/images/fa/chrome.svg"
            style="width: 16px; height: 16px;">
          <img class="icon-spacing" src="/static/images/fa/opera.svg" style="width: 16px; height: 16px;"> <img
            src="/static/images/fa/plus.svg" style="width: 16px; height: 16px;"></a>
        <a class="button" href="/account" target="_self"> <img src="/static/images/fa/user.svg"
            style="width: 16px; height: 16px;"> </a>
      </div>
      <div id="home_padding"></div>
      <div style="text-align: center;">
        <a href="/" id="logo_home" target="_self">
          <img id="logo_img_home" src="/static/images/is/logo_text_black.png" width="20%" style="min-width: 140px;">
        </a>
      </div> -->

        <vs-input @search-change="onSearch" title="searching solr datasets" placeholder="Enter your search term..." />

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
                <div class="resultheader">
                    Your search yielded
                    <strong>{{ numFound }}</strong> results:
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
            <div id="id-side-bar" class="column is-4 sidebar_column" style="padding-top: 1.2rem; padding-right: 1.5rem">
                <div id="externals" class="">
                    <div class="card" v-for="(facetItems, key, index) in facets" :key="index" name="external_card" style="margin-bottom: 0px">
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

            <div class="column is-8 results_column" style="padding-top: 1.2rem; padding-right: 0.5rem">
                <div class="results">
                    <!-- Results section -->
                    <vs-result v-bind:datasets="results"></vs-result>
                </div>
            </div>
        </div>
    </div>

    <!-- <vs-input
        @search="onSearch"
        title="searching solr datasets"
        placeholder="Enter your search term..."
    />
    <div v-if="results.length > 0" class="result-list-info">
        <div class="resultheader">
            Your search yielded
            <strong>{{ numFound }}</strong> results:
        </div>
    </div> -->
</template>

<script lang="ts">
import App from "./app";
export default App;
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
//   width: 100%;
//   height: 100%;
// }
#app {
    p,
    ol,
    ul,
    li,
    dl,
    textarea,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 5px;
    }
}
</style>
