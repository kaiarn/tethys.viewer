<template>
    <div class="container">
        <section class="section">
            <div class="column is-full text-left">
                <h1>Impressum</h1>
                <!-- <p class="lead">Want to keep updated or need further information?</p>
                <hr class="center-line" /> -->
            </div>
            <!-- <div class="column is-half contact-us-details" style="padding-top: 0; margin-top: 0"> -->
            <div class="column is-full text-left">
                <p class="lead">Für den Inhalt verantwortlich</p>
                <p>
                    <span>GeoSphere Austria</span><br />
                    <span>Neulinggasse 38, 1030 Wien</span><br />
                    <span>kontakt@geosphere.at</span><br />
                    <span>Telefon: +43-1-7125674</span><br />
                    <span>Fax: +43-1-7125674-56</span><br />
                </p>

                <p class="lead">Technische Umsetzung und Betreuung</p>
                <p>
                    <span>GeoSphere Austria</span><br />
                    <span>Hauptabteilung Informationsdienste</span><br />
                    <span>Neulinggasse 38, 1030 Wien</span><br />
                    <span>repository@geosphere.at</span><br />
                    <span>Bei technischen Problemen steht Ihnen das RDR-Team, erreichbar unter repository@geosphere.at, gerne zur Seite.</span>
                </p>

                <p class="lead">Hinweise und Haftungsausschluss</p>
                <p>Eine Haftung oder Garantie für Aktualität, Richtigkeit und Vollständigkeit der zur Verfügung gestellten Daten ist ausgeschlossen.</p>
                <p>
                    Dieser Hinweis gilt auch für alle anderen Webseiten, auf die durch Hyperlinks verwiesen wird. Die GeoSphere Austria ist für den Inhalt von
                    Webseiten, die mittels einer solchen Verbindung erreicht werden, nicht verantwortlich.
                </p>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import ImprintViewComponent from "./imprint-view-component";
export default ImprintViewComponent;
</script>

<style scoped lang="scss">
#app {
    p,
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
