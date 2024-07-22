import { AddressModel } from "../../../models/address/address-model";
import { TelephoneModel } from "../../../models/telephone/telephone-model";
import { ImageModel } from "../../themes/models/image-model";
import { CollaboratorExtensionModel } from "./collaborator-extension-model";

export interface CollaboratorModel {
    userId: string;
    name: string;
    surname: string;
    taxNumber: string;
    email: string;
    role: string;
    telephones: TelephoneModel[];
    address: AddressModel;
    image: ImageModel;
    userExtensionModel: CollaboratorExtensionModel
}