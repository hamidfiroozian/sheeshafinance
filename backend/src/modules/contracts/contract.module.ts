import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StakingController } from './controllers/staking.controller';
import { StakingEventEntity } from './entities/staking.mysql.entity';
import { ContractService } from './services/contract.service';

@Module({
  imports: [TypeOrmModule.forFeature([StakingEventEntity], 'mysql')],
  controllers: [StakingController],
  providers: [ContractService],
  exports: [ContractService],
})
export class ContractModule {}
