import { Dataset } from "./dataset";

export interface SolrResponse {
    responseHeader: ResponseHeader;
    response: ResponseContent;
    facets: FacetFields;
    // facet_counts: FacetCount;
}

export interface ResponseHeader {
    status: boolean;
    QTime: number;
    params: ResponseHeaderParams;
}

export interface ResponseHeaderParams {
    defType: string;
    rows?: number;
    start?: number;
    wt?: string;

    // 0:'fl=id,licence,server_date_published,abstract_output,identifier,title_output,title_additional,author,subject,doctype'

    // df:'title'
    // facet:'on'
    // indent:'on'
    // json.facet.language:'{ type: "terms", field: "language" }'
    // json.facet.subject:'{ type: "terms", field: "subject" }'
    // q:'title:Geodaten - Blatt 49 Wels (1:50.000)'
    // q.op:'and'
    // rows:'10'
    // start:'0'
    // wt:'json'
}

export interface ResponseContent {
    numFound: number;
    start: number;
    docs: Array<Dataset>;
}

// export interface FacetCount {
//     facet_fields: FacetCategory<any>;
// }

// export class FacetCategory<T> {

//     [key: string]: {
//         values: T[];
//     };
// }

export class FacetResults {
    language!: Array<FacetItem>;
    subject!: Array<FacetItem>;
}

export class FacetFields {
    // count: number;
    language!: FacetInstance;
    subject!: FacetInstance;
    // [key: string]: FacetInstance;
}

export interface FacetInstance {
    [key: string]: Array<FacetItem>;
    // buckets: Array<FacetItem>;
}

export interface FacetItem {
    val: string;
    count: number;
    category: string;
    active: boolean;
}
