import { CompanyModel } from "src/app/modules/companies/models/company-model";
import { ProductModel } from "src/app/modules/products/models/product-model";

export interface ProductStockModel {
    stockId: number;
    company: CompanyModel;
    product: ProductModel;
    quantity: number;
    price: number;
}
