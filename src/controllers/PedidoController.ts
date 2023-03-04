import { Request, Response } from "express";
import { Usuario } from "../models/Usuarios";
import consoleTurnedOn from "../config/console";
import path from 'path'
import { ItensPedido } from "../models/Itens_pedidos";
import { Pedido } from "../models/Pedidos";
import { Op } from "sequelize";
import { Empresa } from "../models/Empresas";


export const itensPedidos = async (req: Request, res: Response)=>{
    consoleTurnedOn 
        ? console.log('id=pedidos\n chamada de pedidos mais recentes\n query. e.=?limit="10"&?offset="10"\n autorização necessaria\n PedidoController') 
        : null;
    let {limit, offset} = req.query;
    console.log(limit, offset)

    if(!limit || !offset){
        limit = '10';
        offset = '0'
    }
    console.log(limit, offset)
    
    let pedidos = await Pedido.findAll({
        attributes: {
            exclude: ['id']
        },
        limit: parseInt(limit as string),
        offset: parseInt(offset as string)
    })
   
    res.json(pedidos);
    return;
}
export const itensPedidosByNumber= async (req: Request, res: Response)=>{
    let {number} = req.params;

    const pedidos = await Pedido.findAll({
        where: {
            pedido_id: number
        },
        attributes: {
            exclude:['id']
        }
    })
    
    if(pedidos){
        res.json(pedidos);
        return;
    } else{
        res.json({err: 'número de pedido invalido!'});
        return;
    }
    
}

export const novoItemPedido = async (req: Request, res: Response)=>{
    let {
        pedido_id,
        desenho_id,
        empresa_id,
        valor,
        qtd,
        descricao,
    } = req.body

    

    if(empresa_id == null  || pedido_id == null 
        || descricao == null  || valor == null || qtd == null)
    {
        res.json({err: 'informações sobre pedido insuficiente.'});
        return;
    }

    const empresa = await Empresa.findByPk(empresa_id);

    if(!empresa){
        res.json({err: "Empresa não existe. Crie uma antes de atribuir um pedido"});
        return;
    }
    const pedido = await Pedido.findByPk(pedido_id);

    if(!pedido){
        res.json({err: "Pedido não existe"});
        return;
    } 
   
    const itemPedido = await ItensPedido.create({
        pedido_id,
        desenho_id,
        empresa_id,
        valor,
        qtd,
        descricao,
    });

    res.json({msg: `item do pedido de número ${pedido.id} criado com sucesso!`});
    return;
}

export const deleteItemById = async (req: Request, res: Response)=>{
    let {id}= req.params;

    const itemPedido = await ItensPedido.findByPk(id);
    if(itemPedido){
        itemPedido.destroy();
    } else{
        res.json({err: 'pedido não encontrado!'});
        return
    };
    
    res.json({msg: "deletado com sucesso!"});
    return;
}

export const pedidos = async (req: Request, res: Response)=>{
    let {limit, offset} = req.query;

    if(!limit || !offset){
        limit = '10';
        offset = '0'
    }

    const pedidos = await Pedido.findAll({
        limit: parseInt(limit as string),
        offset: parseInt(offset as string)
    });

    res.json({
        quantidade: parseInt(limit as string) - parseInt(offset as string),
        data: pedidos
    })
    return;
}

export const pedidoById = async (req: Request, res: Response)=>{
    let {id} = req.params;

    const pedido = await Pedido.findByPk(id);

    if(!pedido){
        res.json({err: 'pedido não encontrado!'});
        return;    
    } 
    res.json(pedido);
    return
}

export const novoPedido = async (req: Request, res: Response)=>{
    let {client_id} = req.body;

    if(client_id == null){
        res.json("Selecione um cliente para o pedido");
        return;
    }

    const pedido = await Pedido.create({
        client_id
    })

    res.json({msg: "Pedido criado com sucesso!"});
    return;
    
}

export const updatePedido = async (req: Request, res: Response)=>{
    let {id} = req.params;
    let {finished, delivered, paid} = req.body;

    console.log(id)

    const pedido = await Pedido.findByPk(id);
    
    if(pedido == null){
        res.json({err: "Pedido não encontrado"});
        return;
    }

    if(finished == true && (paid == false|| delivered == false)){
        res.json({msg: "O pedido dever ser pago e entregue antes de finalizado"});
        return;
    }

    finished ? pedido.finished = new Date() : pedido.finished = null;
    delivered ? pedido.delivered = new Date() : pedido.delivered = null;
    paid ? pedido.paid = new Date() : pedido.paid = null;

    pedido.save();

    res.json({msg: "Pedido atualizado"});
    return;

}



export const deletePedidoById = async (req: Request, res: Response)=>{
   let {id} = req.params;

   if(id == null){
    res.json("passe o id");
    return;
   }
 
   const pedido = await Pedido.destroy({
        where: {
            id
        } 
   })
   
   
    res.json({msg: "Deletado com sucesso!"});
    return;
}