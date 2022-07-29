import { Options, Vue } from "vue-class-component";
// import { Prop, Emit } from "vue-property-decorator";
import { Prop } from "vue-property-decorator";
import { LatLng, LatLngBounds, Map, MapOptions, Rectangle, tileLayer, TileLayer, CRS } from "leaflet";
// import { LayerOptions } from "./map-options";
import DatasetService from "../../services/dataset.service";
import { Subscription } from "rxjs";
import { OaiDataset } from "@/models/oai";

const DEFAULT_BASE_LAYER_NAME = "BaseLayer";
// const DEFAULT_BASE_LAYER_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const DEFAULT_BASE_LAYER_ATTRIBUTION = '&copy; <a href="http://basemap.at" target="_blank">Basemap.at</a>, <a href="http://www.geologie.ac.at" target="_blank">Geologie.ac.at</a>';

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

    /**
     * Informs when initialization is done with map id.
     */
    // @Emit("search-change")
    // public onMapInitializedEvent: EventEmitter<string> = new EventEmitter();

    // protected oldBaseLayer: Control.LayersObject = {};
    protected map!: Map;
    // protected zoomControl!: Control.Zoom;
    private subscriptions: Array<Subscription> = [];
    private error = "";
    private tethys!: Array<OaiDataset>;

    public beforeMount(): void {
        if (this.mapId === undefined || this.mapId === null) {
            this.mapId = this.generateUUID();
        }
    }

    public mounted(): void {
        this.initMap();
    }

    public beforeUnmount(): void {
        //unsunscribe to ensure no memory leaks
        for (const sub of this.subscriptions) {
            sub.unsubscribe();
        }
    }
    protected initMap(): void {
        this.map = new Map(this.mapId, this.mapOptions);
        // this.mapService.setMap(this.mapId, this.map);
        // this.onMapInitializedEvent.emit(this.mapId);
        this.addBaseMap();

        // Create & add WMS-layer.
        const tethys = new TileLayer.WMS("https://data.geologie.ac.at/mapserver/at_tethys", {
            layers: "tethys, geofast",
            format: "image/png",
            transparent: true,
            version: "1.3.0",
            crs: CRS.EPSG3857,
            opacity: 0.8,
        });
        this.map.addLayer(tethys);

        // const newSubs = DatasetService.getOaiDatasets().subscribe(
        //     (res: Array<OaiDataset>) => {
        //         this.tethys = res;
        //         const bottomPane: HTMLElement = this.map.createPane("bottom");
        //         bottomPane.style.zIndex = "550";
        //         const topPane: HTMLElement = this.map.createPane("top");
        //         topPane.style.zIndex = "650";

        //         for (let index = 0; index < this.tethys.length; index++) {
        //             this.addPolygon(index);
        //         }
        //     },
        //     (error: string) => this.errorHandler(error),
        // );
        // this.subscriptions.push(newSubs);
    }

    private errorHandler(err: string): void {
        this.error = err;
        // this.loading = false;
    }

    private addPolygon(i: number) {
        const southWest = new LatLng(this.tethys[i].south, this.tethys[i].west);
        const northEast = new LatLng(this.tethys[i].north, this.tethys[i].east);
        const bounds = new LatLngBounds(southWest, northEast);
        const bW = this.tethys[i].east - this.tethys[i].west;

        new Rectangle(bounds, {
            color: /GEOFAST/g.test(this.tethys[i].title) ? "red" : "green",
            fill: bW > 0.3 ? false : true,
            weight: bW > 0.3 || bW < 0.03 ? 3 : 1,
            pane: bW > 0.2 ? "bottom" : "top",
        }).addTo(this.map).bindPopup(`<p>DOI: <a target="_blank" href="https://doi.org/${this.tethys[i].doi}">${this.tethys[i].doi}</a>
                                  <br><strong>${this.tethys[i].title}</strong><br>
                                  publ.: ${this.tethys[i].creator}<br>
                                  und ${this.tethys[i].contributor}
                                </p>`);
    }

    // private addBaseMap(layerOptions?: LayerOptions): void {
    private addBaseMap(): void {
        if (this.map) {
            const map = this.map.setView([47.7, 13.5], 7);
            const southWest = new LatLng(46.5, 9.9),
                northEast = new LatLng(48.9, 16.9),
                bounds = new LatLngBounds(southWest, northEast);
            // zoom the map to that bounding box
            map.fitBounds(bounds);
            // let tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            // 	maxZoom: 18,
            // 	minZoom: 3,
            // 	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            // });
            // tiles.addTo(this.map);
            const layerOptions = {
                label: DEFAULT_BASE_LAYER_NAME,
                visible: true,
                // layer: tileLayer.wms("https://ows.terrestris.de/osm-gray/service", {
                //     format: "image/png",
                //     attribution: DEFAULT_BASE_LAYER_ATTRIBUTION,
                //     layers: "OSM-WMS",
                // }),
                // tileLayer.provider("BasemapAT.grau")
                layer: tileLayer("https://maps{s}.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png", {
                    subdomains: ["", "1", "2", "3", "4"],
                    attribution: DEFAULT_BASE_LAYER_ATTRIBUTION,
                    bounds: [
                        [46.35877, 8.782379],
                        [49.037872, 17.189532],
                    ],
                    detectRetina: false,
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
}
