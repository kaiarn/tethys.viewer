import { Layer } from "leaflet";

// https://github.com/52North/helgoland-toolbox/blob/develop/libs/map/src/lib/base/map-options.ts

export interface LayerOptions {
    label: string;
    visible: boolean;
    layer: Layer;
}

// export type LayerMap = Map<string, LayerOptions>;

export class LayerMap extends Map<string, LayerOptions> {}
