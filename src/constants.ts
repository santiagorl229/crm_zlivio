import * as dotenv from 'dotenv';
dotenv.config();

export const POSTGRES_HOST= 'localhost';
export const POSTGRES_PORT=5432
export const POSTGRES_USER='postgres'
export const POSTGRES_PASSWORD='postgres'
export const POSTGRES_DATABASE='crmzlivio'
export const PORT=3000
export const MODE='DEV'
export const RUN_MIGRATIONS=true