async function main() {

  let zombieOne: string = "Zanzender";
  let zombieTwo: string = "Redelier";

  const zombieFactory = await hre.ethers.getContractFactory("ZombieFactory");
  const zombieContract = await zombieFactory.deploy();

  zombieContract.deployed();

  console.log(`Zombie contract deployed to ${zombieContract.address}`);

  let zombie1 = await zombieContract.createRandomZombie(zombieOne);
  await zombie1
  let zombie2 = await zombieContract.createRandomZombie(zombieTwo);
  await zombie2

  let total = await zombieContract.getTotalNumberZombies();
  await total
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
