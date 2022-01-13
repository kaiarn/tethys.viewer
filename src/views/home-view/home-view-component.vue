<template>
    <div id="page_style" class="site-content page__style page__description" autocomplete="off">
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
        <!-- class="columns help u-full-width featured-bg-image"> -->
        <section data-sr id="help" class="header-image align-items-center h-100">
            <!-- <div class="column is-two-thirds-tablet is-half-desktop is-one-third-widescreen mx-auto">
                <div class="search-box mx-auto">
                    <div class="field has-addons main-search-from-bg">
                        <div class="control is-expanded">
                            <input id="search_query" class="input is-medium" type="text" name="q" autocomplete="off" v-model="display" />
                        </div>
                        <div class="control">
                            <button class="button input is-medium search-button-icon" @click="search()">
                                <i class="fas fa-search text-white"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div> -->
            <vs-input v-on:search-change="onSearch" v-bind:placeholder="'Enter your search term...'"></vs-input>
        </section>

        <div class="container">
            <section class="section">
                <div class="column is-full text-center">
                    <h1>ÜBER TETHYS</h1>
                    <p class="lead">Was sind unsere Schwerpunkte</p>
                    <hr class="center-line" />
                </div>
                <div class="column is-full text-left">
                    <p>
                        TETHYS RDR ist ein publizierendes Forschungsdatenrepositorium der Geologischen Bundesanstalt (GBA), das an der GBA generierte geowissenschaftliche
                        Forschungsdaten veröffentlicht.
                    </p>
                    <p>
                        Zum derzeitigen Stand wird TETHYS RDR in deutscher Sprache bereitgestellt. Die englische Version befindet sich in Vorbereitung und wird sukzessive ebenfalls
                        zur Verfügung gestellt. Die Forschungsdatenpublikationen und die dazugehörigen Metadaten können in Deutsch und in Englisch veröffentlicht werden. Tethys RDR
                        hat den Anspruch, publizierte Datensätze unverändert, langfristig und nachhaltig bereitzustellen. Dadurch ist Tethys ein Forschungsdatenrepositorium, das
                        ein permanentes Referenzieren ermöglicht und somit die darin publizierten Datensätze zitierfähig macht.
                    </p>
                    <p>
                        Der Name Tethys kommt ursprünglich aus der griechischen Mythologie und benennt eine Titanin und Meeresgöttin. Ende des 19. Jahrhunderts entdeckte Eduard
                        Suess (1831–1914), ein bedeutender österreichischer Geologe, den mesozoischen Ozean und benannte ihn nach dieser Tethys.
                    </p>
                </div>
            </section>

            <div>
                <div class="column is-full text-center">
                    <h1>TETHYS SERVICES</h1>
                    <p class="lead">Eine Übersicht unserer Dienstleistungen</p>
                    <hr class="center-line" />
                </div>
                <div class="columns is-desktop work-items">
                    <div class="column col-sm overlay-boxes">
                        <div class="card overlay work-back">
                            <img src="@/assets/site/img/box-1-hover.jpg" alt="Datenarchivierung" />
                            <div class="card-body box-1-hover">
                                <p class="text-white">
                                    Tethys RDR publiziert und archiviert nach den FAIR Prinzipien* nachhaltig so wie sicher geowissenschaftliche Datensätze in offenen, frei
                                    lesbaren Formaten. * FAIR data
                                </p>
                            </div>
                        </div>
                        <div class="card green work-front">
                            <img src="@/assets/site/img/box-1.jpg" alt="Datenarchivierung" />
                            <div class="card-body box-1">
                                <div class="custom-heading">DATENARCHIVIERUNG</div>
                            </div>
                        </div>
                    </div>

                    <div class="column col-sm overlay-boxes">
                        <div class="card overlay work-back">
                            <img src="@/assets/site/img/box-2-hover.jpg" alt="DATENPUBLIKATION" />
                            <div class="card-body box-1-hover">
                                <p class="text-white">
                                    Die Datensätze werden mit standardisierten Metadatenschemen publiziert und sind somit nicht nur auffindbar, wiederverwendbar und auch
                                    maschinenlesbar, sondern können dadurch auch einfach zitiert werden.
                                </p>
                            </div>
                        </div>
                        <div class="card green work-front">
                            <img src="@/assets/site/img/box-2.jpg" alt="Datenpublikation" />
                            <div class="card-body box-2">
                                <div class="custom-heading">DATENPUBLIKATION</div>
                            </div>
                        </div>
                    </div>

                    <div class="column col-sm overlay-boxes">
                        <div class="card overlay work-back">
                            <img src="@/assets/site/img/box-3-hover.jpg" alt="BEGUTACHTUNG" />
                            <div class="card-body box-1-hover">
                                <p class="text-white">
                                    Alle im Tethys RDR publizierten Datensätze werden auf technische sowie inhaltliche Vollständigkeit geprüft und werden bei Bedarf auch einer
                                    fachlichen Begutachtung unterworfen. Ein klassischer Peer Review-Prozess ist in Vorbereitung.
                                </p>
                            </div>
                        </div>
                        <div class="card green work-front">
                            <img src="@/assets/site/img/box-3.jpg" alt="BEGUTACHTUNG" />
                            <div class="card-body box-3">
                                <div class="custom-heading">BEGUTACHTUNG</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="clearfix mt-3"></div>

        <div class="container-fluid page-breaker my-5">
            <div class="container">
                <div class="column col-sm text-center my-5">
                    <h1 class="text-white">HABEN SIE FRAGEN?</h1>

                    <p class="text-white text center p-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                        gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>

                    <div class="mx-auto my-5" style="width: 170px">
                        <!-- <router-link to="/contact"><i class="far fa-id-card"></i> Contact</router-link> -->
                        <a href="/contact" class="button is-primary custom-button">
                            <i class="fas fa-sign-in-alt"></i>
                            <strong>KONTAKT</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="columns is-mobile partner-logos">
                <div class="column col-sm text-center">
                    <a target="_blank" href="https://www.re3data.org/repository/r3d100013400"><img src="@/assets/site/img/re3-data-logo-mono.jpg" alt="re3 data logo" /></a>
                </div>
                <div class="column col-sm text-center">
                    <a target="_blank" href="http://www.geologie.ac.at/">
                        <!-- <img src="@/assets/site/img/geosphere-austria-logo.jpg" class="pb-3" alt="logo geosphere austria" /> -->
                        <img src="@/assets/site/img/gbaLogoRGB_web.png" alt="Geologische Bundesanstalt logo" />
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
import HomeViewComponent from "./home-view-component";
export default HomeViewComponent;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./home-view-component.scss";
</style>
