<template>
    <!-- <HelloWorld msg="Welcome to Your Vue.js plus TypeScript App" /> -->

    <nav class="navbar navbar-light border-bottom" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" v-bind:href="app_url">
                <!-- <img src="./assets/images/TETHYS-Logo.svg" width="240px" height="86" alt="TETHYS Logo" /> -->
                <img src="./assets/images/TETHYS-Logo.svg" width="240" height="86" />
            </a>
            <a id="menu-icon" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" v-bind:class="active ? 'is-active' : ''" @click="showMobilemenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navMenu" class="navbar-menu" v-bind:class="active ? 'is-active' : ''">
            <ul class="navbar-start" style="flex-grow: 1; justify-content: center">
                <li class="navbar-item">
                    <a class="navbar-link is-arrowless active" v-bind:href="app_url">STARTSEITE</a>
                    <!-- <router-link class="navbar-link is-arrowless" to="/">STARTSEITE</router-link> -->
                </li>
                <li class="navbar-item">
                    <a class="navbar-link is-arrowless" v-bind:href="search_url">SEARCH</a>
                    <!-- <router-link class="navbar-link is-arrowless" to="/search">SEARCH</router-link> -->
                </li>
                <li class="navbar-item">
                    <a class="navbar-link is-arrowless" v-bind:href="service_url">SERVICES</a>
                    <!-- <router-link class="navbar-link is-arrowless" to="/services">SERVICES</router-link> -->
                </li>
                <li class="navbar-item">
                    <a class="navbar-link is-arrowless" v-bind:href="help_url">HELP</a>
                    <!-- <router-link class="navbar-link is-arrowless" to="/help">HELP</router-link> -->
                </li>
                <!-- <li class="navbar-item">
                    <router-link class="navbar-link is-arrowless" to="/map">MAP</router-link>
                </li> -->
                <!-- <li class="navbar-item">
                    <a class="navbar-link is-arrowless" href="#">HELP</a>
                </li> -->
                <li class="navbar-item">
                    <a class="navbar-link is-arrowless" v-bind:href="oai_url">OAI</a>
                    <!-- <router-link target="_blank" class="navbar-link is-arrowless" to="/oai">OAI</router-link> -->
                </li>
                <!-- 
                <a href="#" class="custom-btn"><i class="fas fa-sign-in-alt"></i>SIGN IN</a> -->
            </ul>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a v-bind:href="portal" class="button is-primary custom-button">
                            <i class="fas fa-sign-in-alt"></i>
                            <!-- <fa :icon="['fas', 'phone']" class="fas fa-sign-in-alt" /> -->
                            <!-- </span> -->
                            <strong>Sign in</strong>
                        </a>
                        <!-- <a class="button is-light"> Log in </a> -->
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- <home-view-component></home-view-component> -->
    <router-view></router-view>

    <div class="container-fluid">
        <div class="copyright-notice">Copyright 2022 TETHYS RDR</div>
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
import App2 from "./app2";
export default App2;
</script>

<style scoped lang="scss">
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
    // li,
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

// footer:
footer {
    background-image: url(./assets/site/img/footer-bg.jpg);

    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    padding-top: 26em;
    padding-bottom: 3.8em;
}

footer .card {
    background: transparent;
    border: none;
    position: relative;
    margin-top: 2em;
    box-shadow: none;
}

footer .card-title {
    // font-family: Verdana;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
}

.list-group-flush {
    border-radius: 0;
}
.list-group {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: 0.25rem;
}
.list-group {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
}
.list-group-flush > .list-group-item {
    border-width: 0 0 1px;
}

.list-group-item:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
}
.list-group-flush .list-group-item {
    border-right: 0;
    border-left: 0;
    border-radius: 0;
}
footer .list-group-item a {
    color: #fff;
    text-decoration: none;
}

.copyright-notice {
    text-align: center;
    color: #fff;
    background-color: #384d6e;
    padding: 0.3em 0;
}
</style>
