import { PageableModel } from "../../themes/models/pageable-model";
import { SortModel } from "../../themes/models/sort-model";
import { CustomerModel } from "./customer-model";

export interface CustomersModel {
  content: CustomerModel[];
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
