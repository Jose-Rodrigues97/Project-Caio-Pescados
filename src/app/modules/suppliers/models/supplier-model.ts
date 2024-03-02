//struct para post e get unitario do backend
export interface SupplierModel {
  supplierId: number;
  name: string;
  taxNumber: string;
  email: string;
  telephone: [
    {
      telephoneId: number;
      number: string;
      prefix: number;
      type: string;
      creationDate: Date;
      updateDate: Date;
    }
  ];
  address: {
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
  };
  image: {
    imageId: number;
    image: Blob;
    objectId: string;
    objectType: string
  };
  stateRegistration: string;
  branchActivity: string;
}
