export interface SupplierAddressModel {
  addressId: number;
  address: string;
  country: string;
  state: string;
  city: string;
  district: string;
  cep: string;
  complement: string;
  objectType: string;
  objectId: string;
  creationDate: Date;
  updateDate: Date
}
