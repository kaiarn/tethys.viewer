<template>
    <div v-bind:id="mapId" class="map-container mapDesktop">
        <div class="loading">
            <span class="spinner-border text-danger" role="status"></span>
        </div>
    </div>
</template>

<script lang="ts">
import MapComponent from "./map.component";
export default MapComponent;
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/initial-variables.scss";
.mapDesktop {
    overflow: hidden;
    position: absolute;
    bottom: 0px;
    top: 10px;
    left: 0px;
    right: 0px;
}

// @media screen and (min-width: 769px) {
@media screen and (min-width: $tablet), print {
    .mapDesktop {
        overflow: hidden;
        position: absolute;
        bottom: 0px;
        top: 0px;
        left: 0px;
        right: 0px;
    }
}

.loading {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1000;
    color: red;
    width: 3rem;
    height: 3rem;
    text-align: center;
    vertical-align: middle;
}
</style>
