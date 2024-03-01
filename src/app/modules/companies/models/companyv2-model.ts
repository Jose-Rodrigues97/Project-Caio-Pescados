export interface Companyv2Model {
    companyId: number;
    corporateName: string,
    taxNumber: string,
    address: string,
    district: string,
    city: string,
    estate: string,
    country: string,
    phone: string,
    email: string,
    totalCollaborators: number,
    isHeadquarters: boolean,
    image: Blob
}