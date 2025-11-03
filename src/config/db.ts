import {Options, Sequelize} from 'sequelize';
import dotenv from 'dotenv';


dotenv.config();

const options: Options = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  database: process.env.DB_NAME || 'mi_parada',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  dialect: 'postgres',
  logging: false,
};

export const sequelize = new Sequelize(options );

export const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export const db = {
  users: [],
  stops: [],
  syndicates: [],
  times: [],
  transports: [],
};
