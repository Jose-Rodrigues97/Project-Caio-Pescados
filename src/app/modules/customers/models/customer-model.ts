import { AddressModel } from "src/app/models/address/address-model";
import { TelephoneModel } from "src/app/models/telephone/telephone-model";
import { ImageModel } from "../../themes/models/image-model";

export interface CustomerModel {
    buyerId: string;
    name: string;
    typePerson: string;
    taxRecord: string;
    isActive: boolean;
    creationDate: Date;
    updateDate: Date;
    telephones: TelephoneModel[];
    address: AddressModel;
    image: ImageModel;
}