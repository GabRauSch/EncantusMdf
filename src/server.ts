import express, { ErrorRequestHandler, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path'
import main from './routes/main';
import sequelize from './instances/mysql';
import { MulterError } from 'multer';


dotenv.config()


sequelize.authenticate();

const server = express();

server.use(express.json())
server.use(cors());
server.use(express.static(path.join(__dirname, './public')));
server.use(express.urlencoded({extended: true}));


server.use(main)

server.use((req: Request, res: Response)=>{
    res.status(404);
    res.json({err: 'rota não encontrada'})
})

const errorHandler: ErrorRequestHandler = (err, req, res, next)=>{
    res.status(400);

    if(err instanceof MulterError){
        res.json({error: err.code})
    } else{
        res.json({error: 'erro na requisição'})
    }
}

server.use(errorHandler)

server.listen(process.env.PORT);