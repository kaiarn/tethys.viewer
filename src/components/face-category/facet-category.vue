<template>
    <div class="panel panel-default">
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
            <ul class="overflowing" v-if="overflowing == true">
                <li>
                    <span @click="toggle()">{{ uncollapseLabelText }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import FacetCategory from "./FacetCategory";
export default FacetCategory;
</script>

<style scoped>
/* local styles */
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
