import moment from "moment";

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
    // public id!: number;
    // public url!: string;
    // public contributing_corporation!: string;
    // public creating_corporation!: string;
    // public publisher_name!: string;
    // public embargo_date!: string;
    // public publish_id!: number;
    // public project_id!: number;
    // public type!: string;
    // public language!: string;
    // public server_state!: string;
    // public belongs_to_bibliography!: boolean;
    // public created_at!: string;
    // public server_date_modified!: string;
    // public server_date_published!: string;
    // public account_id!: number;
    // public editor_id!: number;
    // public reviewer_id!: number;
    // public preferred_reviewer!: number;
    // public preferred_reviewer_email!: string;
    // public reject_editor_note!: string;
    // public reject_reviewer_note!: string;
    // public reviewer_note_visible!: string;
    // public titles!: Array<Title>;
    // public abstracts!: Array<Abstract>;
    // public authors!: Array<Author>;
    // public contributors!: Array<Author>;
    // public user!: Person;
    // public subjects!: Array<Subject>;

    constructor(
        public id: string,
        public url: string,
        public contributing_corporation: string,
        public creating_corporation: string,
        public publisher_name: string,
        public embargo_date: string,
        public publish_id: number,
        public project_id: number,
        public type: string,
        public language: string,
        public server_state: string,
        public belongs_to_bibliography: boolean,
        public created_at: string,
        public server_date_modified: string,
        public server_date_published: string,
        public account_id: number,
        public editor_id: number,
        public reviewer_id: number,
        public preferred_reviewer: number,
        public preferred_reviewer_email: string,
        public reject_editor_note: string,
        public reject_reviewer_note: string,
        public reviewer_note_visible: string,
        public titles: Array<Title>,
        public abstracts: Array<Abstract>,
        public authors: Array<Author>,
        public contributors: Array<Author>,
        public user: Person,
        public subjects: Array<Subject>,
        public licenses: Array<License>,
        public files: Array<DbFile>,
        private coverage?: Coverage,
        public project?: Project,
    ) {}

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

    public hasContributors(): boolean {
        if (this.contributors.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    public hasLicenses(): boolean {
        if (this.licenses.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    public hasEmbargoPassed(): boolean {
        if (this.embargo_date === null) {
            return true;
        }
        const embargoDate = moment(this.embargo_date);
        const todayDate = moment.now();

        // Embargo has passed on the day after the specified date
        if (embargoDate.isBefore(todayDate)) {
            return true;
        } else {
            return false;
        }
        // return ($embargoDate->lessThan($now));
    }

    public get MainTitle(): Nullable<Title> {
        return this.titles.find((e) => e.type === TitleType.Main);
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

    public get Coverage(): string {
        if (this.coverage != undefined) {
            const xMin = this.coverage.x_min;
            const xMax = this.coverage.x_max;
            const yMin = this.coverage.y_min;
            const yMax = this.coverage.y_max;
            return `SOUTH-BOUND LATITUDE:  ${xMin},
            * WEST-BOUND LONGITUDE: ${yMin},
            * NORTH-BOUND LATITUDE: ${xMax},
            * EAST-BOUND LONGITUDE: ${yMax}`;
        } else {
            return "";
        }
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

export enum TitleType {
    Main = "Main",
    Translated = "Translated",
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
    full_name: string;
}

export interface Person {
    id: number;
    login: string;
    email: string;
    first_name: string;
    last_name: string;
    created_at: string;
}

export interface Subject {
    id: number;
    language: string;
    type: string;
    value: string;
    external_key: string;
    created_at: string;
    updated_at: string;
}

export interface Coverage {
    x_min: string;
    x_max: string;
    y_min: string;
    y_max: string;
}

export interface License {
    id: number;
    active: boolean;
    comment_internal?: string;
    desc_markup?: string;
    desc_text?: string;
    language: string;
    link_licence: string;
    link_logo?: string;
    link_sign?: string;
    mime_type: string;
    name_long: string; // "Creative Commons Attribution 4.0 International (CC BY 4.0)"
    name: string; // "CC-BY-4.0"
    pod_allowed: boolean;
    sort_order: number;
}

export interface Project {
    id: number;
    label: string; // "ALLG_FACHLICH"
    name: string; //	"Allgemein fachliche Arbeiten"
    description: string; //	"Allgemein fachlich interdisziplinäre Arbeiten"
    created_at: string;
    updated_at: string;
}

export interface DbFile {
    id: number;
    document_id: number;
    path_name: string;
    label: string;
    comment?: string;
    mime_type: string;
    language?: string;
    file_size: bigint;
    visible_in_frontdoor: boolean;
    visible_in_oai: boolean;
    sort_order: Int16Array;
    created_at: string;
    updated_at: string;
}
