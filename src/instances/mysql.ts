import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config()

const sequelize = new Sequelize(
    process.env.MYDB as string,
    process.env.MYDBUSER as string,
    process.env.MYDBPASS as string,
    {
        dialect: 'mysql',
        port: parseInt(process.env.MYDBPORT as string)
    }
);

export default sequelize