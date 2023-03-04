import { Model, DataTypes } from "sequelize";
import sequelize from "../instances/mysql";

interface UserInstance extends Model {
    id: number,
    nome: string,
    senha: string,
    email: string,
    empresa_id: number,
    permission: number
}

export const Usuario = sequelize.define<UserInstance>('Usuarios', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    nome: {type: DataTypes.STRING},
    senha: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    empresa_id: {type: DataTypes.INTEGER},
    permission: {type: DataTypes.INTEGER}
},{
    tableName: "usuarios",
    timestamps: false
})