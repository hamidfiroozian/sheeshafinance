import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks:
  {
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
      accounts:
        ['c43766a57a118e09e3b4dcda38685d2b1bc6e0872af1f9e51dd4bd704d77abde']
    },
    hardhat: {
      chainId: 1337,
      // chainId: 31337,
    },
    ganash: {
      url: "http://127.0.0.1:7545",
      accounts: [
        "083389c3fc4a5b9d98998684662fcb2507836a05fe182e2cd3686280c5b667dc",
      ],
    },
  },
};

export default config;
