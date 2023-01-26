import { Model, DataTypes } from "sequelize";
import sequelize from "../instances/mysql";

interface PedidosInstance extends Model {
    empresa_codigo:number, 
    numero:number, 
    codigo:number, 
    material_codigo:number, 
    altura:number, 
    comprimento:number, 
    largura:number, 
    peso:number, 
    valor:number, 
    referencia:string, 
    qtd:number, 
    valor_total:number, 
    descricao:string, 
    foto:string, 
    sequencia:number, 
    complemento: string, 
    material:string, 
}

export const Pedido = sequelize.define<PedidosInstance>('Pedido', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},empresa_codigo: {type: DataTypes.INTEGER},
    numero: {type: DataTypes.INTEGER},
    codigo: {type: DataTypes.INTEGER},
    material_codigo: {type: DataTypes.INTEGER},
    altura: {type: DataTypes.FLOAT},
    comprimento: {type: DataTypes.FLOAT},
    largura: {type: DataTypes.FLOAT},
    peso: {type: DataTypes.FLOAT},
    valor: {type: DataTypes.FLOAT},
    referencia: {type: DataTypes.STRING},
    qtd: {type: DataTypes.STRING},
    valor_total: {type: DataTypes.STRING},
    descricao: {type: DataTypes.STRING},
    foto: {type: DataTypes.STRING},
    complemento: {type: DataTypes.STRING},
    material: {type: DataTypes.STRING}
},{
    tableName: "itens_pedido",
    timestamps: false
})