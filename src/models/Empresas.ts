import { Model, DataTypes } from "sequelize";
import sequelize from "../instances/mysql";

interface EmpresaInstance extends Model {
    id: number,
    nome: string,
    cnpj: string
}

export const Empresa = sequelize.define<EmpresaInstance>('Empresa', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nome: {type: DataTypes.STRING},
    cnpj: {type: DataTypes.STRING}
},{
    tableName: "empresa",
    timestamps: false
})