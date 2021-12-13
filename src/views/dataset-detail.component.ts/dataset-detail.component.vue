<template v-if="datasetId">
    <!-- <div class="container">
        <section class="section" v-if="dataset != undefined">
            <h2 v-if="dataset.hasOwnProperty('titles')">{{ dataset.titles[0].value }} details!</h2>
            <div v-if="dataset" class="dataset__blog-meta">published: {{ getHumanDate(dataset.server_date_published) }}</div>
            <p v-if="dataset.hasOwnProperty('abstracts')" class="dataset__abstract">{{ dataset.abstracts[0].value }}</p>
            <div><label>id: </label>{{ dataset.id }}</div>
            <button v-on:click="goBack">Back</button>
        </section>
    </div> -->
    <section class="section" v-if="dataset">
        <div class="container">
            <!-- <span class="is-size-5"> Basic Table </span>
            <br /> -->

            <div class="columns">
                <div class="column is-8 results_column" style="padding-top: 1.2rem; padding-right: 1rem; padding-left: 1rem">
                    <div class="card">
                        <div class="column dataset__blog-meta">published: {{ getHumanDate(dataset.server_date_published) }}</div>
                    </div>

                    <div class="card record-elem">
                        <div class="columns" v-if="dataset.hasOwnProperty('titles')">
                            <div class="column is-3-desktop is-4-tablet">Title/<br />title:</div>
                            <div class="column is-9-desktop is-8-tablet">{{ dataset.titles[0].value }}</div>
                        </div>
                        <div class="columns" v-if="dataset.hasOwnProperty('abstracts')">
                            <div class="column is-3-desktop is-4-tablet">
                                Zusammenfassung/<br />
                                abstract:
                            </div>
                            <div class="column is-9-desktop is-8-tablet">
                                <p>{{ dataset.MainAbstract.value }}</p>
                                <br />
                                <p v-if="dataset.hasTranslatedAbstract()">
                                    {{ dataset.TranslatedAbtract.value }}
                                </p>
                            </div>
                        </div>
                        <div class="columns" v-if="dataset.hasOwnProperty('abstracts')">
                            <div class="column is-3-desktop is-4-tablet">Serieninformation/<br />series information:</div>
                            <div class="column is-9-desktop is-8-tablet" v-if="dataset.hasSeriesInformationAbstract()">
                                {{ dataset.SeriesInformationAbstract.value }}
                            </div>
                            <div class="column is-9-desktop is-8-tablet" v-else>-</div>
                        </div>
                        <div class="columns" v-if="dataset.hasOwnProperty('abstracts')">
                            <div class="column is-3-desktop is-4-tablet">Methodik/<br />method:</div>
                            <div class="column is-9-desktop is-8-tablet" v-if="dataset.hasMethodsAbtract()">
                                {{ dataset.MethodsAbtract.value }}
                            </div>
                            <div class="column is-9-desktop is-8-tablet" v-else>-</div>
                        </div>
                        <div class="columns">
                            <div class="column is-3-desktop is-4-tablet">Technische Metadaten/<br />technical metadata:</div>
                            <div class="column is-9-desktop is-8-tablet">
                                <p>Persistenter Identifikator: {{ dataset.url }}</p>
                                <p>Status: {{ dataset.server_state }}</p>
                                <p v-if="dataset.hasOwnProperty('user')">Eingestellt von: {{ dataset.user.login }}</p>
                                <p>Herausgeber: {{ dataset.creating_corporation }}</p>
                                <p>Publisher: {{ dataset.publisher_name }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="id-side-bar" class="column is-4 sidebar_column" style="padding-top: 1.2rem; padding-right: 1.5rem; padding-left: 1.5rem">
                    <div class="card">
                        <div class="column">
                            <h2>Details</h2>
                        </div>
                    </div>
                    <div class="card">
                        <div class="column">
                            <h2 v-if="dataset.hasOwnProperty('contributors')">{{ dataset.contributors.map((u) => u.full_name).join(", ") }}</h2>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <table v-if="dataset != undefined" class="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Abstract</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h2 v-if="dataset.hasOwnProperty('titles')">{{ dataset.titles[0].value }} details!</h2>
                        </td>
                        <td>
                            <p v-if="dataset.hasOwnProperty('abstracts')" class="dataset__abstract">{{ dataset.abstracts[0].value }}</p>
                        </td>
                        <td>India</td>
                    </tr>
                </tbody>
            </table> -->
        </div>

        <div class="container-fluid" style="padding-top: 3.8em">
            <div class="columns is-mobile partner-logos">
                <div class="column col-sm text-center">
                    <img src="@/assets/site/img/re3-data-logo-mono.jpg" alt="re3 data logo" />
                </div>
                <div class="column col-sm text-center mobile-space">
                    <img src="@/assets/site/img/geosphere-austria-logo.jpg" class="pb-3" alt="logo geosphere austria" />
                </div>
                <div class="column col-sm text-center">
                    <img src="@/assets/site/img/placeholder-logo.jpg" alt="logo placeholder" />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import DatasetDetailComponent from "./dataset-detail.component";
export default DatasetDetailComponent;
</script>

<style scoped lang="scss">
.section {
    font-size: 0.8rem;
}
label {
    display: inline-block;
    width: 3em;
    margin: 0.5em 0;
    color: #607d8b;
    font-weight: bold;
}
input {
    height: 2em;
    font-size: 1em;
    padding-left: 0.4em;
}
button {
    margin-top: 20px;
    font-family: Arial;
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    cursor: hand;
}
button:hover {
    background-color: #cfd8dc;
}
button:disabled {
    background-color: #eee;
    color: #ccc;
    cursor: auto;
}
</style>
