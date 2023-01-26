import { Model, DataTypes } from "sequelize";
import sequelize from "../instances/mysql";

interface CategoriasInstance extends Model {
    codigo: number,
    nome: string,
    Empresa_codigo: number,
    prefixo: string,
    pai: string
}

export const Categoria = sequelize.define<CategoriasInstance>('Categorias', {
    codigo: {type: DataTypes.INTEGER},
    nome: {type: DataTypes.STRING},
    Empresa_codigo: {type: DataTypes.INTEGER},
    prefixo: {type: DataTypes.STRING},
    pai: {type: DataTypes.STRING}
},{
    tableName: "categorias",
    timestamps: false
})