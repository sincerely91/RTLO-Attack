const hre = require("hardhat");

async function main() {
  const Calculator = await hre.ethers.getContractFactory("Calculator");
  const GuessTheNumber = await hre.ethers.getContractFactory("GuessTheNumber");
  const calculator = await Calculator.deploy();
  const guessthenumber = await GuessTheNumber.deploy(2);

  await calculator.deployed();
  await guessthenumber.deployed();

  console.log("Calculator deployed to:", calculator.address);
  console.log("GuessTheNumber deployed to:", guessthenumber.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
