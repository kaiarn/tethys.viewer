<template>
    <div v-bind:id="mapId" class="map-container mapDesktop"></div>
</template>

<script lang="ts">
import MapComponent from "./map.component";
export default MapComponent;
</script>

<style lang="scss" scoped>
.mapDesktop {
    overflow: hidden;
    position: absolute;
    bottom: 30px;
    top: 30px;
    left: 30px;
    right: 30px;
}
</style>
