import { UFModel } from "./uf-model"

export interface IntermediateRegionModel {
    id: number;
    nome: string;
    UF: UFModel;
}