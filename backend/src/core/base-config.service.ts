import { config } from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import * as path from 'path';

export const root: string = path.resolve(__dirname, '..');

config();

export class BaseConfig {
  constructor(private readonly env: { [k: string]: string | undefined }) {}

  public getTypeOrmConfig(
    type: 'mysql' | 'postgres' = 'postgres',
  ): TypeOrmModuleOptions {
    return {
      name: type,
      type,
      url: this.getValue(`${type.toUpperCase()}_DATABASE_URL`),
      entities: [__dirname + `/../**/*.entity{.ts,.js}`],
      // entities: [__dirname + `/../**/user.entity{.ts,.js}`],/
      retryAttempts: 10,
      retryDelay: 3000,
      synchronize: this.getDatabaseSynchronize(),
    };
  }

  public getDatabaseSynchronize(): boolean {
    try {
      return this.asBool(this.getValue('SYNCHRONIZE', true));
    } catch (e) {
      return true;
    }
  }

  protected asBool(v: string): boolean {
    return ['t', 'true', '1'].includes(v.toLowerCase());
  }

  public getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value || '';
  }

  protected asInt(v: string): number {
    return +v;
  }
}
