import { Model, DataTypes } from "sequelize";
import sequelize from "../instances/mysql";

interface CategoriasInstance extends Model {
    id: number,
    nome: string,
    Empresa_id: number,
    prefixo: string,
    pai: string
}

export const Categoria = sequelize.define<CategoriasInstance>('Categorias', {
    id: {type: DataTypes.INTEGER},
    nome: {type: DataTypes.STRING},
    Empresa_id: {type: DataTypes.INTEGER},
    prefixo: {type: DataTypes.STRING},
    pai: {type: DataTypes.STRING}
},{
    tableName: "categorias",
    timestamps: false
})