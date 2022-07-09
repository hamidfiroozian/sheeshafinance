import { Controller, Get } from '@nestjs/common';
import { StakingEventEntity } from '../entities/staking.mysql.entity';
import { ContractService } from '../services/contract.service';

@Controller('staking')
export class StakingController {
  constructor(private readonly contractService: ContractService) {}

  @Get()
  getStakingHistory(): Promise<StakingEventEntity[]> {
    return this.contractService.getAllStakingHistory();
  }
}
