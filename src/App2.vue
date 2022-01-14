<template>
    <!-- <HelloWorld msg="Welcome to Your Vue.js plus TypeScript App" /> -->

    <!-- <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous"
    /> -->

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
