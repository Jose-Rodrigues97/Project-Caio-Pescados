import { PageableModel } from "./pageable-model"
import { SortModel } from "./sort-model";

export interface PaginationModel {
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: PageableModel;
    size: number;
    sort: SortModel;
    totalElements: number;
    totalPages: number;
}
