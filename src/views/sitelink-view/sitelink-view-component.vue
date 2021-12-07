<template>
    <div class="container">
        <section class="section">
            <div class="title has-text-centered">
                <h1 class="title">Sitelinks for Web Crawlers</h1>
                <!-- <p class="lead">Want to keep updated or need further information?</p> -->
                <hr class="center-line" />
            </div>
            <!-- <div class="column">
                <span>
                    <a href="" v-for="(year, index) in years" :key="index">
                        {{ year }}
                    </a>
                </span>
            </div> -->
            <div class="columns is-centered">
                <div class="column is-6-desktop">
                    <div class="list" v-if="years.length > 0">
                        <ul class="block-list has-radius is-primary">
                            <li v-for="(year, index) in years" :key="index" :class="{ highlight: year == selected }" @click="select(year)">
                                {{ year }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="columns is-centered">
                <div class="column is-6-desktop">
                    <ol v-if="datasets.length > 0">
                        <li v-for="(dataset, index) in datasets" :key="index">
                            <div class="post">
                                <header class="post-header">
                                    <h2 class="post-title">
                                        <a>{{ dataset.type }}; {{ dataset.publish_id }}</a>
                                    </h2>
                                </header>
                                <div class="blog-meta">
                                    {{ dataset.server_date_published }}
                                </div>
                                <div class="post-description">
                                    <!-- @foreach ($document->authors as $author) -->
                                    <div v-for="(author, index) in dataset.authors" :key="index">
                                        <em>Author: {{ author.full_name }}</em>
                                        <br />
                                    </div>
                                    <div v-for="(title, index) in dataset.titles" :key="index">
                                        <em>{{ title.type }}: {{ title.value }}</em>
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import SitelinkViewComponent from "./sitelink-view-component";
export default SitelinkViewComponent;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.block-list li.is-primary,
.block-list.is-primary > li {
    background: #00d1b2;
    color: #fff;
}

.block-list li.has-radius,
.block-list.has-radius > li {
    border-radius: 4px;
}

.block-list li {
    padding: 16px;
    background: #f5f5f5;
    margin-bottom: 0.25rem;
}

// .block-list li:hover {
//     color: red;
// }

.block-list li.highlight {
    background: #6b716f;
}
</style>
