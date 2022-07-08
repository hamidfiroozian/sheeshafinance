import { Module } from '@nestjs/common';
import { ConnectionsEnum } from './core/connections.enum';
import { Holder } from './core/decorators';
import { getConnection } from 'typeorm';
import { ContractModule } from './modules/contracts/contract.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './core/config.service';


@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig('mysql')),
    
    ContractModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    Holder.setConnections({
      mysql: getConnection(ConnectionsEnum.MYSQL)
    });
  }
}

