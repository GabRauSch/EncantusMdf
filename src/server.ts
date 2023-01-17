import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path'
import main from './routes/main';

dotenv.config()


const server = express();

server.use(cors());
server.use(express.static(path.join(__dirname, './public')));
server.use(express.urlencoded({extended: true}));

server.use(main)

server.listen(process.env.PORT);