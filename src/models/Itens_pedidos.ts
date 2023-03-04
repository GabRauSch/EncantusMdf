import { Model, DataTypes } from "sequelize";
import sequelize from "../instances/mysql";

interface ItensInstance extends Model {
    id:number, 
    pedido_id: number,
    desenho_id: number,
    empresa_id:number, 
    valor:number, 
    qtd:number, 
    descricao:string, 
}

export const ItensPedido = sequelize.define<ItensInstance>('itens_pedido', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    pedido_id: {type: DataTypes.INTEGER},
    desenho_id: {type: DataTypes.INTEGER},
    empresa_id: {type: DataTypes.INTEGER},
    valor: {type: DataTypes.FLOAT},
    qtd: {type: DataTypes.STRING},
    descricao: {type: DataTypes.STRING},
},{
    tableName: "itens_pedido",
    timestamps: false
})