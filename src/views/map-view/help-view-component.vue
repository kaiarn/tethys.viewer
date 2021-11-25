<template>
    <div class="container">
        <div class="columns is-desktop help-items">
            <div class="column col-sm">
                <div class="card super-card card-equal-height">
                    <img class="card-img-top" src="@/assets/site/img/card-header1.jpg" alt="card header" />

                    <div class="card-body p-0">
                        <h5 class="card-title-custom">Tethys RDR</h5>
                    </div>
                    <div class="card-content">
                        <p class="card-text">
                            Tethys RDR ist ein Datenverlag der Geologischen Bundesanstalt (GBA), der ausschließlich an der GBA generierte geowissenschaftliche Forschungsdat en
                            publiziert. Die Datenpublikationen können sowohl in deutscher, als auch in englischer Sprache publiziert werden. Durch die Bereitstellung der
                            Datenpublikation zusammen mit Metadaten nach standardisierten Schemata werden die Publikationen auffindbar und zitierbar.
                        </p>
                    </div>
                    <div class="card-footer">
                        <p class="card-footer-item">
                            <a class="button is-primary custom-button">
                                <i class="fas fa-sign-in-alt"></i>
                                <strong>KONTAKT</strong>
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div class="column col-sm">
                <div class="card super-card card-equal-height">
                    <img class="card-img-top" src="@/assets/site/img/card-header2.jpg" alt="card header" />
                    <div class="card-body p-0">
                        <h5 class="card-title-custom">Voraussetzungen</h5>
                    </div>
                    <div class="card-content">
                        <p class="card-text">
                            GBA-Angehörigkeit oder in Kooperation mit der GBA gemeinsame Publikation der Daten. Im Besitz eines eigenen Zugangscodes zu sein bzw. um den Zugangscode
                            anzufragen (Kontakt).
                        </p>
                        <p class="card-text">Die Datenpublikationsrichtlinien gelesen, verstanden und akzeptiert zu haben.</p>
                        <p class="card-text">Die Datensätze vollständig und fachlich korrekt hochladen.</p>
                    </div>
                    <div class="card-footer">
                        <p class="card-footer-item">
                            <a class="button is-primary custom-button">
                                <i class="fas fa-sign-in-alt"></i>
                                <strong>KONTAKT</strong>
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div class="column col-sm">
                <div class="card super-card card-equal-height">
                    <img class="card-img-top" src="@/assets/site/img/card-header3.jpg" alt="card header" />
                    <div class="card-body p-0">
                        <h5 class="card-title-custom">DATEN UPLOAD</h5>
                    </div>
                    <div class="card-content">
                        <p class="card-text">
                            Wird eine Datenpublikation erwünscht, so kann der Verfasser der Publikation sich direkt bei Tethys RDR einloggen und den Publikationsablauf starten.
                        </p>
                        <p class="card-text">
                            Wurde noch kein <a href="" class="text-secondary">account</a> angelegt, steht das Tethys RDR-Team bereit, um die weiteren Schritte zu klären (Kontakt).
                        </p>
                    </div>
                    <div class="card-footer">
                        <p class="card-footer-item">
                            <a class="button is-primary custom-button">
                                <i class="fas fa-sign-in-alt"></i>
                                <strong>KONTAKT</strong>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import HelpViewComponent from "./help-view-component";
export default HelpViewComponent;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./help-view-component.scss";
</style>
