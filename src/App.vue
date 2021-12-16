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
                    <router-link target="_blank" class="navbar-link is-arrowless" to="/oai">OAI</router-link>
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

    <footer class="container-fluid">
        <div class="columns">
            <div class="column col-sm">
                <div class="card mx-auto" style="width: 18rem">
                    <div class="card-body">
                        <h5 class="card-title">About TETHYS</h5>
                        <ul class="list-group list-group-flush">
                            <!-- <li class="list-group-item"><a href="#">OAI</a></li> -->
                            <li class="list-group-item"><router-link to="/oai">OAI</router-link></li>
                            <li class="list-group-item"><a href="https://www.geologie.ac.at/" target="_blank">About GBA</a></li>
                            <li class="list-group-item"><a href="https://www.geologie.ac.at/news/news" target="_blank">News</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="column col-sm">
                <div class="card mx-auto" style="width: 18rem">
                    <div class="card-body">
                        <h5 class="card-title">Tools and Support</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <!-- <a href="#"><i class="far fa-id-card"></i> Contact</a> -->
                                <router-link to="/contact"><i class="far fa-id-card"></i> Contact</router-link>
                            </li>
                            <li class="list-group-item">
                                <!-- <a href="#"><i class="fas fa-stamp"></i> Impressum</a> -->
                                <router-link to="/imprint"><i class="fas fa-stamp"></i> Imprint</router-link>
                            </li>
                            <li class="list-group-item">
                                <!-- <a href="#"><i class="fas fa-link"></i> Sitelinks</a> -->
                                <router-link to="/sitelinks"><i class="fas fa-link"></i> Sitelinks</router-link>
                            </li>
                            <li class="list-group-item">
                                <!-- <a href="#"><i class="far fa-file-alt"></i> Terms &amp; Conditions</a> -->
                                <router-link to="/terms-and-conditions"><i class="far fa-file-alt"></i> Terms &amp; Conditions</router-link>
                            </li>
                            <li class="list-group-item">
                                <a target="_blank" href="https://github.com/geolba/tethys"><i class="fab fa-github"></i> rdr bei GitHub</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="column col-sm">
                <div class="card mx-auto" style="width: 18rem">
                    <div class="card-body">
                        <h5 class="card-title">Connect with us</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <a target="_blank" href="https://www.geologie.ac.at/"><i class="fas fa-home pr-2"></i>GBA</a>
                            </li>
                            <li class="list-group-item">
                                <a href="#"><i class="fas fa-phone-alt pr-2"></i> +43-1-7125674</a>
                            </li>
                            <li class="list-group-item">
                                <a href="mailto:repository@geologie.ac.at"><i class="fas fa-envelope pr-2"></i> repository(at)geologie.ac.at </a>
                            </li>
                        </ul>
                        <img class="img-fluid pt-4" src="@/assets/site/img/geologische-bundesanstalt-logo.jpg" alt="Geologische Bundesanstalt logo" />
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <div class="container-fluid">
        <div class="copyright-notice">Copyright 2021 TETHYS RDR</div>
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
