import { UFModel } from "./uf-model"

export interface MesoregionModel {
    id: number;
    nome: string;
    UF: UFModel;
}