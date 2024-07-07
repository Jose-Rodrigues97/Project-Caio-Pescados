import { AddressModel } from "src/app/models/address/address-model";

export interface PurchaseModel {
  id: number;
  supplier: string;
  taxNumber: string;
  valorTotal: string;
  item: string;
  amount: string;
  value: string;
  status: string;
  address: AddressModel;
  creationDate: Date;
  comment: string;
}
