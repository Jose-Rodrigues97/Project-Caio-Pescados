import { MesoregionModel } from "./mesoregion-model"

export interface Microregion {
    id: number;
    nome: string;
    mesorregiao: MesoregionModel;
}