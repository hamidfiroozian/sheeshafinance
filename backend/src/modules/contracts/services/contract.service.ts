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
    const provider = new ethers.providers.JsonRpcProvider(this.rpcEndPoint);

    const marketContract = new ethers.Contract(
      stakingAddress,
      StakingAbi.abi,
      provider
    );



    marketContract.on('MarketItemCreated', async (...any) => {
      let data = {
        itemId: any[0].toNumber(),
        collectionAddress: any[1],
        tokenId: any[2].toNumber(),
        seller: any[3],
        owner: any[4],
        price: any[5],
        sold: any[6]
      };

    });
  }


}
