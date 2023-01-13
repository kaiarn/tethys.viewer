import api from "../api/api";
// import { Observable, of } from "rxjs";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Dataset, DbDataset, Suggestion } from "@/models/dataset";
import { SolrResponse } from "@/models/headers";
import { ActiveFilterCategories } from "@/models/solr";
import { VUE_APP_PORTAL } from "@/constants";
// import { deserialize, instanceToInstance } from "class-transformer";
import { deserialize } from "class-transformer";
// import { OAI_DATASETS } from "./mock-oai-datasets";
// import { OaiDataset, OaiPerson } from "@/models/oai";
// import xml2js from "xml2js";

class DatasetService {
    // for the autocomplete search
    public searchTerm(term: string, solrCore: string, solrHost: string): Observable<Dataset[]> {
        // solr endpoint
        // const host = 'http://voyagerdemo.com/';
        // const host = 'https://www.tethys.at/';''
        const host = "https://" + solrHost;
        const path = "/solr/" + solrCore + "/select?";
        // const base = "https://geomon.geologie.ac.at/52n-sos-webapp/api/features"; //host + path;
        const base = host + path;

        //const fields = 'id,server_date_published,abstract_output,title_output,title_additional,author,subject'; // fields we want returned
        const fields = ["id", "licence", "server_date_published", "abstract_output", "title_output", "title_additional", "author", "subject", "doctype"].toString();

        //var dismaxFields = "title^3 abstract^2 subject^1";
        const qfFields = "title^3 author^2 subject^1";
        // let params = "fl=" + fields;
        // // if (term == "*%3A*") { // *:
        // //   params += "&defType=edismax&wt=json&indent=on"; //edismax
        // // } else {
        // params += "&defType=edismax&qf=" + qfFields + "&wt=json&indent=on"; //dismax
        // // }

        // const query = "&q=" + term + "*";
        // const apiU = base + params + query;

        const q_params = {
            "0": "fl=" + fields,
            q: term + "*",
            defType: "edismax",
            qf: qfFields,
            indent: "on",
            wt: "json",
        };

        const stations = api.get<SolrResponse>(base, q_params).pipe(map((res: SolrResponse) => res.response.docs));

        return stations;
    }

    public facetedSearch(
        suggestion: Suggestion | string,
        activeFilterCategories: ActiveFilterCategories,
        solrCore: string,
        solrHost: string,
        start?: string,
    ): Observable<SolrResponse> {
        // solr endpoint
        // const host = 'http://voyagerdemo.com/';
        //const host = 'https://www.tethys.at/';
        //const host = 'https://' + solrHost;
        const host = "https://" + solrHost;
        const path = "/solr/" + solrCore + "/select?";
        const base = host + path;

        //const fields = 'id,server_date_published,abstract_output,title_output,title_additional,author,subject'; // fields we want returned
        const fields = ["id", "licence", "server_date_published", "abstract_output", "identifier", "title_output", "title_additional", "author", "subject", "doctype"].toString();

        // const qfFields = "title^3 author^2 subject^1";
        // let params = "fl=" + fields;
        // if (term == "*%3A*") {
        //     params += "&defType=edismax&wt=json&indent=on"; //edismax
        // } else {
        //     params += "&defType=dismax&qf=" + qfFields + "&wt=json&indent=on"; //dismax
        // }

        let term, queryOperator, qfFields;
        if (typeof suggestion === "string") {
            term = suggestion + "*";
            queryOperator = "or";
            qfFields = "title^3 author^2 subject^1";
        } else if (suggestion instanceof Suggestion) {
            term = suggestion.type + ':"' + suggestion.value + '"';
            queryOperator = "and";
            qfFields = undefined;
        }

        if (start === undefined) start = "0";
        // start = "&start=" + start;

        // const facetFields =
        //     "&facet=on&facet.field=language&facet.field={!key=datatype}doctype&facet.field=subject"; //&fq=year:(2019)";//&facet.query=year:2018";

        const filterFields = new Array<string>();
        if (Object.keys(activeFilterCategories).length > 0) {
            // filterFields = '["';
            // const filterFields: string[] = [];
            // const facet_fields: FacetFields = res.facets;
            let prop: keyof typeof activeFilterCategories;
            for (prop in activeFilterCategories) {
                const filterItems = activeFilterCategories[prop];
                // const filterItems = facetCategory.values;
                // filterItems.forEach((filterItem) => {
                // console.log(`${key} ${valueArray}`);
                filterItems.forEach(function (value: string) {
                    // filterFields += "&fq=" + key + ':("' + value + '")';
                    filterFields.push(prop + ':("' + value + '")');
                    // filterFields += prop + ":" + value;
                });
            }
            // filterFields += '"]';
        }
        // const query = "&sort=server_date_published desc" + "&q=" + term;

        // const api =
        //     base + params + limit + start + query + filterFields + facetFields;

        // https://solr.apache.org/guide/8_4/json-request-api.html
        const q_params = {
            "0": "fl=" + fields,
            q: term,
            "q.op": queryOperator,
            defType: "edismax",
            qf: qfFields,
            // df: "title",
            indent: "on",
            wt: "json",
            rows: 10,
            // fq: ["subject:Steiermark", "language:de"],
            fq: filterFields,
            start: start,
            sort: "server_date_published desc",
            facet: "on",
            // "facet.field": "language",
            "json.facet.language": '{ type: "terms", field: "language" }',
            "json.facet.subject": '{ type: "terms", field: "subject", limit: -1 }',
            "json.facet.year": '{ type: "terms", field: "year" }',
            "json.facet.author": '{ type: "terms", field: "author_facet", limit: -1 }',
        };

        const stations = api.get<SolrResponse>(base, q_params);
        // .pipe(map((res) => res.response.docs));

        return stations;
    }

