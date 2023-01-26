import { Model, DataTypes } from "sequelize";
import sequelize from "../instances/mysql";

interface EmpresaInstance extends Model {
    codigo: number,
    nome: string,
    cnpj: string
}

export const Empresa = sequelize.define<EmpresaInstance>('Empresa', {
    codigo: {type: DataTypes.INTEGER},
    nome: {type: DataTypes.STRING},
    cnpj: {type: DataTypes.STRING}
},{
    tableName: "empresa",
    timestamps: false
})