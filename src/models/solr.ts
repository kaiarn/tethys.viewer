export interface SolrSettings {
    core: string;
    host: string;
}

export class ActiveFilterCategories {
    // count: number;
    language!: Array<string>;
    subject!: Array<string>;
    [key: string]: Array<string>;
}

// export class ActiveFilterCategory {
//     key!: string;
//     values!: Array<string>;

//     // [key: string]: Array<string>;
// }

export class FilterItem {
    private category: string;
    val: string;
    count: number;
    private active: boolean;

    constructor(value: string, count: number) {
        this.val = value;
        this.count = count;
        this.active = false;
        this.category = "";
    }

    //#region properties

    get Category(): string {
        return this.category;
    }
    set Category(theCategory: string) {
        this.category = theCategory;
    }

    get Active(): boolean {
        return this.active;
    }
    set Active(isActive: boolean) {
        this.active = isActive;
    }

    //#endregion
}
