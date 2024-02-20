import { PageableModel } from "./pageable-model"
import { SortModel } from "./sort-model";

export interface PaginationModel {
    pageable: PageableModel;
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: SortModel;
    first: boolean;
    numberOfElements: number;
    empty: boolean
}
