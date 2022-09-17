//SPDX: lincensed-identifier : UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract ZombieFactory {

  event NewZombie(uint zombieId, string name, uint dna);

  uint private totalZombies;
  uint dnaDigits = 16;
  uint dnaModulus = 10 ** dnaDigits;

  struct Zombie {
    string name;
    uint dna;
  }

  Zombie[] public zombies;

  function _createZombie(string memory _name, uint _dna) private {
    totalZombies += 1;
    uint id = totalZombies;
    emit NewZombie(id, _name, _dna);
  }

  function _generateRandomDna(string memory _str) private view returns (uint){
    uint rand = uint(keccak256(abi.encodePacked(_str)));
    return rand % dnaModulus;
  }

  function createRandomZombie(string memory _name) public {
    uint randDna = _generateRandomDna(_name);
    console.log("Zombie dna", randDna);
    _createZombie(_name, randDna);
  }

  function _getTotalZombies() private view returns (Zombie[] memory) {
    return zombies;
  }

  function getTotalNumberZombies() public view returns (uint) {
    console.log(totalZombies);
    return totalZombies;
  }
}
