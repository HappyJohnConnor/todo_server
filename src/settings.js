import dotenv from 'dotenv';

dotenv.config();

const { env } = process;

export const {
  SECRET_KEY, HOST, DB_USERNAME, DB_PASSWORD, DB_NAME
} = env;
