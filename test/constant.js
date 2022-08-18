const { ethers } = require("hardhat");

const ONE_ETHER = ethers.utils.parseEther("1");
const TEN_ETHER = ethers.utils.parseEther("10");
const ELEVEN_ETHER = ethers.utils.parseEther("11");

const MAX_UINT256 = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
const ZERO = "0";
const ONE = "1";
const TWO = "2";

module.exports = {
    MAX_UINT256,
    ZERO,
    ONE,
    TWO,
    ONE_ETHER,
    TEN_ETHER,
    ELEVEN_ETHER
  };
  