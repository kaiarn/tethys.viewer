<template v-if="datasetId">
    <div class="container" v-if="dataset != undefined">
        <section class="section">
            <h2>{{ dataset.titles[0].value }} details!</h2>
            <div class="dataset__blog-meta">published: {{ dataset.server_date_published }}</div>
            <p class="dataset__abstract">{{ dataset.abstracts[0].value }}</p>
            <div><label>id: </label>{{ dataset.id }}</div>
            <button v-on:click="goBack">Back</button>
        </section>
    </div>
</template>

<script lang="ts">
import DatasetDetailComponent from "./dataset-detail.component";
export default DatasetDetailComponent;
</script>

<style scoped lang="scss">
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
