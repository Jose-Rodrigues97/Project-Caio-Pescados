import { SortModel } from "./sort-model";

export interface PageableModel {
    sort: SortModel;
    offset: number;
    pageSize: number;
    pageNumber: number;
    unpaged: boolean;
    paged: boolean
}
