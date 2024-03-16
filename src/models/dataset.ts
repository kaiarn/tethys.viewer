// import moment from "moment";
import dayjs from "dayjs";

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
    identifier: Identifier;
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
    constructor(
        public value: string,
        public type: SearchType,
    ) {}
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
        public references: Array<Reference>,
        public files: Array<DbFile>,
        public identifier: Identifier,
        public referenced_by: Array<Reference>,
        private coverage?: Coverage,
        public project?: Project,
    ) {}

    public hasTranslatedTitle(): boolean {
        if (this.titles.some((e) => e.type === TitleType.Translated)) {
            return true;
        } else {
            return false;
        }
    }

    public hasTranslatedAbstract(): boolean {
        if (this.abstracts.some((e) => e.type === "Translated")) {
            return true;
        } else {
            return false;
        }
    }

    public hasSeriesInformationAbstract(): boolean {
        if (this.abstracts.some((e) => e.type === AbstractType.Series_information && this.language == e.language)) {
            return true;
        } else {
            return false;
        }
    }

    public hasTranslatedSeriesInformationAbstract(): boolean {
        if (this.abstracts.some((e) => e.type === AbstractType.Series_information && this.language != e.language)) {
            return true;
        } else {
            return false;
        }
    }

    public hasMethodsAbstract(): boolean {
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
        const embargoDate = dayjs(this.embargo_date); // moment(this.embargo_date);
        const todayDate = dayjs(); //moment.now();

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

    public get TranslatedTitle(): Nullable<Title> {
        return this.titles.find((e) => e.type === TitleType.Translated);
    }

    public get MainAbstract(): Nullable<Abstract> {
        return this.abstracts.find((e) => e.type === AbstractType.Abstract);
    }

    public get TranslatedAbstract(): Nullable<Abstract> {
        return this.abstracts.find((e) => e.type === AbstractType.Translated);
    }

    public get SeriesInformationAbstract(): Nullable<Abstract> {
        return this.abstracts.find((e) => e.type === AbstractType.Series_information && this.language == e.language);
    }

    public get TranslatedSeriesInformationAbstract(): Nullable<Abstract> {
        return this.abstracts.find((e) => e.type === AbstractType.Series_information && this.language != e.language);
    }

    public get MethodsAbstract(): Nullable<Abstract> {
        return this.abstracts.find((e) => e.type === AbstractType.Methods);
    }

    public get Coverage(): string {
        if (this.coverage != undefined) {
            const xMin = this.coverage.x_min;
            const xMax = this.coverage.x_max;
            const yMin = this.coverage.y_min;
            const yMax = this.coverage.y_max;
            // const elevationAbsolut = this.coverage.elevation_absolut;

            let geoLocation =
                "* SOUTH-BOUND LATITUDE: " +
                yMin +
                "\n" +
                "* WEST-BOUND LONGITUDE: " +
                xMin +
                "\n" +
                "* NORTH-BOUND LATITUDE: " +
                yMax +
                "\n" +
                "* EAST-BOUND LONGITUDE: " +
                xMax;

            // geoLocation += elevationAbsolut != null ? ` * ELEVATION ABSOLUT: ${elevationAbsolut}\n` : "";

            // ${elevationAbsolut ? ` * ELEVATION ABSOLUT: ${elevationAbsolut}\n` : ""} `;

            let elevation = "";
            if (this.coverage.elevation_max != null && this.coverage.elevation_min != null) {
                elevation += "\n* ELEVATION MIN: " + this.coverage.elevation_min + " *\nELEVATION MAX: " + this.coverage.elevation_max;
            }
            if (this.coverage.elevation_absolut != null) {
                elevation += "\n* ELEVATION ABSOLUT: " + this.coverage.elevation_absolut;
            }
            if (elevation != "") geoLocation += elevation;

            let depth = "";
            if (this.coverage.depth_max != null && this.coverage.depth_min != null) {
                depth += "\n* DEPTH MIN: " + this.coverage.depth_min + "\n* DEPTH MAX: " + this.coverage.depth_max;
            }
            if (this.coverage.elevation_absolut != null) {
                depth += "\n* DEPTH ABSOLUT: " + this.coverage.depth_absolut;
            }
            if (depth != "") geoLocation += depth;

            let time = "";
            if (this.coverage.time_max != null && this.coverage.time_min != null) {
                time += "\n* TIME MIN: " + this.coverage.time_min + "\n* TIME MAX: " + this.coverage.time_max;
            }
            if (this.coverage.time_absolut != null) {
                time += "\n* TIME ABSOLUT: " + this.coverage.time_absolut;
            }
            if (time != "") geoLocation += time;

            return geoLocation;
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
    elevation_min?: number;
    elevation_max?: number;
    elevation_absolut?: number;
    depth_min?: number;
    depth_max?: number;
    depth_absolut?: number;
    time_min?: string;
    time_max?: string;
    time_absolut?: string;
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

export interface Reference {
    id: number;
    document_id: number;
    type: string;
    relation: string;
    value: string;
    label: string;
    dataset: Dataset;
}

export interface Project {
    id: number;
    label: string; // "ALLG_FACHLICH"
    name: string; //	"Allgemein fachliche Arbeiten"
    description: string; //	"Allgemein fachlich interdisziplinäre Arbeiten"
    created_at: string;
    updated_at: string;
}

export class DbFile {
    constructor(
        public id: number,
        public document_id: number,
        public path_name: string,
        public label: string,
        public mime_type: string,
        public file_size: number,
        public visible_in_frontdoor: boolean,
        public visible_in_oai: boolean,
        public sort_order: Int16Array,
        public created_at: string,
        public updated_at: string,
        public hashvalues: Array<HashValue>,
        public comment?: string,
        public language?: string,
    ) {}

    public get HashValue(): Nullable<HashValue> {
        return this.hashvalues.find((e) => e.type === "md5");
    }
}

export interface HashValue {
    file_id: number;
    type: string;
    value: string;
}

export interface Identifier {
    created_at: string;
    dataset_id: number;
    id: number;
    status: string; //'findable'
    type: string; //'doi'
    updated_at: string; //'2023-03-09T09:48:28.000Z'
    value: string; //'10.24341/tethys.209'
}
