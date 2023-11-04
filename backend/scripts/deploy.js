// https://goerli.etherscan.io/address/0x410cb6fdc151521695bac37002afe471c393c70e

const start = async () => {
  const LastMessageDApp = await ethers.getContractFactory("LastMessageDApp");

  const dApp = await LastMessageDApp.deploy();
  console.log("Contract deployed to address:", dApp.address);
};

start()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
