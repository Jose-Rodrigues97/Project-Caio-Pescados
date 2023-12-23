import { IntermediateRegionModel } from "./intermediate-region-model";

export interface ImmediateRegionModel {
    id: number;
    nome: String;
    'regiao-intermediaria': IntermediateRegionModel;
}