    public getYears(): Observable<string[]> {
        // const heroes = of(HEROES);
        // const host = "https:" + VUE_APP_PORTAL;
        const host = VUE_APP_PORTAL;
        const path = "/api/years";
        const base = host + path;

        const years = api.get<string[]>(base);
        // this.messageService.add('HeroService: fetched heroes');
        return years;
    }

    public getDocuments(year: string): Observable<Array<DbDataset>> {
        // const host = "https:" + VUE_APP_PORTAL;
        const host = VUE_APP_PORTAL;
        const path = "/api/sitelinks/" + year;
        const base = host + path;

        const documents: Observable<DbDataset[]> = api.get<Array<DbDataset>>(base);
        // this.messageService.add('HeroService: fetched heroes');
        return documents;
    }

    public getDataset(id: number): Observable<DbDataset> {
        // const host = "https:" + VUE_APP_PORTAL;
        const host = VUE_APP_PORTAL;
        const path = "/api/dataset/" + id;
        const apiUrl = host + path;
        const dataset = api.get<DbDataset>(apiUrl).pipe(map((res) => this.prepareDataset(res)));
        // const dataset = api.get<DbDataset>(apiUrl).pipe(map((res) => this.prepareDataset(res, apiUrl)));

        // this.messageService.add('HeroService: fetched heroes');
        return dataset;
    }

    // public getOaiDatasets(): Observable<OaiDataset[]> {
    //     const apiUrl = "https://data.tethys.at/oai?verb=ListRecords&metadataPrefix=oai_datacite";
    //     const oaiDatasets = api.get<string>(apiUrl).pipe(
    //         map(
    //             (response: string) => {
    //                 // const parser = new DOMParser();
    //                 // const xmlDoc: XMLDocument = parser.parseFromString(response, "application/xml");

    //                 // const xslDoc = parser.parseFromString(this.xsl, "application/xml");
    //                 // const xsltProcessor = new XSLTProcessor();
    //                 // xsltProcessor.importStylesheet(xslDoc);
    //                 // console.log(xmlDoc);
    //                 // const xmlDom = xsltProcessor.transformToDocument(xmlDoc);

    //                 // const serializer = new XMLSerializer();
    //                 // const html = serializer.serializeToString(xmlDom.documentElement);
    //                 // console.log(html);

    //                 // const arrOai = new Array<OaiDataset>();
    //                 // return arrOai;
    //                 const arrOai = this.parseXML(response);
    //                 return arrOai;
    //                 // .then((data) => {
    //                 //   return data;
    //                 // });
    //             },
    //             // (error: string) => this.errorHandler(error),
    //         ),
    //     );
    //     // const oaiDatasets = of(OAI_DATASETS);

