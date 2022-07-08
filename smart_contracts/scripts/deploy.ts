import { ethers } from "hardhat";
import {writeFileSync} from 'fs'
// const fs = require('fs');

async function main() {
  const [owner] = await ethers.getSigners();
  console.log("owner :", owner.address);

  const approveAmount = ethers.utils.parseUnits("8", "ether");

  const WSHEA = await ethers.getContractFactory("WSHEA");
  const wshea = await WSHEA.deploy("WSHEA", "WSHEA");

  await wshea.deployed();

  console.log("WSHEA deployed to:", wshea.address);

  const StakeContract = await ethers.getContractFactory("StakeContract");
  const stakeContract = await StakeContract.deploy(wshea.address);

  await stakeContract.deployed();
  console.log("StakeContract deployed to:", stakeContract.address);

  const TokenMarket = await ethers.getContractFactory("TokenMarket");
  const tokenMarketContract = await TokenMarket.deploy(wshea.address,owner.address);

  await tokenMarketContract.deployed();
  console.log("tokenMarketContract deployed to:", tokenMarketContract.address);

  // const t = await wshea.transfer(tokenMarketContract.address, approveAmount);
  // await t.wait()
  const a = await wshea.approve(tokenMarketContract.address, approveAmount);
  await a.wait()
  const balance = await wshea.balanceOf(tokenMarketContract.address);
  console.log("tokenMarketContract balance:", balance);



  let config = `
  export const stakingAddress = "${stakeContract.address}"
  export const tokenAddress = "${wshea.address}"
  export const tokenMarketAddress = "${tokenMarketContract.address}"
  `

  let data = JSON.stringify(config)
  writeFileSync('config.ts', JSON.parse(data))

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
