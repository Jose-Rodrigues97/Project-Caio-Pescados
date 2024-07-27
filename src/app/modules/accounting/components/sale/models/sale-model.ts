import { AddressModel } from "src/app/models/address/address-model";
import { CustomerModel } from "src/app/modules/customers/models/customer-model";

export interface SaleModel {
    salesOrderId: number;
    name: string;
    code: string;
    buyer: CustomerModel;
    creationDate: Date;
    updateDate: Date;
    quantity: number;
    deliveryAddress: AddressModel;
    total: number;
    status: string
}