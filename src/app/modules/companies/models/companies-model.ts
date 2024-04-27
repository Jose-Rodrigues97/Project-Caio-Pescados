import { Companyv2Model } from "./company-card-model";
import { PageableModel } from "../../themes/models/pageable-model";
import { SortModel } from "../../themes/models/sort-model";

export interface CompaniesModel {
  content: Companyv2Model[];
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
