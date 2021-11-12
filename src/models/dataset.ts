export interface Dataset {
    abstract_additional: Array<string>;
    abstract_output: string;
    author: Array<string>;
    author_sort: Array<string>;
    belongs_to_bibliography: boolean;
    creating_corporation: string;
    doctype: string;
    geo_location: string;
    id: number;
    identifier: Array<string>;
    language: string;
    licence: string;
    publisher_name: string;
    server_date_published: Array<number>;
    subject: Array<string>;
    title_output: string;
    year: number;
    year_inverted: number;
}

export class Suggestion {
    constructor(public value: string, public type: SearchType) {}
    // value!: string;
    // type!: SearchType;
}

export enum SearchType {
    Title = "title",
    Author = "author",
    Subject = "subject",
}
