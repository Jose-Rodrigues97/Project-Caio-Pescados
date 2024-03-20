import { AddressModel } from "../../../models/address/address-model";
import { CompanyExtModel } from "./company-ext-model";
import { ImageModel } from "../../../models/image/image-model";
import { TelephoneModel } from "../../../models/telephone/telephone-model";

export interface Companyv3Model {
    corporateName: string;
    taxNumber: string;
    email: string;
    telephones: TelephoneModel[];
    address: AddressModel;
    image: ImageModel;
    companyExtension: CompanyExtModel
}