import { RegiaoModel } from "./region-model"

export interface UFModel {
    id: number;
    sigla: string;
    nome: string;
    regiao: RegiaoModel
}