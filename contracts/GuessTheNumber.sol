// SPDX-License-Identifier: NONE
pragma solidity =0.7.5;

/*
 * @source: https://youtu.be/P_Mtd5Fc_3E
 * @author: Shahar Zini
 * @revised: 0x91d9
 */

contract GuessTheNumber {
    uint256 _secretNumber;
    address payable _owner;

    event success(string);
    event wrongNumber(string);
    
    constructor(uint256 secretNumber) payable {
        require(secretNumber <= 10);
        _secretNumber = secretNumber;
        _owner = msg.sender;    
    }

    modifier onlyOwner() {
        require(msg.sender == _owner,"Restricted for contract owner");
        _;
    }
    
    function _checkAndTransferPrize(uint256 amount, uint256 number, address payable account) internal returns (bool) {
        if (number == _secretNumber) {
            account.transfer(amount);
            emit success("You guessed the correct number!");
            return true;
        } 
        else {
            emit wrongNumber("You've made an incorrect guess!");
            return false;
        }
    }
    
    function kill() onlyOwner external {
        selfdestruct(_owner);
    }

    function getValue() view public returns (uint256) {
        return address(this).balance;
    }

    function guess(uint256 n) payable public {
        require(msg.value > 10000000 gwei,"msg.value is under 0.01 ether");
        
        uint256 p = address(this).balance;
        _checkAndTransferPrize(/*The prize‮/*rebmun desseug*/n , p/*‭
                /*The user who should benefit */,msg.sender);
    }
}