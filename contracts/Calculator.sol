// SPDX-License-Identifier: MIT
pragma solidity =0.7.5;

contract Calculator {

    function add(uint256 x, uint256 y) public pure returns (uint256) {
        /* start function*/
        require(x + y >= x);
        return /*first number*/x + y/*second number*/
        /* end function*/;
    }

    function sub(uint256 x, uint256 y) public pure returns (uint256) {
        /* start function*/
        require(y <= x);
        return /*bigger number*/x - y/*samller number*/
        /* end function*/;
    }
    
    function subRTL(uint256 x, uint256 y) public pure returns (uint256) {
        /* start function*/
        require(y <= x);
        return /*bigger number‮/*rebmun rellams*/y - x/*
        ‭/*end function */;
    }
}