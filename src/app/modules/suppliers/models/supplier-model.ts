import { ImageModel } from "../../themes/models/image-model";
import { AddressModel } from "src/app/models/address/address-model";
import { TelephoneModel } from "src/app/models/telephone/telephone-model";

//struct para post e get unitario do backend
export interface SupplierModel {
  supplierId: string;
  name: string;
  taxNumber: string;
  email: string;
  telephones: TelephoneModel[];
  address: AddressModel;
  image: ImageModel;
  stateRegistration: string;
  branchActivity: string;
}
