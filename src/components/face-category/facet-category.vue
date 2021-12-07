<template>
    <div class="card panel-default">
        <!-- <h3 class="panel-title filterViewModelName">{{ filterName }}</h3> -->
        <div class="panel-heading">
            <h3 class="panel-title titlecase filterViewModelName">{{ filterName }}</h3>
        </div>
        <div class="panel-body">
            <!-- e.g.language -->
            <ul class="filter-items list-unstyled" v-bind:class="{ limited: facetItems.length > 1 && collapsed }">
                <li v-for="(item, index) in facetItems" :key="index" class="list-group-item titlecase">
                    <!-- <span :class="item.Active ? 'disabled' : ''" @click.prevent="activateItem(item)">{{ item.val }} ({{ item.count }}) </span> -->
                    <span :class="item.active ? 'disabled' : ''" @click.prevent="activateItem(item)">{{ item.val }} ({{ item.count }}) </span>
                </li>
            </ul>
            <!-- <ul class="overflowing" v-if="overflowing == true">
                <li>
                    <span @click="toggle()">{{ uncollapseLabelText }}</span>
                </li>
            </ul> -->
        </div>
        <div class="card-footer" data-v-4fe33de2="">
            <p class="card-footer-item" data-v-4fe33de2="">
                <!-- <span @click="toggle()">{{ uncollapseLabelText }}</span> -->
                <span v-if="collapsed" @click="toggle()">
                    {{ uncollapseLabelText }}&nbsp;
                    <i class="fa fa-angle-down"></i>
                </span>
                <span v-else @click="toggle()">
                    {{ uncollapseLabelText }}&nbsp;
                    <i class="fa fa-angle-up"></i>
                </span>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import FacetCategory from "./FacetCategory";
export default FacetCategory;
</script>

<style scoped>
.card {
    /* position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125); */
    border-radius: 0;
}

/* .card-footer:last-child,
.card-content:last-child,
.card-header:last-child {
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
} */
.card-footer {
    background-color: transparent;
    color: #33cccc;
    /* border-top: 1px solid #ededed; */
    /* align-items: stretch; */
    /* display: flex; */
}
.card-footer-item {
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
    padding: 0.75rem;
    justify-content: left;
}

/* local styles */
.panel-heading {
    background-color: transparent;
    color: #336699;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    text-transform: capitalize;
}
.panel-body {
    padding: 0.75em 1em;
}
.disabled {
    /* color: #EBEBE4; */
    color: lightgray;
    pointer-events: none;
    text-decoration: line-through;
}

.overflowing {
    color: #444444;
    list-style: none;
    z-index: 999;
}

.overflowing span {
    color: #444444;
    font-style: italic;
    text-decoration: underline;
    cursor: pointer;
}

.filter-items.limited li:nth-of-type(1n + 3) {
    display: none;
}

ul.filter-items li span {
    cursor: pointer;
    /* color:#ffffff;
text-decoration: none;
font-weight: bold;
font-size: 16px; */
}
</style>
