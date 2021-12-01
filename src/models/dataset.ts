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

export interface DbDataset {
    id: number;
    contributing_corporation: string;
    creating_corporation: string;
    publisher_name: string;
    embargo_date: string;
    publish_id: number;
    project_id: number;
    type: string;
    language: string;
    server_state: string;
    belongs_to_bibliography: boolean;
    created_at: string;
    server_date_modified: string;
    server_date_published: string;
    account_id: number;
    editor_id: number;
    reviewer_id: number;
    preferred_reviewer: number;
    preferred_reviewer_email: string;
    reject_editor_note: string;
    reject_reviewer_note: string;
    reviewer_note_visible: string;
}
