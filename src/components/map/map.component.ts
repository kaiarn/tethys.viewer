import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Map, MapOptions, tileLayer } from "leaflet";
import { LayerOptions } from "./map-options";

const DEFAULT_BASE_LAYER_NAME = "BaseLayer";
// const DEFAULT_BASE_LAYER_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const DEFAULT_BASE_LAYER_ATTRIBUTION = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';

@Options({
    // selector: "app-map",
    // templateUrl: "map.component.html",
    name: "MapComponent",
})
// https://52north.github.io/helgoland-toolbox/classes/CachedMapComponent.html#source
export default class MapComponent extends Vue {
    /**
     * A map with the given ID is created inside this component. This ID can be used the get the map instance over the map cache service.
     */
    @Prop()
    public mapId!: string;

    /**
     * @input The serviceUrl, where the selection should be loaded.
     */
    @Prop()
    public serviceUrl!: string;

    /**
     * The corresponding leaflet map options (see: https://leafletjs.com/reference-1.3.4.html#map-option)
     */
    @Prop()
    public mapOptions!: MapOptions;

    // protected oldBaseLayer: Control.LayersObject = {};
    protected map!: Map;
    // protected zoomControl!: Control.Zoom;

    public beforeMount(): void {
        if (this.mapId === undefined || this.mapId === null) {
            this.mapId = this.generateUUID();
        }
    }

    protected initMap(): void {
        this.map = new Map(this.mapId, this.mapOptions);
        // this.mapService.setMap(this.mapId, this.map);
        // this.onMapInitializedEvent.emit(this.mapId);
        this.addBaseMap();
    }

    private addBaseMap(layerOptions?: LayerOptions): void {
        if (this.map) {
            // let tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            // 	maxZoom: 18,
            // 	minZoom: 3,
            // 	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            // });
            // tiles.addTo(this.map);
            const layerOptions = {
                label: DEFAULT_BASE_LAYER_NAME,
                visible: true,
                layer: tileLayer.wms("https://ows.terrestris.de/osm-gray/service", {
                    format: "image/png",
                    attribution: DEFAULT_BASE_LAYER_ATTRIBUTION,
                    layers: "OSM-WMS",
                }),
                // layer: new TileLayer(DEFAULT_BASE_LAYER_URL, {
                // 	attribution: DEFAULT_BASE_LAYER_ATTRIBUTION
                // })
            };
            layerOptions.layer.addTo(this.map);
        }
    }

    private generateUUID(): string {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
    }

    mounted(): void {
        // alert("Hello World!");
        this.initMap();
    }
}
