const { expect } = require("chai");
const { ethers } = require("hardhat");
const { MAX_UINT256, ZERO, ONE, TWO } = require("./constant");

describe("Calculator", function () {
  let calculator;

  beforeEach(async function () {
    const Calculator = await ethers.getContractFactory("Calculator");
    calculator = await Calculator.deploy();
    await calculator.deployed();
  });

  describe("Add function", function () {
    it("Add should be sucess", async function () {
      expect(await calculator.add(ZERO, ONE)).to.equal(ONE);
    });

    it("Add should be reverted", async function () {
      await expect(calculator.add(MAX_UINT256, ONE)).to.be.reverted;
    });
  });

  describe("Sub function", function () {
    it("Sub should be success", async function () {
      expect(await calculator.sub(TWO, ONE)).to.equal(ONE);
      expect(await calculator.sub(ONE, ONE)).to.equal(ZERO);
      expect(await calculator.sub(ZERO, ZERO)).to.equal(ZERO);
    });

    it("Sub should be reverted", async function () {
      await expect(calculator.sub(ZERO, ONE)).to.be.reverted;
    });
  });

  describe("Sub RTL function", function () {
    it("Sub right-to-left should return overflow", async function () {
      expect(await calculator.subRTL(TWO, ONE)).to.equal(MAX_UINT256);
    });

    it("Sub right-to-left should be reverted", async function () {
      await expect(calculator.subRTL(ONE, TWO)).to.be.reverted;
    });
  });
});
