import {
  HOST, DB_USERNAME, DB_PASSWORD, DB_NAME
} from '../settings';

export const config = {
  HOST,
  USER: DB_USERNAME,
  PASSWORD: DB_PASSWORD,
  DB: DB_NAME,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
