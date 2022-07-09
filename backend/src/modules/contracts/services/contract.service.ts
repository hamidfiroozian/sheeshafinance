import { Injectable, Logger } from '@nestjs/common';
import * as StakingAbi from './../abis/StakeContract.sol/StakeContract.json';

import { configService } from 'src/core/config.service';
import { ethers } from 'ethers';
import axios from 'axios';
import { Entity } from 'typeorm';
import { stakingAddress } from "../../../../config";


@Injectable()
export class ContractService {

  stakingContractAddress: string;
  rpcEndPoint: string;

  constructor(

  ) {
    // this.collectionAddresses = this.collectionService.getCollectionsAddresses();
    this.rpcEndPoint = configService.getRpcEndpoint();
    this.listenToMarketplaceEvents()
  }






  listenToMarketplaceEvents() {
    console.log('srart listening to event');
    console.log('this.rpcEndPoint', this.rpcEndPoint);
    const provider = new ethers.providers.JsonRpcProvider(this.rpcEndPoint);

    const stakingContract = new ethers.Contract(
      stakingAddress,
      StakingAbi.abi,
      provider
    );



    stakingContract.on('staked', async (...any) => {
      console.log(any)
    });
    stakingContract.on('unStaked', async (...any) => {
      console.log('stakingContract', 'unStake')
      const amount = any[1].toNumber();
      const address = any[0];

    });
  }


}
