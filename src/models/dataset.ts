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

export class DbDataset {
    public id!: number;
    public url!: string;
    public contributing_corporation!: string;
    public creating_corporation!: string;
    public publisher_name!: string;
    public embargo_date!: string;
    public publish_id!: number;
    public project_id!: number;
    public type!: string;
    public language!: string;
    public server_state!: string;
    public belongs_to_bibliography!: boolean;
    public created_at!: string;
    public server_date_modified!: string;
    public server_date_published!: string;
    public account_id!: number;
    public editor_id!: number;
    public reviewer_id!: number;
    public preferred_reviewer!: number;
    public preferred_reviewer_email!: string;
    public reject_editor_note!: string;
    public reject_reviewer_note!: string;
    public reviewer_note_visible!: string;
    public titles!: Array<Title>;
    public abstracts!: Array<Abstract>;
    public authors!: Array<Author>;
    public contributors!: Array<Author>;
    public user!: Person;

    public hasTranslatedAbstract(): boolean {
        if (this.abstracts.some((e) => e.type === "Translated")) {
            return true;
        } else {
            return false;
        }
    }

    public hasSeriesInformationAbstract(): boolean {
        if (this.abstracts.some((e) => e.type === AbstractType.Series_information)) {
            return true;
        } else {
            return false;
        }
    }

    public hasMethodsAbtract(): boolean {
        if (this.abstracts.some((e) => e.type === AbstractType.Methods)) {
            return true;
        } else {
            return false;
        }
    }

    public get MainAbstract(): Nullable<Abstract> {
        return this.abstracts.find((e) => e.type === AbstractType.Abstract);
    }

    public get TranslatedAbtract(): Nullable<Abstract> {
        return this.abstracts.find((e) => e.type === AbstractType.Translated);
    }

    public get SeriesInformationAbtract(): Nullable<Abstract> {
        return this.abstracts.find((e) => e.type === AbstractType.Series_information);
    }

    public get MethodsAbtract(): Nullable<Abstract> {
        return this.abstracts.find((e) => e.type === AbstractType.Methods);
    }
}
type Nullable<T> = T | undefined;

export enum AbstractType {
    Abstract = "Abstract",
    Methods = "Methods",
    Series_information = "Series_information",
    Technical_info = "Technical_info",
    Translated = "Translated",
    Other = " Other",
}

export interface Title {
    id: number;
    type: string;
    value: string;
    language: string;
}

export interface Abstract {
    id: number;
    type: string;
    value: string;
    language: string;
}

export interface Author {
    id: number;
    academic_title: string;
    date_of_birth: string;
    email: string;
    first_name: string;
    last_name: string;
    name_type: string;
}

export interface Person {
    id: number;
    login: string;
    email: string;
    first_name: string;
    last_name: string;
    created_at: string;
}
