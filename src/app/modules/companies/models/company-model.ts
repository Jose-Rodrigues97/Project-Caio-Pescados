import { AddressModel } from "../../../models/address/address-model";
import { CompanyExtModel } from "./company-ext-model";
import { TelephoneModel } from "../../../models/telephone/telephone-model";
import { ImageModel } from "../../themes/models/image-model";

export interface CompanyModel {
    companyId: string;
    corporateName: string;
    taxNumber: string;
    email: string;
    telephones: TelephoneModel[];
    address: AddressModel;
    image: ImageModel;
    companyExtension: CompanyExtModel;
}