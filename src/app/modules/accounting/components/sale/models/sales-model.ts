import { SaleModel } from "./sale-model";
import { PageableModel } from "src/app/modules/themes/models/pageable-model";
import { SortModel } from "src/app/modules/themes/models/sort-model";

export interface SalesModel {
    content: SaleModel[],
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