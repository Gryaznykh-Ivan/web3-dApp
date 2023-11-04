// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract LastMessageDApp {
    string public lastMessage;

    function storeMessage(string memory newMessage) public {
        lastMessage = newMessage;
    }

    function getLastMessage() public view returns (string memory) {
        return lastMessage;
    }
}