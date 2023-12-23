import { RegionModel } from "./region-model"

export interface EstateModel {
    id: number;
    sigla: string;
    nome: string;
    regiao: RegionModel;
}