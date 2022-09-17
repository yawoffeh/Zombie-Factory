import { ethers } from "hardhat";

async function main() {

  const zombieFactory = ethers.getContractFactory("ZombieFactory");
  const zombieContract = zombieFactory.deploy();

  zombieContract.deployed();

  console.log(`Zombie contract deployed to ${zombieContract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
