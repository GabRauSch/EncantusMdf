import { Request, Response } from "express";
import {unlink} from 'fs/promises';
import consoleTurnedOn from "../config/console";
import { Desenho } from "../models/Desenhos";
import { Op } from "sequelize";
import sharp from 'sharp';



export const desenhos = async (req: Request, res: Response)=>{
    consoleTurnedOn 
        ? console.log('id=desenhos\n chamada de desenhos\n query. e.=?limit="10"&?offset="10"\n autorização necessaria\n DesenhoController') 
        : null;
    let {limit, offset} = req.query

    if(!limit || !offset){
        limit = '10';
        offset = '0'
    }
    
    let desenho = await Desenho.findAll({
        limit: parseInt(limit as string),
        offset: parseInt(offset as string)
    })
   
    res.json(desenho);
    return;
}

export const novoDesenho = async (req: Request, res: Response)=>{ 
    consoleTurnedOn 
    ? console.log('id=novoDesenho\n Criar novo desenho\n parametros=null \n autorização necessaria\n DesenhoController') 
    : null;
    let {descricao, tipo, material, tamanho, desenhista, caracteristicas, solicitante, prioridade, feito} = req.body;

    let fileName = '';
    console.log(req.file)
    if(req.file){
        console.log(req.file.filename);
        fileName = `${req.file.filename}.jpg`

        await sharp(req.file.path)
            .resize(300)
            .toFormat('jpeg')
            .toFile(`./public/media/${fileName}`);

        await unlink(req.file.path);
        
    }

    if(descricao == null || req.file == null || tipo == null || tamanho == null || solicitante == null || prioridade == null || feito == null){
        res.json({msg:'Faltando informações importantes'})
        return
    }


    const desenho = await Desenho.create({
        "descricao": descricao,
        "foto": fileName,
        "tipo": tipo,
        "material": material,
        "tamanho": tamanho,
        "desenhista": desenhista,
        "caracteristicas": caracteristicas,
        "solicitante": solicitante,
        "prioridade": prioridade ,
        "feito": feito,
    });

    res.json({msg: "Novo desenho criado com sucesso!"});
    return;
}



export const deletar = async (req: Request, res: Response)=>{
    if(!req.params.id){
        res.json({msg: 'desenho não encontrado!'});
        return;
    }

    const deleteDesenho = await Desenho.findByPk(req.params.id)
    

    if(deleteDesenho){
        await unlink(`./public/media/${deleteDesenho.foto}`);
        await deleteDesenho.destroy();
    }

    res.json({msg: "deletado com sucesso!"});
    return;
}
