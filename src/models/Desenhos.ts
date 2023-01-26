import { Model, DataTypes } from "sequelize";
import sequelize from "../instances/mysql";

interface DesenhoInstance extends Model {
    id: number,
    descricao: string,
    foto: string,
    tipo: string,
    material: string,
    tamanho: string,
    desenhista: string,
    caracteristicas: string,
    solicitante: string,
    prioridade: number,
    feito: number
}

export const Desenho = sequelize.define<DesenhoInstance>('Desenhos', {
    id: {type:DataTypes.STRING, primaryKey: true, autoIncrement: true},
    descricao: {type:DataTypes.STRING},
    foto: {type:DataTypes.STRING},
    tipo: {type:DataTypes.STRING},
    material: {type:DataTypes.STRING},
    tamanho: {type:DataTypes.STRING},
    desenhista: {type:DataTypes.STRING},
    caracteristicas: {type:DataTypes.STRING},
    solicitante: {type:DataTypes.STRING},
    prioridade: {type:DataTypes.STRING},
    feito: {type:DataTypes.STRING}
},{
    tableName: "desenhos",
    timestamps: false
})