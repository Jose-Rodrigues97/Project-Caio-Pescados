import { SupplierAddressModel } from "./supplier-address-model";
import { TelephoneModel } from "./supplier-telephone-model";

//struct para post e get unitario do backend
export interface SupplierPutModel {
  name: string;
  taxNumber: string;
  email: string;
  telephone: TelephoneModel[];
  address: SupplierAddressModel;
  image: {
    imageId: number;
    image: Blob;
    objectId: string;
    objectType: string
  };
  stateRegistration: string;
  branchActivity: string;
}
