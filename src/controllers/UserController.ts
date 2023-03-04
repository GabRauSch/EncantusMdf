import { Request, Response } from "express";
import { Usuario } from "../models/Usuarios";
import consoleTurnedOn from "../config/console";
import path from 'path'



export const index = (req: Request, res: Response)=>{
    res.json({data: 'pong'})
}

export const users = async (req: Request, res: Response)=>{
    consoleTurnedOn ? console.log(`id=users\n chamada de todos os usuarios\n autorização necessária\n ${__filename} `) : null;
    let users = await Usuario.findAll({
        attributes: {
            exclude: ['id', 'senha']
        }
    });

    res.json(users)
}

export const userById = async (req: Request, res: Response)=>{
    consoleTurnedOn ? console.log('id=userById\n chamada de usuario por ID\n autorização necessaria\n UserController') : null;

    let {id} = req.params;

    let user = await Usuario.findOne({
        where:{
            id
        },
        attributes:{
            exclude: ['id', 'senha']
        }
    })


    res.json(user)
}