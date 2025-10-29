
import { Options, Sequelize } from "sequelize";
import dotenv from "dotenv";



dotenv.config({
    path: '../.env'
});

const option:Options = {
    database: process.env.DB_NAME||'taleding',
    username: process.env.DB_USER||'Arfeliz',
    password: process.env.DB_PWD||'Aragon123',
    port: parseInt(process.env.DB_PORT!) || 3306,
    host: process.env.DB_HOST,
    dialect: 'mysql',
}

export const sequelize = new Sequelize(option);



export const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Here we go... connected :)');
    } catch (err) {
        console.error('[ERROR]: something went wrong connecting to the db, please check: ', err);
    }
}