    //     // this.messageService.add('HeroService: fetched heroes');
    //     return oaiDatasets;
    // }

    // private parseXML(xmlStr: string): Array<OaiDataset> {
    //     // let k = "";
    //     const arr: OaiDataset[] = [];
    //     const domParser = new DOMParser();
    //     const doc = domParser.parseFromString(xmlStr, "application/xml");
    //     const records = doc.getElementsByTagName("ListRecords")[0];
    //     // // const rt = xmlNode.resumptionToken;
    //     // for (let i = 0; i < records.length; i++) {
    //     //     console.log(records[i].getAttribute("name"));
    //     // }

    //     const parser: xml2js.Parser = new xml2js.Parser({
    //         trim: true,
    //         explicitArray: false,
    //         ignoreAttrs: false,
    //         // mergeAttrs: true,
    //     });
    //     parser.parseString(records.outerHTML, function (err: Error | null, result: any) {
    //         const xmlNode = result.ListRecords;
    //         // const rt = xmlNode.resumptionToken;
    //         for (const rNode in xmlNode.record) {
    //             const item = xmlNode.record[rNode];

    //             const dc = item.metadata.resource;
    //             const t = dc.titles.title;
    //             const id = dc.identifier._;

    //             const lang = "en"; //dc.titles.title.attributes("xml",True)->lang;
    //             let title: string;
    //             if (lang == "en" && t.length > 1) {
    //                 title = t[1]._;
    //             } else {
    //                 title = t[0]._;
    //             }

    //             let creator = "";
    //             if (dc.creators.creator instanceof Array) {
    //                 dc.creators.creator.forEach((person: OaiPerson) => {
    //                     creator += person.creatorName + "; ";
    //                 });
    //             } else {
    //                 creator += dc.creators.creator.creatorName._;
    //             }

    //             let contributor = "";
    //             if (dc.contributors) {
    //                 if (dc.contributors.contributor instanceof Array) {
    //                     dc.contributors.contributor.forEach((person: OaiPerson) => {
    //                         contributor += person.contributorName + "; ";
    //                     });
    //                 } else {
    //                     contributor += dc.contributors.contributor.contributorName;
    //                 }
    //             }

    //             // ?.map((u: any) => u.creatorName._).join("; ");
    //             // foreach ($dc->creators->creator as $c) {
    //             //     foreach ($c->creatorName as $d) {
    //             //         if (count(explode(',',$d)) > 1) {
    //             //             $creator .= explode(',',$d)[0] . ', ' . substr(explode(',',$d)[1],1,1) . '; ';
    //             //         } else {
    //             //             $creator .= explode(',',$d)[0];
    //             //         }

    //             //     }
    //             // }

    //             const north = dc.geoLocations.geoLocation.geoLocationBox.northBoundLatitude;
    //             const east = dc.geoLocations.geoLocation.geoLocationBox.eastBoundLongitude;
    //             const south = dc.geoLocations.geoLocation.geoLocationBox.southBoundLatitude;
    //             const west = dc.geoLocations.geoLocation.geoLocationBox.westBoundLongitude;

    //             const subject = dc.subjects.subject.map((u: any) => u._).join(", ");

    //             const oaiDataset = {
    //                 doi: id,
    //                 title: title,
    //                 creator: creator,
    //                 contributor: contributor,
    //                 subject: subject,
    //                 north: north,
    //                 south: south,
    //                 east: east,
    //                 west: west,
    //             } as OaiDataset;
    //             arr.push(oaiDataset);
    //         }
    //         // resolve(arr);
    //     });
    //     return arr;
    // }

    // private prepareOAI(xml: any) : Array<OaiDataset> {
    //     //
    // }

    // private prepareDataset(datasetObj: DbDataset, apiUrl: string): DbDataset {
    private prepareDataset(datasetObj: DbDataset): DbDataset {
        const dataset = deserialize<DbDataset>(DbDataset, JSON.stringify(datasetObj));
        dataset.url = document.documentURI;
        // this.internalDatasetId.generateInternalId(dataset);
        // if (dataset.seriesParameters) {
        //     dataset.parameters = dataset.seriesParameters;
        //     delete dataset.seriesParameters;
        // }
        return dataset;
    }
}

export default new DatasetService();
