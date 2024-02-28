import { PaginationModel } from "src/app/modules/themes/models/pagination-model";
import { CompanyModel } from "./company-model";

export interface CompaniesModel {
    content: CompanyModel[];
    pagination: PaginationModel;
}