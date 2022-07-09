import { Injectable, Logger } from '@nestjs/common';
import * as StakingAbi from './../abis/StakeContract.sol/StakeContract.json';

import { configService } from 'src/core/config.service';
import { ethers } from 'ethers';
import axios from 'axios';
import { Entity, Repository } from 'typeorm';
import { stakingAddress } from '../../../../config';
import { InjectRepository } from '@nestjs/typeorm';
import { StakingEventEntity } from '../entities/staking.mysql.entity';
import { StakingEventEnum } from '../enums/events.enum';

@Injectable()
export class ContractService {
  stakingContractAddress: string;
  rpcEndPoint: string;

  constructor(
    @InjectRepository(StakingEventEntity, 'mysql')
    private readonly stakingEventEntityRepo: Repository<StakingEventEntity>,
  ) {
    // this.collectionAddresses = this.collectionService.getCollectionsAddresses();
    this.rpcEndPoint = configService.getRpcEndpoint();
    this.listenStakingEvents();
  }

  listenStakingEvents() {
    console.log('srart listening to event');
    console.log('this.rpcEndPoint', this.rpcEndPoint);
    const provider = new ethers.providers.JsonRpcProvider(this.rpcEndPoint);

    const stakingContract = new ethers.Contract(
      stakingAddress,
      StakingAbi.abi,
      provider,
    );

    stakingContract.on('staked', async (...any) => {
      let stakeAmount = ethers.utils.parseUnits(any[1].toString(), 'ether');

      // const amount = any[1].toNumber();
      const address = any[0];
      const txId = any[2]['transactionHash'];

      this.stakingEventEntityRepo.save({
        amount: stakeAmount.toString(),
        event: StakingEventEnum.Stake,
        address: address,
        tx_id: txId,
      });
    });
    stakingContract.on('unStaked', async (...any) => {
      const address = any[0];
      const txId = any[2]['transactionHash'];

      let unStakeAmount = ethers.utils.parseUnits(any[1].toString(), 'ether');

      this.stakingEventEntityRepo.save({
        amount: unStakeAmount.toString(),
        event: StakingEventEnum.UnStake,
        address: address,
        tx_id: txId,
      });
    });
  }

  getAllStakingHistory(): Promise<StakingEventEntity[]> {
    return this.stakingEventEntityRepo.find();
  }
}
