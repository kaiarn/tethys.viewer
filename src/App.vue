<template>
    <!-- <HelloWorld msg="Welcome to Your Vue.js plus TypeScript App" /> -->

    <!-- <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous"
    /> -->
    <nav class="navbar navbar-light border-bottom" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="#">
                <!-- <img src="./assets/images/TETHYS-Logo.svg" width="240px" height="86" alt="TETHYS Logo" /> -->
                <img src="./assets/images/TETHYS-Logo.svg" width="240" height="86" />
            </a>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navMenu" class="navbar-menu">
            <ul class="navbar-start" style="flex-grow: 1; justify-content: center">
                <li class="navbar-item">
                    <a class="navbar-link is-arrowless active" href="#">STARTSEITE</a>
                </li>
                <li class="navbar-item">
                    <a class="navbar-link is-arrowless" href="#">INTRO</a>
                </li>
                <li class="navbar-item">
                    <a class="navbar-link is-arrowless" href="#">SEARCH</a>
                </li>
                <li class="navbar-item">
                    <a class="navbar-link is-arrowless" href="#">SERVICES</a>
                </li>
                <li class="navbar-item">
                    <a class="navbar-link is-arrowless" href="#">HELP</a>
                </li>
                <li class="navbar-item">
                    <a class="navbar-link is-arrowless" href="#">OAI</a>
                </li>
                <!-- 
                <a href="#" class="custom-btn"><i class="fas fa-sign-in-alt"></i>SIGN IN</a> -->
            </ul>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary custom-button">
                            <!-- <span class="icon is-small"> -->
                            <!-- <i class="fas fa-sign-in-alt"></i> -->
                            <fa :icon="['fas', 'phone']" class="fas fa-sign-in-alt" />
                            <!-- </span> -->
                            <strong>Sign in</strong>
                        </a>
                        <!-- <a class="button is-light"> Log in </a> -->
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <div id="page_style" class="rows site-content page__style page__description" autocomplete="off">
        <!-- <div class="col-6 offset-6 content column is-half is-offset-6" style="text-align: right">
            <a class="button" href="/test" target="_self">
                <img class="icon-spacing" src="./assets/fa/firefox.svg" style="width: 16px; height: 16px" />
                <img class="icon-spacing" src="./assets/fa/chrome.svg" style="width: 16px; height: 16px" />
                <img class="icon-spacing" src="./assets/fa/opera.svg" style="width: 16px; height: 16px" />
                <img src="./assets/fa/plus.svg" style="width: 16px; height: 16px" />
            </a>
            <a class="button" href="/test" target="_self">
                <img src="./assets/fa/user.svg" style="width: 16px; height: 16px" />
            </a>
        </div> -->

        <!-- <div class="column" style="text-align: center">
            <a href="/test" id="logo_home" target="_self">
                <img id="logo_img_home" src="./assets/images/tethys-icon-mono.png" width="240px" style="min-width: 140px" />
            </a>
        </div> -->

        <!-- <div class="column">
            <div class="col text-center py-3">
                <h1>Tethys Research Data Repository</h1>
                <p class="lead">Data Publisher for Geoscience Austria</p>
                <hr class="center-line" />
            </div>
        </div> -->
        <div class="column">
            <div class="col text-center py-3">
                <h1>Tethys Research Data Repository</h1>
                <p class="lead">Data Publisher for Geoscience Austria</p>
                <hr class="center-line" />
            </div>
        </div>

        <!-- <div class="column header-image align-items-center h-100">
            <div class="col mt-3 mx-auto">
                <div class="search-box mx-auto">
                    <form class="my-2 my-lg-0 main-search-from-bg d-flex d-row">
                        <input class="form-control mr-sm-2 border-0" type="text" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-secondary m-0" type="submit"><i class="fas fa-search text-white"></i></button>
                    </form>
                </div>
            </div>
        </div> -->
        <!-- <figure class="image is-128x128">
            <img src="https://bulma.io/images/placeholders/256x256.png" />
        </figure> -->
        <section data-sr id="help" class="help u-full-width featured-bg-image"></section>

        <!-- <div class="columns">
            <div class="column text-center">
                <h1>ÜBER TETHYS</h1>
                <p class="lead">Was sind unsere Schwerpunkte</p>
                <hr class="center-line" />
            </div>
        </div> -->
        <section class="section">
            <div class="column is-full text-center">
                <h1>ÜBER TETHYS</h1>
                <p class="lead">Was sind unsere Schwerpunkte</p>
                <hr class="center-line" />
            </div>
            <div class="column is-full text-left">
                <p>
                    TETHYS RDR ist ein publizierendes Forschungsdatenrepositorium der Geologischen Bundesanstalt (GBA), das an der GBA generierte geowisse nschaftliche
                    Forschungsdaten veröffentlicht.
                </p>
                <p>
                    Zum derzeitigen Stand wird TETHYS RDR in deutscher Sprache bereitgestellt. Die englische Version befindet sich in Vorbereitung und wird sukzessive ebenfalls zur
                    Verfügung gestellt. Die Forschungsdatenpublikationen und die dazugehörigen Metadaten können in Deutsch und in Englisch veröffentlicht werden. Tethys RDR hat den
                    Anspruch, publizierte Datensätze unverändert, langfristig und nachhaltig bereitzustellen. Dadurch ist Tethys ein Forschungsdatenrepositorium, das ein
                    permanentes Referenzieren ermöglicht und somit die darin publizierten Datensätze zitierfähig macht.
                </p>
                <p>
                    Der Name Tethys kommt ursprünglich aus der griechischen Mythologie und benennt eine Titanin und Meeresgöttin. Ende des 19. Jahrhunderts entdeckte Eduard Suess
                    (1831–1914), ein bedeutender österreichischer Geologe, den mesozoischen Ozean und benannte ihn nach dieser Tethys.
                </p>
            </div>
        </section>

        <vs-input v-on:search-change="onSearch" v-bind:placeholder="'Enter your search term...'"></vs-input>

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

            <div class="col col-8 column is-8 results_column" style="padding-top: 1.2rem; padding-right: 0.5rem">
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
        margin-top: 1.5rem;
    }
}
</style>
