import { AddressModel } from "src/app/models/address/address-model";
import { StockModel } from "src/app/modules/logistic/components/stock/models/stock-model";
import { ProductModel } from "src/app/modules/products/models/product-model";

export interface PurchaseModel {
  id: number;
  supplier: string;
  taxNumber: string;
  valorTotal: string;
  items: ProductModel[];
  stock: StockModel[];
  amount: string;
  status: string;
  address: AddressModel;
  creationDate: Date;
  comment: string;
}
