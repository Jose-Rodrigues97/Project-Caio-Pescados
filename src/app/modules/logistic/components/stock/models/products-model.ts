import { ProductModel } from "src/app/modules/products/models/product-model";
import { PageableModel } from "src/app/modules/themes/models/pageable-model";
import { SortModel } from "src/app/modules/themes/models/sort-model";

export interface Products {
    content: ProductModel[];
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
