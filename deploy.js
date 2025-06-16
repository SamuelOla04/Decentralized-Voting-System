const { ethers } = require("hardhat");

async function main() {
  const Contract = await ethers.getContractFactory("DecentralizedVoting");
  
  
  const contractInstance = await Contract.deploy();
  await contractInstance.waitForDeployment(); 
  const address = await contractInstance.getAddress(); 
  console.log("Contract deployed to:", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
