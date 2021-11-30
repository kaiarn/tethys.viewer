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
            <a class="navbar-item" href="http://www.geologie.ac.at/" target="_blank">
                <!-- <img src="./assets/images/TETHYS-Logo.svg" width="240px" height="86" alt="TETHYS Logo" /> -->
                <img src="./assets/images/TETHYS-Logo.svg" width="240" height="86" />
            </a>
            <a id="menu-icon" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="active ? 'is-active' : ''" @click="showMobilemenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navMenu" class="navbar-menu" :class="active ? 'is-active' : ''">
            <ul class="navbar-start" style="flex-grow: 1; justify-content: center">
                <li class="navbar-item">
                    <!-- <a class="navbar-link is-arrowless active" href="#">STARTSEITE</a> -->
                    <router-link class="navbar-link is-arrowless" to="/">STARTSEITE</router-link>
                </li>
                <li class="navbar-item">
                    <!-- <a class="navbar-link is-arrowless" href="#">SEARCH</a> -->
                    <router-link class="navbar-link is-arrowless" to="/search">SEARCH</router-link>
                </li>
                <li class="navbar-item">
                    <!-- <a class="navbar-link is-arrowless" href="#">SERVICES</a> -->
                    <router-link class="navbar-link is-arrowless" to="/services">SERVICES</router-link>
                </li>
                <li class="navbar-item">
                    <!-- <a class="navbar-link is-arrowless" href="#">INTRO</a> -->
                    <router-link class="navbar-link is-arrowless" to="/help">HELP</router-link>
                </li>
                <!-- <li class="navbar-item">
                    <a class="navbar-link is-arrowless" href="#">HELP</a>
                </li> -->
                <li class="navbar-item">
                    <!-- <a class="navbar-link is-arrowless" href="#">OAI</a> -->
                    <router-link class="navbar-link is-arrowless" to="/oai">OAI</router-link>
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

<style lang="scss" scoped>
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
</style>
