import { CountyModel } from "./county-model";

export interface CityModel {
    id: number;
    nome: string;
    municipio: CountyModel;
}