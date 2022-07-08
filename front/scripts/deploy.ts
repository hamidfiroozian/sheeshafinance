// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import hre from "hardhat";
import fs from "fs";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const {} = await hre.ethers.getSigners();

  const multiSig = "0x024177D6C236408dE54D4AB9bB19b311F04B99eE"; // Gnosis
  // const gnosis = "0x024177D6C236408dE54D4AB9bB19b311F04B99eE"; // Account #0
  const vault = "0xbCE1eA0Fc050FD50B31a5dC5E57a10cfdd1952c9";
  // const epochRobot = "0xbCE1eA0Fc050FD50B31a5dC5E57a10cfdd1952c9";
  const epochRobot = "0x024177D6C236408dE54D4AB9bB19b311F04B99eE";

  const WEAPON = await ethers.getContractFactory("WEAPON");
  const weapon = await WEAPON.deploy(vault, multiSig);
  await weapon.deployed();
  console.log("mw2 deployed to:", weapon.address);

  const MWStaking = await ethers.getContractFactory("MWStaking");
  const mwStaking = await MWStaking.deploy(
    weapon.address,
    multiSig,
    epochRobot
  );
  await mwStaking.deployed();
  console.log("mwStaking address", mwStaking.address);
  console.log(" * * * * * * * * * * * ");

  // console.log("now we need to setContract address to WEAPON");
  // const stakingContract = await weapon.setStakingContract(mwStaking.address);
  // // const stakingContract = await weapon.connect(multiSig).setStakingContract(mwStaking.address);
  // const d = await stakingContract.wait()

  // console.log("weapon stakingContract done hash", d.transactionHash);
  // console.log(" * * * * * * * * * * * ");
  // console.log("weapon stakingContract waiting for confirmation");

  // const getStakingContract = await weapon.getStakingContract();
  // console.log("weapon getStakingContract", getStakingContract);

  // console.log("need to toggleStaking in WEAPON");
  // const toggle = await weapon.toggleStaking();
  // console.log("weapon toggleStaking done hash", toggle.hash);
  // console.log(" * * * * * * * * * * * ");

  // console.log("mwStaking addEpochs");

  // const addEpochs = await mwStaking.addEpochs(1, 10);
  // await addEpochs.wait();
  // console.log("mwStaking addEpochs Done");
  // console.log(" * * * * * * * * * * * ");

  // console.log("mwStaking setPoolSize");

  // const setPoolSize = await mwStaking.setPoolSize(10);
  // await setPoolSize.wait();
  // console.log("mwStaking setPoolSize Done");

  console.log("mwStaking deployed to:", mwStaking.address);

  fs.writeFileSync(
    "./config.ts",
    `export const multiSig = "${multiSig}"\nexport const weaponAddress = "${weapon.address}"\nexport const mwStakingAddress = "${mwStaking.address}"`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
