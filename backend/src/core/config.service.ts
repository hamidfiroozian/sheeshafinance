import { SwaggerDocumentOptions } from '@nestjs/swagger';
import { ContractModule } from 'src/modules/contracts/contract.module';

import { BaseConfig } from './base-config.service';

class Config extends BaseConfig {
  public getExtraModels(): SwaggerDocumentOptions {
    return {
      extraModels: [ContractModule],
    };
  }

  public getStakingContractAddress(): string {
    return this.getValue('STAKING_ADDRESS');
  }
  public getRpcEndpoint(): string {
    return this.getValue('RPC_ENDPOINR');
  }
}

const configService = new Config(process.env);

export { configService };
// type ConfigService = typeof configService;

// export { configService, ConfigService };
