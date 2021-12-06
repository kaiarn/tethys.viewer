<template>
    <div class="container">
        <div class="column is-full text-center">
            <p class="lead">OAI</p>
            <hr class="center-line" />
        </div>
        <div class="column is-full text-left">
            <p class="paragraph-justify">
                Die Open Archives Initiative (OAI; http://www.openarchives.org) dient der Entwicklung und Förderung von Interoperabilitätsstandards für die Auffindbarkeit von
                elektronischen Publikationen im Internet. Das dazu entwickelte Protokoll OAI-PMH (OAI Protocol for Metadata Harvesting) wird zum globalen „Ernten“ der durch
                Metadaten beschriebenen Publikationen im Internet herangezogen. Eine Liste aller OAI-Provider wird unter folgender Adresse zur Verfügung gestellt:
                <a href="https://www.openarchives.org/Register/BrowseSites" target="_blank">www.openarchives.org/Register/BrowseSites</a>
            </p>
        </div>
        <div class="column is-full text-center">
            <p class="lead">OAI-PMH</p>
            <hr class="center-line" />
        </div>
        <div class="column is-full text-left">
            <p class="paragraph-justify">
                Die OAI-PMH Basis URL für das Research Data Repository der Geologischen Bundesanstalt lautet
                <a href="https://tethys.at/oai">https://tethys.at/oai</a> <br />
                Derzeit unterstützt das OAI-Service den Metadatenstandard DC (OAI-PMH Dublin Core) und eingeschränkt den Standard DataCite (aktuell in dieser Testkonfiguration noch
                ohne Vergabe einer im Schema verpflichtenden DOI).
            </p>
            <ul class="quicklinks">
                <li><a href="?verb=Identify">Identify</a> |</li>
                <li><a href="?verb=ListRecords&amp;metadataPrefix=oai_dc">ListRecords</a> |</li>
                <li><a href="?verb=ListSets">ListSets</a> |</li>
                <li><a href="?verb=ListMetadataFormats">ListMetadataFormats</a> |</li>
                <li><a href="?verb=ListIdentifiers&amp;metadataPrefix=oai_dc">ListIdentifiers</a></li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import OaiViewComponent from "./oai-view-component";
export default OaiViewComponent;
</script>

<style scoped lange="scss">
ul.quicklinks {
    margin-top: 2px;
    padding: 4px;
    text-align: center;
    border-bottom: 2px solid #ccc;
    border-top: 2px solid #ccc;
    clear: left;
}
pre,
blockquote,
dl,
figure,
table,
p,
ul,
ol,
form {
    margin-bottom: 2.5rem;
}
ul.quicklinks li {
    /* font-size: 90%; */
    display: inline;
    list-style: none;
    font-family: sans-serif;
}
li {
    margin-bottom: 1rem;
}
</style>
