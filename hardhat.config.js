/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: "8FVIW8PAYCQIW1DUYVHI5G9AHC4K8KN45D"
  }
};
//0x7B962954F9426B8f7388Cdcf1Ec1Bd6F6BffD665