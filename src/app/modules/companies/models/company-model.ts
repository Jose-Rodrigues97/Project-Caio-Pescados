export interface CompanyModel {
    companyId: number;
    corporateName: string;
    taxNumber: string;
    email: string;
    telephones: [
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
    companyExtension: {
        companyExtensionId: number;
        fantasyName: string;
        cnae: string;
        stateRegistration: string;
        revenueStatus: string;
        foundationDate: Date;
        totalCollaborators: number;
        creationDate: Date;
        updateDate: Date
    }
}