import { Dataset } from "./dataset";

export interface IPagination {
    total: number;
    perPage: number;
    currentPage: number;
    lastPage?: number;
    data: Array<Dataset>;
}
