const { expect } = require("chai");
const { ethers } = require("hardhat");
const { ONE_ETHER, TEN_ETHER, ELEVEN_ETHER, ONE, TWO } = require("./constant");

describe("GuessTheNumber", function () {
    let guessthenumber;

    beforeEach(async function () {
        const GuessTheNumber = await ethers.getContractFactory("GuessTheNumber");
        guessthenumber = await GuessTheNumber.deploy(TWO,{value: TEN_ETHER});
        await guessthenumber.deployed();
    });

    it("Guess should be failed", async function () {
        await expect(guessthenumber.guess(ONE, {value: ONE_ETHER})).to.emit(guessthenumber, "wrongNumber")
        .withArgs("You've made an incorrect guess!");
    });

    // 😈  should be success case
    it("Guess should be success", async function () {
        await expect(guessthenumber.guess(TWO, {value: ONE_ETHER})).to.emit(guessthenumber, "success")
        .withArgs("You guessed the correct number!");
    });

    it("getValue initialized contract balance", async function () {
        expect(await guessthenumber.getValue()).to.equal(TEN_ETHER);
    });

    it("getValue after someone guess the number", async function () {
        await guessthenumber.guess(TWO, {value: ONE_ETHER});
        expect(await guessthenumber.getValue()).to.equal(ELEVEN_ETHER);
    });
});
