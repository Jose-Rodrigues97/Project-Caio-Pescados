import { UFModel } from "./uf-model"

export interface RegiaoIntermediariaModel {
    id: number;
    nome: string;
    UF: UFModel
}