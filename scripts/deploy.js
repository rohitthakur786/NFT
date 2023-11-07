async function main() {
  const myNFT2 = await ethers.getContractFactory("myNFT2");

  // Start deployment, returning a promise that resolves to a contract object
  const MyNFT2 = await myNFT2.deploy();
  console.log("Contract deployed to address:", MyNFT2.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//0x9ede60299D03F11926d0F52effbcC5378156187a