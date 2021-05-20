import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import { POSTGRES_DATABASE, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_USER } from 'src/constants';
require('dotenv').config();

class ConfigService {
    constructor() {}
    
    public getTypeOrmConfig(): TypeOrmModuleOptions {
        console.log(__dirname + '/../model/*.entities{.ts,.js}')
        return {
            type: 'postgres',
            keepConnectionAlive: true,
            host: POSTGRES_HOST,
            port: POSTGRES_PORT || 3306,
            database: POSTGRES_DATABASE,
            username: POSTGRES_USER,
            password: POSTGRES_PASSWORD,
            synchronize: true,
            entities: ['**/*.entity{.ts,.js}'],
            migrationsTableName: 'migration',
            migrations: ['src/migration/*.ts'],
            cli: {
              migrationsDir: 'src/migration',
            },

        };
    }
}

const configService = new ConfigService();
export {configService};