//struct para o list com o pagination do backend para ser exibido no front. usado no service
import { SupplierModel } from "./supplier-model";
import { PageableModel } from "../../themes/models/pageable-model";
import { SortModel } from "../../themes/models/sort-model";

export interface SuppliersModel {
  content: SupplierModel[];
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
