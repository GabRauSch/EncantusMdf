import { Model, DataTypes } from "sequelize";
import sequelize from "../instances/mysql";

interface PedidoInstance extends Model {
    id: number,
    finished: Date | null,
    paid: Date | null,
    delivered: Date | null,
    client_id: Date | null
}

export const Pedido = sequelize.define<PedidoInstance>('Pedido', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    finished: {type: DataTypes.DATE, allowNull: true},
    paid: {type: DataTypes.DATE, allowNull: true},
    delivered: {type: DataTypes.DATE, allowNull: true},
    client_id: {type: DataTypes.INTEGER}
},{
    tableName: "pedido",
    timestamps: false
})