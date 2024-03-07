export interface CompanyAddressModel {
    addressId: number;
    address: string;
    country: string;
    estate: string;
    city: string;
    district: string;
    cep: string;
    complement: string;
    objectType: string;
    objectId: string;
    creationDate: Date;
    updateDate: Date
}