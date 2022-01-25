import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Map, Control, MapOptions, LatLngBoundsExpression, tileLayer, TileLayer } from "leaflet";

const DEFAULT_BASE_LAYER_NAME = "BaseLayer";
const DEFAULT_BASE_LAYER_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const DEFAULT_BASE_LAYER_ATTRIBUTION = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';

@Options({
    name: "MapViewComponent",
    components: {},
})
export default class MapViewComponent extends Vue {
    /**
     * A map with the given ID is created inside this component. This ID can be used the get the map instance over the map cache service.
     */
    @Prop()
    public mapId!: string;

    protected oldBaseLayer: Control.LayersObject = {};
    protected map!: Map;
    protected zoomControl!: Control.Zoom;

    beforeMount() {
        if (this.mapId === undefined || this.mapId === null) {
            this.mapId = this.generateUUID();
        }
    }

    protected initMap(): void {
        this.map = new Map(this.mapId);
        // this.mapService.setMap(this.mapId, this.map);
        // this.onMapInitializedEvent.emit(this.mapId);

        // if (this.baseMaps && this.baseMaps.size > 0) {
        // 	this.baseMaps.forEach((layerOptions, key) => this.addBaseMap(layerOptions));
        // } else {
        // 	this.addBaseMap();
        // }
        // if (this.fitBounds) {
        // 	this.map.fitBounds(this.fitBounds);
        // }
    }

    private generateUUID(): string {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
    }
}
