<template>
    <div class="container map main">
        <!-- <header class="">
            <span id="heading" class="fs-4">Map</span>         
        </header
        <br /> 
        <h1>TETHYS SERVICES</h1>
        -->
        <div id="div-map">
            <MapComponent v-bind:mapId="'map'" v-bind:mapOptions="mapOptions"> </MapComponent>
        </div>

        <div class="columns is-tablet">
            <div class="column is-half">
                <h2>Map views</h2>
                <p>Ready to beyond the starter map? Check out these map views that you can quickly access.</p>
                <ul class="icon-list">
                    <!-- <li><a href="javascript:window.open(window.location.href.split('?')[0],'_self')">alle Datenpublikationen</a></li>
                    <li><a href="javascript:window.open(window.location.href.split('?')[0]+'?layer=gk50','_self')">GK50 Kartendaten</a></li>
                    <li><a href="javascript:window.open(window.location.href.split('?')[0]+'?layer=geofast','_self')">Geofast Datensätze</a></li> -->
                    <li><a href="javascript:window.open(window.location.href.split('?')[0],'_self')">alle Datenpublikationen</a></li>
                    <li><a href="javascript:window.open(window.location.href.split('?')[0]+'?layer=gk50','_self')">GK50 Kartendaten</a></li>
                    <li>
                        <a href="javascript:window.open(window.location.href.split('?')[0]+'?layer=geofast','_self')">Geofast Datensätze</a>
                    </li>
                </ul>
            </div>

            <div class="column is-half">
                <h2>Catalog views</h2>
                <p>Read more detailed documentation on using the Tethys Research Data Repository.</p>
                <ul class="icon-list">
                    <li><a href="https://tethys.at">GK50 Kartendaten</a></li>
                    <li><a href="https://tethys.at">Geofast Datenpublikationen</a></li>
                    <li><a href="https://tethys.at">Rohstoff Geologie</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import MapViewComponent from "./map-view.component";
export default MapViewComponent;
</script>

<style lang="scss">
.map .h2,
.map h2 {
    font-size: 2rem;
}
// .section {
//     font-size: 0.8rem;
//     padding: 0;
// }

.fs-4 {
    font-size: 1.5rem !important;
}

.icon-list {
    padding-left: 0;
    list-style: none;
}
.icon-list li::before {
    display: block;
    flex-shrink: 0;
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.5rem;
    content: "";
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23212529' viewBox='0 0 16 16'%3E%3Cpath d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z'/%3E%3C/svg%3E")
        no-repeat center center / 100% auto;
}
.icon-list li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 0.25rem;
}
*,
::after,
::before {
    box-sizing: border-box;
}
#div-map {
    position: relative;
    height: 400px;
    width: 100%;
}

// .mapDesktop {
//     overflow: hidden;
//     position: absolute;
//     bottom: 30px;
//     top: 30px;
//     left: 30px;
//     right: 30px;
// }
</style>
