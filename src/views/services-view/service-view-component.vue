<template>
    <div class="container">
        <div>
            <div class="column is-full text-center">
                <h1>TETHYS SERVICES</h1>
                <p class="lead">Eine Übersicht unserer Dienstleistungen</p>
                <hr class="center-line" />
            </div>
            <div class="columns is-tablet work-items">
                <div class="column col-sm overlay-boxes">
                    <div class="card overlay work-back">
                        <img src="@/assets/site/img/box-1-hover.jpg" alt="Datenarchivierung" />
                        <div class="card-body box-1-hover">
                            <p class="text-white">
                                Tethys RDR publiziert und archiviert nach den FAIR Prinzipien* nachhaltig so wie sicher geowissenschaftliche Datensätze in
                                offenen, frei lesbaren Formaten. * FAIR data
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
                                Die Datensätze werden mit standardisierten Metadatenschemen publiziert und sind somit nicht nur auffindbar, wiederverwendbar und
                                auch maschinenlesbar, sondern können dadurch auch einfach zitiert werden.
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
                                Alle im Tethys RDR publizierten Datensätze werden auf technische sowie inhaltliche Vollständigkeit geprüft und werden bei Bedarf
                                auch einer fachlichen Begutachtung unterworfen. Ein klassischer Peer Review-Prozess ist in Vorbereitung.
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
</template>

<script lang="ts">
import ServiceViewComponent from "./service-view-component";
export default ServiceViewComponent;
</script>
