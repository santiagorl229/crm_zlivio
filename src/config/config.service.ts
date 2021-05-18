import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MODE, POSTGRES_HOST, POSTGRES_PORT } from 'src/constants';

class ConfigService {

  constructor() { }

  public isProduction() {
    return MODE != 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: POSTGRES_HOST,
      port: POSTGRES_PORT,
      username: this.getValue('POSTGRES_USER'),
      password: this.getValue('POSTGRES_PASSWORD'),
      database: this.getValue('POSTGRES_DATABASE'),
      entities: ['**/*.entity{.ts,.js}'],
      migrationsTableName: 'migration',
      migrations: ['src/migration/*.ts'],
      cli: {
        migrationsDir: 'src/migration',
      },
      ssl: this.isProduction(),
    };
  }
    getValue(arg0: string): string {
        throw new Error('Method not implemented.');
    }
}

const configService = new ConfigService()
export { configService };