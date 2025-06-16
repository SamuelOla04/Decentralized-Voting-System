# 🗳️ Decentralized Voting System

A smart contract-based voting system built with Solidity and Hardhat. This project demonstrates how to implement a basic on-chain voting mechanism where users can vote for candidates in a secure and transparent way.

## 🔧 Built With

- [Solidity](https://soliditylang.org/) – Smart contract language
- [Hardhat](https://hardhat.org/) – Ethereum development environment
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) – For test scripts

## 📁 Project Structure
contracts/
Contains all Solidity smart contract files. This is where the core decentralized voting logic lives. For this project, it includes DecentralizedVoting.sol.

test/
Includes JavaScript test scripts that verify the functionality and correctness of the smart contract using Hardhat and Chai assertions.

scripts/
Contains deployment scripts used to deploy the smart contract to a blockchain network (local, testnet, or mainnet).

hardhat.config.js
The configuration file for Hardhat, specifying compiler versions, network settings, and plugins.

package.json & package-lock.json
These files list the Node.js dependencies, scripts, and metadata for the project, allowing others to install and run it easily.

README.md
The main documentation file that explains the project, how to install dependencies, run tests, and deploy the contract.
