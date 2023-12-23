import { ImmediateRegionModel } from "./immediate-region-model";
import { Microregion } from "./microregion-model";

export interface CountyModel {
    id: number;
    nome: String;
    microrregiao: Microregion;
    'regiao-imediata': ImmediateRegionModel;
}
