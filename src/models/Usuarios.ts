import { Model, DataTypes } from "sequelize";
import sequelize from "../instances/mysql";

interface UserInstance extends Model {
    codigo: number,
    nome: string,
    senha: string,
    email: string,
    Empresa_codigo: number,
    clientes_codigo: number
}

export const Usuario = sequelize.define<UserInstance>('Usuarios', {
    codigo: {type: DataTypes.INTEGER},
    nome: {type: DataTypes.STRING},
    senha: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    Empresa_codigo: {type: DataTypes.INTEGER},
    clientes_codigo: {type: DataTypes.INTEGER}
},{
    tableName: "usuarios",
    timestamps: false
})