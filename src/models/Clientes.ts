import { Model, DataTypes } from "sequelize";
import sequelize from "../instances/mysql";

interface ClientesInstance extends Model {
  id: number,
  nome: string,
  Empresa_id: number,
  contato: string,
  email: string,
  fone: string,
  endereco: string,
  bairro: string,
  cidade: string,
  estado: string,
  cep: number,
  perc_desconto: number
}

export const Cliente = sequelize.define<ClientesInstance>('Cliente', {
  id: {type: DataTypes.INTEGER},
  nome: {type: DataTypes.STRING},
  Empresa_id: {type: DataTypes.INTEGER},
  contato: {type: DataTypes.STRING},
  email: {type: DataTypes.STRING},
  fone: {type: DataTypes.STRING},
  endereco: {type: DataTypes.STRING},
  bairro: {type: DataTypes.STRING},
  cidade: {type: DataTypes.STRING},
  estado: {type: DataTypes.STRING},
  cep: {type: DataTypes.INTEGER},
  perc_desconto: {type: DataTypes.FLOAT}
},{
    tableName: "clientes",
    timestamps: false
})