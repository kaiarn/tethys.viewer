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
    <div class="container-fluid banner mz-5">
        <!-- <div class="column is-two-thirds-tablet is-half-desktop is-one-third-widescreen mx-auto">
            <div class="search-box mx-auto">
                <div class="field has-addons main-search-from-bg">
                    <div class="control is-expanded">
                        <input
                            v-on:input="searchChanged"
                            id="search_query"
                            class="input is-medium"
                            type="text"
                            name="q"
                            autocomplete="off"
                            v-model="display"
                            v-bind:placeholder="placeholder"
                            v-on:keydown.down="onArrowDown"
                            v-on:keydown.up="onArrowUp"
                            v-on:keydown.enter="onEnter"
                            @keydown.tab="close"
                            v-on:focus="focus"
                        />                      
                    </div>
                    <div class="control">
                        <button class="button input is-medium search-button-icon" @click="search()">
                            <i class="fas fa-search text-white"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- <simple-search-component></simple-search-component> -->
        <vs-input v-bind:placeholder="'Enter your search term...'" @search-change="onSearch"></vs-input>
    </div>
    <section v-if="loaded" class="section">
        <div class="container">
            <!-- <span class="is-size-5"> Basic Table </span>
            <br /> -->

            <div class="columns">
                <div class="column is-8 results_column" style="padding-top: 1.2rem; padding-right: 1rem; padding-left: 1rem">
                    <div class="card">
                        <div class="column dataset__blog-meta">
                            <h2 class="label uppercase">published: {{ getPublishedDate(dataset.server_date_published) }}</h2>
                        </div>
                    </div>
                    <div class="card">
                        <div class="column">
                            <label class="label">
                                {{ getCitation() }}
                                <a v-if="dataset.identifier" target="_blank" class="link-label" v-bind:href="'https://doi.org/' + dataset.identifier.value"
                                    >({{ "https://doi.org/" + dataset.identifier.value }})</a
                                >
                            </label>
                        </div>

                        <div v-for="reference in dataset.references" v-bind:key="reference.id" class="columns">
                            <div class="column is-3-desktop is-4-tablet label">{{ reference.relation }}</div>
                            <div class="column is-9-desktop is-8-tablet">
                                {{ reference.type }}:
                                <a v-if="reference.type === 'DOI'" target="_blank" class="link-label" v-bind:href="reference.value">
                                    {{ reference.value }}
                                </a>
                            </div>
                        </div>
                        <div v-for="reference in dataset.referenced_by" v-bind:key="reference.id" class="columns">
                            <div class="column is-3-desktop is-4-tablet label">has newer version:</div>
                            <div class="column is-9-desktop is-8-tablet">
                                <!-- {{ "https://doi.org/" + reference.value }} -->
                                {{ reference.type }}:
                                <a
                                    v-if="reference.type === 'DOI'"
                                    target="_blank"
                                    class="link-label"
                                    v-bind:href="'https://doi.org/' + reference.dataset.identifier.value"
                                >
                                    {{ "https://doi.org/" + reference.dataset.identifier.value }}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="card record-elem">
                        <div v-if="dataset.hasOwnProperty('titles')" class="columns">
                            <div class="column is-3-desktop is-4-tablet label">Title/<br />title:</div>
                            <!-- <div class="column is-9-desktop is-8-tablet">{{ dataset.titles[0].value }}</div> -->
                            <div class="column is-9-desktop is-8-tablet">
                                <p>{{ dataset.MainTitle?.value }}</p>
                                <br />
                                <p v-if="dataset.hasTranslatedTitle()">
                                    {{ dataset.TranslatedTitle?.value }}
                                </p>
                            </div>
                        </div>
                        <div v-if="dataset.hasOwnProperty('abstracts')" class="columns">
                            <div class="column is-3-desktop is-4-tablet label">
                                Zusammenfassung/<br />
                                abstract:
                            </div>
                            <div class="column is-9-desktop is-8-tablet">
                                <p>{{ dataset.MainAbstract?.value }}</p>
                                <br />
                                <p v-if="dataset.hasTranslatedAbstract()">
                                    {{ dataset.TranslatedAbstract?.value }}
                                </p>
                            </div>
                        </div>
                        <div v-if="dataset.hasOwnProperty('abstracts')" class="columns">
                            <div class="column is-3-desktop is-4-tablet label">Serieninformation/<br />series information:</div>
                            <div v-if="dataset.hasSeriesInformationAbstract()" class="column is-9-desktop is-8-tablet">
                                <p>{{ dataset.SeriesInformationAbstract?.value }}</p>
                                <br />
                                <p v-if="dataset.hasTranslatedSeriesInformationAbstract()">
                                    {{ dataset.TranslatedSeriesInformationAbstract?.value }}
                                </p>
                            </div>
                            <div v-else class="column is-9-desktop is-8-tablet">-</div>
                        </div>
                        <div v-if="dataset.hasOwnProperty('abstracts')" class="columns">
                            <div class="column is-3-desktop is-4-tablet label">Methodik/<br />method:</div>
                            <div v-if="dataset.hasMethodsAbstract()" class="column is-9-desktop is-8-tablet">
                                {{ dataset.MethodsAbstract?.value }}
                            </div>
                            <div v-else class="column is-9-desktop is-8-tablet">-</div>
                        </div>

                        <div class="columns">
                            <div class="column is-3-desktop is-4-tablet label">Downloads/<br />downloads:</div>
                            <div v-if="dataset.files.length > 0" class="column is-9-desktop is-8-tablet">
                                <table v-if="dataset.hasEmbargoPassed()" id="items" class="table is-bordered is-striped">
                                    <thead>
                                        <tr>
                                            <th class="table-header">Path Name</th>
                                            <th class="table-header">File Ext.</th>
                                            <th class="table-header">File Size</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="file in dataset.files" v-bind:key="file.id">
                                            <td>
                                                <a class="link-label" target="_blank" v-bind:href="portal + file.id"> {{ file.label }} </a>
                                                <br />
                                                <span>md5: {{ file.hashvalues.find((e) => e.type === "md5")?.value }}</span>
                                            </td>
                                            <td>
                                                <span>{{ getExtension(file.path_name) }}</span>
                                            </td>
                                            <td>
                                                <span>{{ formatSize(file.file_size) }}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <span v-else>Datensatz hat noch ein gültiges Embargo-Datum.</span>
                            </div>
                        </div>

                        <div class="columns">
                            <div class="column is-3-desktop is-4-tablet label">Technische Metadaten/<br />technical metadata:</div>
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

                <div id="id-side-bar" class="column is-4 sidebar_column" style="padding-top: 1.2rem; padding-right: 1rem; padding-left: 1rem">
                    <div class="card">
                        <div class="column">
                            <h2 class="label uppercase">Details</h2>
                            <!-- <data-metrics-badge doi="10.7272/q6g15xs4" display="regular"></data-metrics-badge> -->
                            <!-- <data-metrics-badge doi="10.24341/tethys.209" display="small" v-bind:data-input="post"></data-metrics-badge> -->
                            <!-- <data-metrics-badge v-bind:doi="dataset.identifier.value" display="small"></data-metrics-badge> -->
                        </div>
                    </div>
                    <div class="card">
                        <div class="column">
                            <h3 class="label uppercase">Beitragende/Contributor</h3>
                            <p v-if="dataset.hasContributors()">
                                {{ dataset.contributors.map((u) => u.full_name).join(", ") }}
                            </p>
                            <p v-else>-</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="column">
                            <h3 class="label uppercase">Schlüsselwörter/Keywords</h3>
                            <p v-if="dataset.hasOwnProperty('subjects')">
                                {{ dataset.subjects.map((u) => u.value).join(", ") }}
                            </p>
                            <p v-else>-</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="column">
                            <h3 class="label uppercase">Erstellungsjahr/Year</h3>
                            <p>
                                {{ getYear(dataset.server_date_published) }}
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="column">
                            <h3 class="label uppercase">Abdeckung/Coverage</h3>
                            <p style="white-space: pre-wrap">
                                {{ dataset.Coverage }}
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="column">
                            <h3 class="label uppercase">Sprache/Language</h3>
                            <p>
                                {{ dataset.language }}
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="column">
                            <h3 class="label uppercase">Objekttyp/Object Type</h3>
                            <p>
                                <span><i class="fas fa-file"></i> {{ dataset.type }}</span>
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="column">
                            <h3 class="label uppercase">Lizenz/License</h3>
                            <p v-if="dataset.hasLicenses()">
                                <label v-for="license in dataset.licenses" v-bind:key="license.id">
                                    <span class="normal label">
                                        {{ license.name }}
                                    </span>
                                    <span v-if="openAccessLicences.includes(license.name)" class="normal label uppercase"
                                        ><i class="fas fa-lock-open"></i> Open Access</span
                                    >
                                </label>
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="column">
                            <h3 class="label uppercase">Projekt/Project</h3>
                            <p v-if="dataset.project != null">
                                <span>{{ dataset.project.label }}</span>
                            </p>
                            <p v-else>-</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="column">
                            <h3 class="label uppercase">Referenzen/References</h3>
                            <ul v-if="dataset.references.length > 0">
                                <li v-for="(reference, i) in dataset.references" v-bind:key="reference.id">
                                    <a
                                        v-if="reference.type == 'DOI' || reference.type == 'URL'"
                                        target="_blank"
                                        class="link-label"
                                        v-bind:href="reference.value"
                                    >
                                        {{ `${reference.relation} (${reference.type}): ${reference.label}` }}
                                    </a>
                                    <span v-else class="normal label">
                                        {{ `${reference.relation} (${reference.type}): ${reference.value}` }}
                                    </span>
                                    <span v-if="dataset.references.length > 0 && i < dataset.references.length - 1" class="normal label">--</span>
                                    <!-- <span v-if="openAccessLicences.includes(license.name)" class="normal label uppercase"
                                        ><i class="fas fa-lock-open"></i> Open Access</span
                                    > -->
                                </li>
                            </ul>
                            <p v-else>-</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="column">
                            <h3 class="label uppercase">Embargo</h3>
                            <p v-if="dataset.embargo_date">
                                <span>{{ getHumanDate(dataset.embargo_date) }}</span>
                            </p>
                            <p v-else>-</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid" style="padding-top: 3.8em">
            <div class="columns is-mobile partner-logos">
                <div class="column col-sm text-center">
                    <a target="_blank" href="https://www.re3data.org/repository/r3d100013400"
                        ><img src="@/assets/site/img/re3-data-logo-mono.jpg" alt="re3 data logo"
                    /></a>
                </div>
                <div class="column col-sm text-center">
                    <a target="_blank" href="http://www.geosphere.at/">
                        <img src="@/assets/site/img/geosphere-austria-logo.jpg" class="pb-3" alt="logo geosphere austria" />
                        <!-- <img src="@/assets/site/img/gbaLogoRGB_web.png" alt="GeoSphere Austria logo" /> -->
                    </a>
                </div>
                <div class="column col-sm text-center">
                    <a target="_blank" href="https://www.base-search.net/Search/Results?q=coll:fttethysrdr&refid=dctablede">
                        <img src="@/assets/site/img/base-logo.gif" alt="logo base" />
                    </a>
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
    padding: 0;
}
.card {
    border-radius: 0;
    /* rempve box-shadow */
    box-shadow: none;
}
.link-label {
    color: #33cccc;
}
.label {
    /* color: #363636; */
    display: block;
    font-size: 0.8rem;
    font-weight: 700;
}
.label.uppercase {
    text-transform: uppercase;
}
.normal.label {
    font-weight: 400;
}
.column p span i {
    color: #336699;
}

.table-header {
    /* color: #363636; */
    font-size: 0.8rem;
    font-weight: 700;
    background-color: #ccddf1;
}
// input {
//     height: 2em;
//     font-size: 1em;
//     padding-left: 0.4em;
// }
// button {
//     margin-top: 20px;
//     font-family: Arial;
//     background-color: #eee;
//     border: none;
//     padding: 5px 10px;
//     border-radius: 4px;
//     cursor: pointer;
//     cursor: hand;
// }
// button:hover {
//     background-color: #cfd8dc;
// }
// button:disabled {
//     background-color: #eee;
//     color: #ccc;
//     cursor: auto;
// }
</style>
