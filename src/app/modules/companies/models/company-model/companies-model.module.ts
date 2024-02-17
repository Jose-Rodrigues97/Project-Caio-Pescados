import { PaginationModel } from "src/app/modules/themes/models/pagination-model";
import { CompanyModel } from "./company-model.module";

export interface CompaniesModel {
    content: CompanyModel[];
    pagination: PaginationModel;
}