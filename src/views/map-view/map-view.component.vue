<template>
    <div class="container main">
        <div class="canvas-area is-8 column">
            <h1>TETHYS SERVICES</h1>
            <div id="div-map">
                <MapComponent v-bind:mapId="'map'" v-bind:mapOptions="mapOptions"> </MapComponent>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import MapViewComponent from "./map-view.component";
export default MapViewComponent;
</script>

<style lang="scss">
.section {
    font-size: 0.8rem;
    padding: 0;
}
.main {
    // padding-top: 65px;
    // flex-wrap: wrap;
    // justify-content: space-around;

    position: absolute;
    overflow: hidden;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: scroll;
}
.canvas-area {
    /* flex: 2;
    display: flex;
    align-items: center;
    justify-content: center; */
    height: 100%;
}

#div-map {
    position: relative;
    height: 500px;
    width: 500px;
}

.mapDesktop {
    overflow: hidden;
    position: absolute;
    bottom: 30px;
    top: 30px;
    left: 30px;
    right: 30px;
}
</style>
