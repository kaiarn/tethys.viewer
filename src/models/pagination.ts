import { Dataset } from "./dataset";

export interface Pagination {
    total: number;
    per_page?: number;
    current_page: number;
    last_page?: number;
    data: Array<Dataset>;
}
