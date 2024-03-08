import { CompanyAddressModel } from "./company-address-model";
import { CompanyExtModel } from "./company-ext-model";
import { CompanyImageModel } from "./company-image-model";
import { TelephoneModel } from "./telephone-model";

export interface CompanyModel {
    companyId: string;
    corporateName: string;
    taxNumber: string;
    email: string;
    telephones: TelephoneModel[];
    address: CompanyAddressModel;
    image: CompanyImageModel;
    companyExtension: CompanyExtModel;
}