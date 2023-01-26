import { Request, Response } from "express";
import { Usuario } from "../models/Usuarios";
import consoleTurnedOn from "../config/console";
import path from 'path'
import { Pedido } from "../models/Itens_pedidos";
import { Op } from "sequelize";



export const pedidos = async (req: Request, res: Response)=>{
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
            exclude: ['codigo']
        },
        limit: parseInt(limit as string),
        offset: parseInt(offset as string)
    })
   
    res.json(pedidos);
    return;
}
export const pedidosByNumber= async (req: Request, res: Response)=>{
    let {number} = req.params;

    const pedidos = await Pedido.findAll({
        where: {
            numero: number
        },
        attributes: {
            exclude:['codigo', 'material_codigo']
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

export const novoPedido = async (req: Request, res: Response)=>{
    let {
        empresa_codigo,
        numero,
        altura,
        comprimento,
        largura,
        peso,
        valor,
        referencia,
        qtd,
        descricao,
        foto,
        complemento,
        material
    } = req.body

    

    if(empresa_codigo == null || referencia == null || numero == null 
        || descricao == null || largura == null || altura == null 
        || comprimento == null || valor == null || qtd == null)
    {
        res.json({err: 'informações sobre pedido insuficiente.'});
        return;
    }

   
   
    const pedido = await Pedido.create({
        empresa_codigo,
        numero,
        altura,
        comprimento,
        largura,
        peso,
        valor,
        referencia,
        qtd,
        descricao,
        foto,
        complemento,
        material
    });

    res.json({msg: 'pedido criado com sucesso!'});
    return;
}

export const deleteById = async (req: Request, res: Response)=>{
    let {id}= req.params;

    const pedido = await Pedido.findByPk(id);
    if(pedido){
        pedido.destroy();
    } else{
        res.json({err: 'pedido não encontrado!'});
        return
    };
    
    res.json({msg: "deletado com sucesso!"});
    return;
}

export const pedidoById = async (req: Request, res: Response)=>{
    let {id} = req.params;

    const pedido = await Pedido.findByPk(id);

    if(pedido){
        res.json(pedido);
        return
    } else{
        res.json({err: 'pedido não encontrado!'});
        return;
    }

}