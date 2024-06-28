import { PageableModel } from "src/app/modules/themes/models/pageable-model";
import { SortModel } from "src/app/modules/themes/models/sort-model";
import { ProductStockModel } from "./product-stock-model";

export interface ProductsStockModel {
    content: ProductStockModel[];
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
