import * as dotenv from 'dotenv';
dotenv.config();

export const POSTGRES_HOST= '127.0.0.1';
export const POSTGRES_PORT=5432
export const POSTGRES_USER='postgres'
export const POSTGRES_PASSWORD='postgres'
export const POSTGRES_DATABASE='crmZlivio'
export const PORT=3000
export const MODE='DEV'
export const RUN_MIGRATIONS=true