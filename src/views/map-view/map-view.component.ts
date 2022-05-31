import { Options, Vue } from "vue-class-component";
import MapComponent from "@/components/map/map.component.vue";
// import { Marker, MapOptions, Control, icon, LatLngBoundsExpression } from "leaflet";
import { MapOptions } from "leaflet";

// const DEFAULT_BASE_LAYER_NAME = "BaseLayer";
// const DEFAULT_BASE_LAYER_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
// const DEFAULT_BASE_LAYER_ATTRIBUTION = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';

@Options({
    name: "MapViewComponent",
    components: {
        MapComponent,
    },
})
export default class MapViewComponent extends Vue {
    public mapOptions: MapOptions = {
        center: [48.208174, 16.373819],
        zoom: 3,
        zoomControl: false,
    };

    // public onMapInitialized(newItem: string) {
    //     console.log(newItem);
    // }
}
