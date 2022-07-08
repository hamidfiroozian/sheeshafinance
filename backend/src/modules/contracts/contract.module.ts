import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractService } from './services/contract.service';

@Module({
  imports: [],
  providers: [ContractService],
  exports: [ContractService]
})
export class ContractModule {}
